'use client'

export function HowItWorks() {
  const steps = [
    {
      number: '01',
      icon: '🔐',
      title: 'Conecta',
      description: 'Usa Google, Email o tu wallet favorita',
    },
    {
      number: '02',
      icon: '🚰',
      title: 'Obtén MON',
      description: 'Gratis desde el faucet de testnet',
    },
    {
      number: '03',
      icon: '🎨',
      title: 'Mintea',
      description: 'Elige tus items y míntealos',
    },
    {
      number: '04',
      icon: '✨',
      title: 'Colecciona',
      description: '¡Ya tienes NFTs en Monad!',
    },
  ]

  return (
    <div className="mb-16">
      <h3 className="text-2xl font-bold mb-8 text-center">⚡ Cómo Funciona</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {steps.map((step) => (
          <div
            key={step.number}
            className="bg-gray-900/50 rounded-xl p-6 text-center hover:bg-gray-900 transition-all border border-gray-800 hover:border-monad-purple/50"
          >
            <div className="text-4xl mb-3">{step.icon}</div>
            <div className="text-monad-purple text-sm font-mono mb-1">Paso {step.number}</div>
            <div className="font-bold mb-1">{step.title}</div>
            <div className="text-gray-400 text-sm">{step.description}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
