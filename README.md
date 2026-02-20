# 🟣 Monad Blitz Starter

> Full Stack template para construir en Monad — ERC1155 + Next.js + Privy

## ⚡ Quick Start

```bash
# 1. Clonar
git clone https://github.com/fruterito101/monad-blitz-starter.git
cd monad-blitz-starter

# 2. Setup contratos
cd contracts
cp .env.example .env
# Editar .env con tu private key
forge install
forge build

# 3. Deploy a Monad Testnet
forge script script/Deploy.s.sol:DeployScript \
  --rpc-url https://testnet-rpc.monad.xyz \
  --broadcast

# 4. Setup frontend
cd ../frontend
cp .env.example .env.local
# Editar con tu Privy App ID y contract address
npm install
npm run dev
```

## 📦 Qué incluye

### Contratos (`/contracts`)
- **BlitzCollection.sol** — ERC1155 con mint público
- Configurado para Monad (evm_version: prague)
- Deploy script listo
- Verificación incluida

### Frontend (`/frontend`)
- **Next.js 14** con App Router
- **Privy** para auth (Google, Email, Wallet)
- **wagmi + viem** para interacción con contrato
- Componentes listos para usar

## 🔧 Configuración

### Contratos

1. Obtén testnet MON del [faucet](https://faucet.monad.xyz)
2. Copia tu private key a `.env`
3. Deploya con `forge script`

### Frontend

1. Crea una app en [Privy Dashboard](https://dashboard.privy.io)
2. Copia el App ID a `.env.local`
3. Agrega la dirección del contrato deployado
4. `npm run dev`

## 🌐 Networks

| Network | Chain ID | RPC |
|---------|----------|-----|
| Testnet | 10143 | https://testnet-rpc.monad.xyz |
| Mainnet | 143 | https://rpc.monad.xyz |

## 📚 Recursos

- [Monad Docs](https://docs.monad.xyz)
- [Privy Docs](https://docs.privy.io)
- [Foundry Book](https://book.getfoundry.sh)

## 🆘 Troubleshooting

Ver [TROUBLESHOOTING.md](./TROUBLESHOOTING.md) para errores comunes.

---

Made with 🍓 by [Frutero](https://frutero.club) para Monad Blitz CDMX
