# Cinetag - Plataforma de Vídeos

**Cinetag** é uma plataforma de vídeos online desenvolvida como parte do curso da Alura. O projeto oferece uma interface onde os usuários podem assistir a vídeos, favoritar conteúdos e navegar por uma galeria de vídeos de forma dinâmica e interativa.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **JavaScript**: Linguagem de programação utilizada.
- **CSS**: Estilização da aplicação.
- **React Router DOM**: Gerenciamento de rotas na aplicação.
- **Context API**: Gerenciamento de estado global para favoritos.

## Funcionalidades

- **Galeria de Vídeos**: Exibição de vídeos com capa, título e link.
- **Favoritos**: Possibilidade de favoritar e desfavoritar vídeos.
- **Navegação**: Rotas para a página inicial e a página de favoritos.
- **Design Responsivo**: Interface adaptável para diferentes dispositivos.

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

- **public/**: Contém os arquivos estáticos, como imagens e o arquivo `index.html`.
- **src/**: Contém todo o código-fonte do projeto.
  - **components/**: Componentes reutilizáveis, como `Banner`, `Cabecalho`, `Card`, `Container`, etc.
  - **contextox/**: Contexto global para gerenciar os vídeos favoritos.
  - **pages/**: Páginas da aplicação (Início e Favoritos).
  - **json/**: Dados dos vídeos exibidos na galeria.
  - **routes.js**: Configuração das rotas da aplicação.

## Como Rodar o Projeto

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/cinetag.git
   ```

2. Navegue até a pasta do projeto:
   ```bash
   cd cinetag
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Execute o projeto:
   ```bash
   npm start
   ```

   A aplicação estará disponível em `http://localhost:3000`.

## Scripts Disponíveis

- **`npm start`**: Inicia o servidor de desenvolvimento.
- **`npm run build`**: Cria uma versão otimizada para produção.
- **`npm test`**: Executa os testes.
- **`npm run eject`**: Remove a dependência de build e permite customizações avançadas.

## Licença

Este projeto está licenciado sob a MIT License. Consulte o arquivo LICENSE para mais detalhes.

## Contato

Se você tiver alguma dúvida ou quiser entrar em contato, sinta-se à vontade para me enviar um e-mail ou me encontrar no LinkedIn.

- **E-mail**: dev.roumillac@gmail.com
- **LinkedIn**: [Diogo Roumillac](https://www.linkedin.com/in/diogo-roumillac-95245766/)

---

**Nota**: Este projeto foi desenvolvido como parte do meu aprendizado em React e está em constante evolução. Novas funcionalidades e melhorias serão adicionadas ao longo do tempo. Fique à vontade para contribuir ou sugerir melhorias!
