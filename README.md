# Footer Micro-Frontend

Este é o micro-frontend do **Footer** da aplicação, desenvolvido com **Next.js**, **Material UI** e **Single-SPA**.

## 🚀 Execução Local

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento (porta 3004)
npm run dev

# Build para produção
npm run build

# Executar em produção
npm start
```

## 🌐 Deploy na Vercel

### Deploy Automático
1. Push para GitHub
2. Conecte na Vercel
3. Configure Root Directory: `footer-mf`
4. Deploy automático

### Deploy Manual
```bash
npm run deploy
```

## 📦 Componente

O footer inclui:
- Informações da aplicação
- Links úteis e documentação
- Tecnologias utilizadas
- Redes sociais
- Copyright e créditos
- Design responsivo

## 🔧 Configuração

### Portas
- **Desenvolvimento**: 3004
- **Produção**: Definida pela Vercel

### Variáveis de Ambiente
```bash
NODE_ENV=production # Para build de produção
```

## 📁 Estrutura

```
footer-mf/
├── src/app/
│   ├── page.tsx          # Componente principal
│   ├── microfrontend.tsx # Entry point Single-SPA
│   └── layout.tsx        # Layout
├── next.config.ts        # Configuração Next.js
└── package.json
```

## 🎯 Single-SPA Integration

Este micro-frontend expõe as seguintes funções:
- `bootstrap()`: Inicialização
- `mount()`: Montagem no DOM
- `unmount()`: Desmontagem

## 🔗 Dependências

- Next.js 15
- Material UI 7
- Single-SPA 6
- TypeScript 5
