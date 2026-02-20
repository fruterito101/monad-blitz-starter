import { ConnectButton } from '@/components/ConnectButton'
import { Collection } from '@/components/Collection'
import { Stats } from '@/components/Stats'
import { WalletInfo } from '@/components/WalletInfo'
import { HowItWorks } from '@/components/HowItWorks'
import { QuickLinks } from '@/components/QuickLinks'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="border-b border-gray-800 sticky top-0 bg-[#0a0a0f]/90 backdrop-blur-sm z-50">
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
        <div className="inline-block bg-monad-purple/20 text-monad-purple px-4 py-1 rounded-full text-sm font-medium mb-6">
          🚀 Monad Blitz CDMX — Sábado 21 Feb
        </div>
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Tu primera colección en{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-monad-purple to-purple-400">
            Monad
          </span>
        </h2>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Conecta tu wallet, mintea items y explora el poder de ERC1155 
          en la blockchain más rápida del mundo.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#collection"
            className="bg-monad-purple hover:bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold transition-all inline-flex items-center justify-center gap-2"
          >
            🎨 Empezar a Mintear
          </a>
          <a 
            href="https://github.com/fruterito101/monad-blitz-starter"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold transition-all inline-flex items-center justify-center gap-2"
          >
            🐙 Ver Código
          </a>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-6xl mx-auto px-4">
        <Stats />
      </section>

      {/* How It Works */}
      <section className="max-w-6xl mx-auto px-4">
        <HowItWorks />
      </section>

      {/* Wallet Info */}
      <section className="max-w-6xl mx-auto px-4">
        <WalletInfo />
      </section>

      {/* Collection */}
      <section id="collection" className="max-w-6xl mx-auto px-4 pb-16">
        <h3 className="text-2xl font-bold mb-8 text-center">
          🎨 Items Disponibles
        </h3>
        <Collection />
      </section>

      {/* Quick Links */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <QuickLinks />
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="bg-gradient-to-r from-monad-purple/20 to-purple-900/20 rounded-2xl p-8 md:p-12 text-center border border-monad-purple/30">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            ¿Listo para construir en Monad?
          </h3>
          <p className="text-gray-400 mb-6 max-w-xl mx-auto">
            Este starter kit tiene todo lo que necesitas: contrato ERC1155, 
            frontend con Next.js y Privy integrado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://github.com/fruterito101/monad-blitz-starter"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all inline-flex items-center justify-center gap-2"
            >
              ⭐ Star en GitHub
            </a>
            <a 
              href="https://docs.monad.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-monad-purple hover:bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold transition-all inline-flex items-center justify-center gap-2"
            >
              📚 Aprender Monad
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-500">
          <p className="mb-4">
            Hecho con 🍓 por{' '}
            <a 
              href="https://frutero.club" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-monad-purple hover:underline"
            >
              Frutero
            </a>
            {' '}para Monad Blitz CDMX 2026
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="https://docs.monad.xyz" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              📚 Docs
            </a>
            <span>•</span>
            <a href="https://faucet.monad.xyz" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              🚰 Faucet
            </a>
            <span>•</span>
            <a href="https://monad-testnet.socialscan.io" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              🔍 Explorer
            </a>
            <span>•</span>
            <a href="https://monad.xyz" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              🟣 Monad
            </a>
            <span>•</span>
            <a href="https://frutero.club" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              🍓 Frutero
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
