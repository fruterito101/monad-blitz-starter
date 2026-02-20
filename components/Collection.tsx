'use client'

import { useReadContracts } from 'wagmi'
import { useWallets } from '@privy-io/react-auth'
import { BLITZ_COLLECTION_ADDRESS, BLITZ_COLLECTION_ABI } from '@/lib/contracts'
import { MintButton } from './MintButton'

const ITEMS = [
  { id: 1, emoji: '🏅', color: 'from-yellow-500/20 to-amber-900/20', border: 'border-yellow-500/30' },
  { id: 2, emoji: '🎫', color: 'from-blue-500/20 to-blue-900/20', border: 'border-blue-500/30' },
  { id: 3, emoji: '👑', color: 'from-purple-500/20 to-purple-900/20', border: 'border-purple-500/30' },
]

export function Collection() {
  const { wallets } = useWallets()
  const userAddress = wallets[0]?.address as `0x${string}` | undefined

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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {ITEMS.map((item) => (
          <div 
            key={item.id}
            className="bg-gray-900 rounded-xl p-8 animate-pulse"
          >
            <div className="h-20 bg-gray-800 rounded-full w-20 mx-auto mb-4"></div>
            <div className="h-6 bg-gray-800 rounded mb-2 mx-auto w-2/3"></div>
            <div className="h-4 bg-gray-800 rounded mx-auto w-1/2"></div>
          </div>
        ))}
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

        const progress = maxSupply > 0n 
          ? Number((currentSupply * 100n) / maxSupply) 
          : 0

        return (
          <div 
            key={item.id}
            className={`bg-gradient-to-br ${item.color} rounded-xl p-8 border ${item.border} hover:scale-105 transition-all duration-300`}
          >
            {/* Emoji */}
            <div className="text-7xl text-center mb-6 hover:animate-bounce cursor-default">
              {item.emoji}
            </div>
            
            {/* Name */}
            <h3 className="text-2xl font-bold text-center mb-2">{name}</h3>
            
            {/* Supply */}
            <div className="text-center text-gray-400 text-sm mb-4">
              {maxSupply > 0n 
                ? `${currentSupply.toString()} / ${maxSupply.toString()} minteados`
                : `${currentSupply.toString()} minteados • Ilimitado ∞`
              }
            </div>

            {/* Progress bar (if limited) */}
            {maxSupply > 0n && (
              <div className="w-full bg-gray-800 rounded-full h-2 mb-4">
                <div 
                  className="bg-monad-purple h-2 rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            )}

            {/* User balance */}
            {userAddress && balance !== undefined && balance > 0n && (
              <div className="text-center mb-4">
                <span className="bg-monad-purple/30 text-monad-purple px-4 py-2 rounded-full text-sm font-semibold">
                  ✨ Tienes: {balance.toString()}
                </span>
              </div>
            )}

            {/* Mint button */}
            {available ? (
              <MintButton 
                tokenId={item.id} 
                tokenName={name}
                onSuccess={() => refetch()}
              />
            ) : (
              <div className="text-center">
                <span className="bg-red-500/20 text-red-400 px-4 py-2 rounded-full text-sm font-semibold">
                  ❌ Agotado
                </span>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
