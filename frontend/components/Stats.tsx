'use client'

import { useReadContracts } from 'wagmi'
import { BLITZ_COLLECTION_ADDRESS, BLITZ_COLLECTION_ABI } from '@/lib/contracts'

export function Stats() {
  const { data, isLoading } = useReadContracts({
    contracts: [
      {
        address: BLITZ_COLLECTION_ADDRESS,
        abi: BLITZ_COLLECTION_ABI,
        functionName: 'totalItems',
      },
      {
        address: BLITZ_COLLECTION_ADDRESS,
        abi: BLITZ_COLLECTION_ABI,
        functionName: 'totalSupply',
        args: [1n],
      },
      {
        address: BLITZ_COLLECTION_ADDRESS,
        abi: BLITZ_COLLECTION_ABI,
        functionName: 'totalSupply',
        args: [2n],
      },
      {
        address: BLITZ_COLLECTION_ADDRESS,
        abi: BLITZ_COLLECTION_ABI,
        functionName: 'totalSupply',
        args: [3n],
      },
    ],
  })

  const totalItems = data?.[0]?.result as bigint | undefined
  const supply1 = data?.[1]?.result as bigint | undefined
  const supply2 = data?.[2]?.result as bigint | undefined
  const supply3 = data?.[3]?.result as bigint | undefined

  const totalMinted = (supply1 || 0n) + (supply2 || 0n) + (supply3 || 0n)

  if (isLoading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {[1,2,3,4].map(i => (
          <div key={i} className="bg-gray-900/50 rounded-xl p-6 animate-pulse">
            <div className="h-8 bg-gray-800 rounded mb-2"></div>
            <div className="h-4 bg-gray-800 rounded w-2/3"></div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
      <div className="bg-gradient-to-br from-purple-900/50 to-gray-900 rounded-xl p-6 border border-purple-500/20">
        <div className="text-3xl font-bold text-monad-purple">{totalItems?.toString() || '3'}</div>
        <div className="text-gray-400 text-sm">Items Disponibles</div>
      </div>
      <div className="bg-gradient-to-br from-blue-900/50 to-gray-900 rounded-xl p-6 border border-blue-500/20">
        <div className="text-3xl font-bold text-blue-400">{totalMinted.toString()}</div>
        <div className="text-gray-400 text-sm">Total Minteados</div>
      </div>
      <div className="bg-gradient-to-br from-green-900/50 to-gray-900 rounded-xl p-6 border border-green-500/20">
        <div className="text-3xl font-bold text-green-400">ERC1155</div>
        <div className="text-gray-400 text-sm">Tipo de Contrato</div>
      </div>
      <div className="bg-gradient-to-br from-orange-900/50 to-gray-900 rounded-xl p-6 border border-orange-500/20">
        <div className="text-3xl font-bold text-orange-400">10K TPS</div>
        <div className="text-gray-400 text-sm">Monad Speed</div>
      </div>
    </div>
  )
}
