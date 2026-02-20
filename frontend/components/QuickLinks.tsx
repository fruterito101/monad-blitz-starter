'use client'

import { BLITZ_COLLECTION_ADDRESS } from '@/lib/contracts'

export function QuickLinks() {
  const links = [
    {
      icon: '📄',
      title: 'Ver Contrato',
      description: 'Explorer de Monad',
      href: `https://monad-testnet.socialscan.io/address/${BLITZ_COLLECTION_ADDRESS}`,
    },
    {
      icon: '🚰',
      title: 'Faucet',
      description: 'Obtén MON gratis',
      href: 'https://faucet.monad.xyz',
    },
    {
      icon: '📚',
      title: 'Documentación',
      description: 'Aprende Monad',
      href: 'https://docs.monad.xyz',
    },
    {
      icon: '🐙',
      title: 'GitHub',
      description: 'Código fuente',
      href: 'https://github.com/fruterito101/monad-blitz-starter',
    },
  ]

  return (
    <div className="mb-16">
      <h3 className="text-2xl font-bold mb-8 text-center">🔗 Links Rápidos</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {links.map((link) => (
          <a
            key={link.title}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900/50 rounded-xl p-6 text-center hover:bg-gray-900 transition-all border border-gray-800 hover:border-monad-purple/50 group"
          >
            <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">{link.icon}</div>
            <div className="font-bold mb-1">{link.title}</div>
            <div className="text-gray-400 text-sm">{link.description}</div>
          </a>
        ))}
      </div>
    </div>
  )
}
