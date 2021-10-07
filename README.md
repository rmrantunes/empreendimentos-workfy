<h1 align="center">
   Desafio NextJS Workfy
  
<br>
<h3 align="center">
Frontend Challenge
   
<br>
</h3>
</h1>

Nosso desafio consiste em o usuário ter uma lista de empreendimentos cadastrados. Nesse site deve haver a possibilidade do usuario listar os empreendimentos, criar novos empreendimentos, editar empreendimento, e apagar empreendimento;

Extras: Sera possível também filtrar pelo nome, e ter paginação com limitação de 10 empreendimentos para cada clique em "carregar mais".

Quando possível componentizar o código, indetificando botões e estruturas que se repetem.

Os dados serão servidos via um Fake api que esta nesse repositório(enterprises-server).

Utilize o figma como base para o cadastro e exibição de dados. [FIGMA do Projeto](https://www.figma.com/file/8MFTHBKNLmMVNCedgukVzZ/Desafio?node-id=0%3A1)

Para consulta do CEP poderá utilizar API pública [ViaCEP](https://viacep.com.br/)

## Para rodar a Fake api:

- yarn add [json-server](https://www.npmjs.com/package/json-server)
- adicionam o seguinte script no package.json:
  - "server": "json-server --watch server.json --port 3001"
- Rodar server: yarn server
- estará rodando em http://localhost:3001/

## Criar uma aplicação NextJS

- [ ] Rodar na web
- [x] Utilizar Typescript
- [x] Listar Empreendimentos
- [x] Criar Empreendimento
- [x] Editar Empreendimento
- [x] Deletar Empreendimento
- [x] Styled-components para construção do layout
- [x] Responsivo
- [x] Subir no github, ou bitbucket e afins..

## Extras

- [x] Utilizar o getServerSideProps
- [x] utilizar o axios
- [x] Filtrar pelo nome do empreendimento.
- [x] Paginação.

Encaminhar projeto concluido com assunto: "Challenge" para: hello@vix.dev
