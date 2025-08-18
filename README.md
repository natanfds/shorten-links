# Como rodar o projeto

## Requisitos

- Node.js v18.16.0 ou superior
- npm (vem com o Node.js) ou Yarn v1.22.20

## Passos

1. Clone o repositório

   ```bash
   git clone [URL_DO_REPOSITÓRIO]
   cd shorten-links
   ```

2. Instale as dependências

   ```bash
   # Usando npm
   npm install
   
   # OU usando Yarn
   yarn
   ```

3. Inicie o servidor de desenvolvimento

   ```bash
   # Usando npm
   npm run dev
   
   # OU usando Yarn
   yarn dev
   ```

   O servidor será iniciado com hot-reload usando nodemon.

4. Para produção, primeiro faça o build e depois inicie:

   ```bash
   # Build do projeto
   npm run build
   
   # Iniciar em produção
   npm start
   
   # OU com Yarn
   yarn build
   yarn start
   ```

5. Acesse a aplicação em:

   ```bash
   http://localhost:3000
   ```

## Scripts disponíveis

- `dev`: Inicia o servidor de desenvolvimento
- `build`: Compila o TypeScript para JavaScript
- `start`: Inicia o servidor em produção
- `lint`: Executa o linter no código
- `format`: Formata o código automaticamente
