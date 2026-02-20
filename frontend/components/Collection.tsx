'use client'

import { useReadContract, useReadContracts } from 'wagmi'
import { useWallets } from '@privy-io/react-auth'
import { BLITZ_COLLECTION_ADDRESS, BLITZ_COLLECTION_ABI } from '@/lib/contracts'
import { MintButton } from './MintButton'

const ITEMS = [
  { id: 1, emoji: '🏅' },
  { id: 2, emoji: '🎫' },
  { id: 3, emoji: '👑' },
]

export function Collection() {
  const { wallets } = useWallets()
  const userAddress = wallets[0]?.address as `0x${string}` | undefined

  // Leer info de todos los items
  const { data: itemsData, isLoading, refetch } = useReadContracts({
    contracts: ITEMS.flatMap(item => [
      {
        address: BLITZ_COLLECTION_ADDRESS,
        abi: BLITZ_COLLECTION_ABI,
        functionName: 'getItemInfo',
        args: [BigInt(item.id)],
      },
      {
        address: BLITZ_COLLECTION_ADDRESS,
        abi: BLITZ_COLLECTION_ABI,
        functionName: 'balanceOf',
        args: [userAddress || '0x0000000000000000000000000000000000000000', BigInt(item.id)],
      },
    ]),
  })

  if (isLoading) {
    return (
      <div className="text-center py-10">
        <div className="animate-pulse text-monad-purple text-xl">
          Cargando colección...
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {ITEMS.map((item, index) => {
        const itemInfo = itemsData?.[index * 2]?.result as [string, bigint, bigint, boolean] | undefined
        const balance = itemsData?.[index * 2 + 1]?.result as bigint | undefined

        const name = itemInfo?.[0] || `Item ${item.id}`
        const currentSupply = itemInfo?.[1] || 0n
        const maxSupply = itemInfo?.[2] || 0n
        const available = itemInfo?.[3] ?? true

        return (
          <div 
            key={item.id}
            className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-monad-purple transition-all"
          >
            <div className="text-6xl text-center mb-4">{item.emoji}</div>
            
            <h3 className="text-xl font-bold text-center mb-2">{name}</h3>
            
            <div className="text-center text-gray-400 text-sm mb-4">
              {maxSupply > 0n 
                ? `${currentSupply.toString()} / ${maxSupply.toString()} minteados`
                : `${currentSupply.toString()} minteados (ilimitado)`
              }
            </div>

            {userAddress && balance !== undefined && balance > 0n && (
              <div className="text-center text-monad-purple font-semibold mb-4">
                ✨ Tienes: {balance.toString()}
              </div>
            )}

            {available ? (
              <MintButton 
                tokenId={item.id} 
                tokenName={name}
                onSuccess={() => refetch()}
              />
            ) : (
              <div className="text-center text-red-400 font-semibold">
                ❌ Agotado
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
