'use client'

import { useState } from 'react'
import { useWriteContract, useWaitForTransactionReceipt } from 'wagmi'
import { usePrivy } from '@privy-io/react-auth'
import { BLITZ_COLLECTION_ADDRESS, BLITZ_COLLECTION_ABI } from '@/lib/contracts'

interface MintButtonProps {
  tokenId: number
  tokenName: string
  onSuccess?: () => void
}

export function MintButton({ tokenId, tokenName, onSuccess }: MintButtonProps) {
  const { authenticated } = usePrivy()
  const [amount, setAmount] = useState(1)

  const { writeContract, data: hash, isPending, error } = useWriteContract()

  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({
    hash,
  })

  const handleMint = async () => {
    writeContract({
      address: BLITZ_COLLECTION_ADDRESS,
      abi: BLITZ_COLLECTION_ABI,
      functionName: 'mint',
      args: [BigInt(tokenId), BigInt(amount)],
    })
  }

  if (!authenticated) {
    return (
      <button 
        disabled 
        className="bg-gray-600 text-white px-4 py-2 rounded-lg opacity-50 w-full"
      >
        Conecta tu wallet primero
      </button>
    )
  }

  if (isSuccess) {
    return (
      <div className="text-center">
        <div className="text-green-400 font-semibold">✅ Minteado!</div>
        <a 
          href={`https://monad-testnet.socialscan.io/tx/${hash}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-monad-purple text-sm underline"
        >
          Ver transacción
        </a>
      </div>
    )
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <label className="text-gray-400 text-sm">Cantidad:</label>
        <input
          type="number"
          min="1"
          max="10"
          value={amount}
          onChange={(e) => setAmount(Math.max(1, parseInt(e.target.value) || 1))}
          className="bg-gray-800 border border-gray-700 rounded px-3 py-1 w-20 text-center"
        />
      </div>
      
      <button
        onClick={handleMint}
        disabled={isPending || isConfirming}
        className="bg-monad-purple hover:bg-purple-600 disabled:bg-gray-600 disabled:opacity-50 text-white px-4 py-2 rounded-lg font-semibold w-full transition-all"
      >
        {isPending ? '⏳ Confirmando...' : 
         isConfirming ? '⛏️ Minteando...' : 
         `🎨 Mintear ${tokenName}`}
      </button>

      {error && (
        <div className="text-red-400 text-sm">
          Error: {error.message.slice(0, 100)}
        </div>
      )}
    </div>
  )
}
