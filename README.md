# 🌟 ArjoStore - Fragrâncias de Luxo

![Banner](https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=1200)

Bem-vindo ao **ArjoStore**, uma plataforma de e-commerce moderna e performática dedicada à venda de perfumes e fragrâncias de luxo. Este projeto foi desenvolvido com tecnologias de ponta para oferecer uma experiência de usuário fluida e um gerenciamento eficiente.

---

## 🚀 Tecnologias Utilizadas

O projeto é dividido em uma arquitetura Fullstack Moderna:

### Frontend
- **React 18** + **Vite**: Para uma interface rápida e reativa.
- **TypeScript**: Garantindo robustez e tipagem estática.
- **Tailwind CSS**: Estilização moderna e responsiva.
- **React Router Dom**: Navegação entre páginas.
- **React Hot Toast**: Notificações amigáveis.

### Backend & Integrações
- **Vercel Functions**: Backend serverless escalável.
- **Firebase**: Autenticação e banco de dados.
- **Firebase Admin**: Gerenciamento seguro no servidor.
- **Axios**: Consumo de APIs.
- **JWT (JsonWebToken)**: Segurança nas sessões.

---

## ✨ Funcionalidades

- 🛍️ **Catálogo de Produtos**: Navegação por categorias e busca detalhada.
- 🔐 **Autenticação Segura**: Login e Cadastro integrados ao Firebase.
- 🛒 **Carrinho de Compras**: Gestão dinâmica de itens.
- 💳 **Checkout Completo**: Fluxo de pagamento e criação de pedidos.
- 📦 **Rastreamento**: Consulta de CEP integrada e status de pedidos.
- 📱 **Design Responsivo**: Experiência otimizada para Desktop e Mobile.

---

## 🛠️ Como Executar o Projeto

Siga os passos abaixo para rodar o projeto localmente:

### Pré-requisitos
- Node.js instalado (v18 ou superior recomendado).
- Gerenciador de pacotes `npm`.

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/ArjoStore.git
   ```

2. Entre na pasta do projeto:
   ```bash
   cd ArjoStore
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Configure as variáveis de ambiente:
   - Crie um arquivo `.env` na raiz baseado no `env.example`.
   - Preencha com suas credenciais do Firebase e Vercel.

### Rodando o Frontend
```bash
npm run dev
```
A aplicação estará disponível em `http://localhost:5173`.

---

## 📂 Estrutura de Pastas

```text
ArjoStore/
├── api/          # Backend (Vercel Functions)
├── assets/       # Imagens e Recursos estáticos
├── public/       # Arquivos públicos do Vite
└── src/          # Código fonte do Frontend
    ├── components/ # Componentes reutilizáveis
    ├── pages/      # Páginas da aplicação
    ├── services/   # Integrações com API
    └── context/    # Estados globais (Context API)
```

---

## 📝 Licença

Este projeto está sob a licença [MIT](./LICENSE).

---

Feito com ❤️ por [VitorSantos32](https://github.com/VitorSantos32)
