import { ConnectButton } from '@/components/ConnectButton'
import { Collection } from '@/components/Collection'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🟣</span>
            <div>
              <h1 className="text-xl font-bold">Monad Blitz</h1>
              <p className="text-gray-400 text-sm">Collection</p>
            </div>
          </div>
          <ConnectButton />
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Tu primera colección en{' '}
          <span className="text-monad-purple">Monad</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Conecta tu wallet, mintea items y explora el poder de ERC1155 
          en la blockchain más rápida.
        </p>
      </section>

      {/* Collection */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <h3 className="text-2xl font-bold mb-8 text-center">
          🎨 Items Disponibles
        </h3>
        <Collection />
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-500">
          <p>
            Hecho con 🍓 por{' '}
            <a 
              href="https://frutero.club" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-monad-purple hover:underline"
            >
              Frutero
            </a>
            {' '}para Monad Blitz CDMX
          </p>
          <p className="text-sm mt-2">
            <a 
              href="https://docs.monad.xyz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              Monad Docs
            </a>
            {' • '}
            <a 
              href="https://faucet.monad.xyz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              Faucet
            </a>
            {' • '}
            <a 
              href="https://monad-testnet.socialscan.io" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              Explorer
            </a>
          </p>
        </div>
      </footer>
    </main>
  )
}
