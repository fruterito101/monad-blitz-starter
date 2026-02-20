'use client'

import { usePrivy } from '@privy-io/react-auth'
import { useWallets } from '@privy-io/react-auth'

export function ConnectButton() {
  const { ready, authenticated, login, logout, user } = usePrivy()
  const { wallets } = useWallets()

  if (!ready) {
    return (
      <button 
        disabled
        className="bg-gray-600 text-white px-6 py-3 rounded-lg opacity-50"
      >
        Cargando...
      </button>
    )
  }

  if (!authenticated) {
    return (
      <button 
        onClick={login}
        className="bg-monad-purple hover:bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold transition-all"
      >
        🔐 Conectar
      </button>
    )
  }

  const wallet = wallets[0]
  const shortAddress = wallet?.address 
    ? `${wallet.address.slice(0, 6)}...${wallet.address.slice(-4)}`
    : 'Sin wallet'

  return (
    <div className="flex items-center gap-4">
      <div className="text-sm">
        <div className="text-gray-400">Conectado como</div>
        <div className="font-mono text-monad-purple">{shortAddress}</div>
        {user?.email && (
          <div className="text-gray-500 text-xs">{user.email.address}</div>
        )}
      </div>
      <button 
        onClick={logout}
        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm transition-all"
      >
        Salir
      </button>
    </div>
  )
}
