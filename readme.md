## 03/08/2020 ✅

### Documento com comandos 

- npm init -y:

Cria um arquivo package.json com estrutura padrão.


- package.json:

É responsável por descrever o seu projeto, informar as Engines (versão do node e do npm), url do repositório, versão do projeto, dependências de produção e de desenvolvimento entre outras coisas.

 - npm install express:

 É um framework minimalista, flexível, cria abstrações de rotas, middlewares e muitas outras funções para facilitar a criação tanto de API's quanto SPA's.

- npm install - save-:

Instala as dependências, e fica como padrão para todos os projetos node.

- dev nodemon:

Instala o nodemon que é uma ferramenta que verifica alterações nos arquivos do projeto e reinicia o aplicativo aplicando as alterações.

- npm run dev:

Roda o script que estará alocado no package.json, com a chave "dev".

<hr>

## 07/08/2020 - ✅

- Cada grupo deverá definir um projeto REST a ser criado ✅

- Colocar o nome do projeto bem como uma descrição da ideia: ✅

- Clone o repositório criado para a turma: https://gitlab.com/cleversonavelino/sistemasconvergentes202002.git ✅

- Cria uma branch para o grupo e crie um projeto node com o nome do sistema/ideia que vc's bolaram. ✅

### Nome do projeto: FAST SALES
### Descrição: Queremos desenvolver uma platafoma de vendas para um fornecedor de alimento.
Esse projeto é o começo do backend da plataforma.
### Branch: An-Je-La-Lu-Pe

<hr>

## 10/08/2020 ✅

- Criar um documento (word) e adicionar a definição de Modules do Noje.js ✅

- No projeto node criado para seu grupo adicionar duas rotas/controllers para atender requisições do tipo get. ✅

<hr>

## 14/08/2020 ✅

1 - Alterar e excluir via guid (Exemplo: guidVeiculo, guidUsuario) ✅

2 - Criar a construção de 2 cruds (de acordo com as funcionalidades do projeto escolhido) ✅

3 - Criar uma mensagem de erro caso o indice (guid) já exista no salvar ✅

<hr>

## 17/08/2020 0/3

1 - Alterar os métodos de put (Alterar Veiculo etc) para utilizar a função map.

2 - Criar 2 tipos de filtro por funcionalidade (Ex: buscar veiculo por placa, buscar veiculo por modelo)

3 - Alterar os métodos de delete (Excluir veiculo etc) para utilizar a função map.

<hr>

## 21/08/2020 0/2

1 - Utilizando a função map
Realize um cálculo para cada item que vc tenha salvo e apresente em uma chamada get 

Exemplo: Realize o cálculo do IPVA de cada veículo cadastrado (valor do veiculo * 3.5%)

Façam esta rotina para o sistema de vocês. 

2 - Utilizando a função reduce

Realize um cálculo para somar um valor específico de cada item salvo

Exemplo: Realize o somatório do ipva de todos os veículos

Faça esta rotina para o sistema de vocês

<hr>

## 24/08/2020 ✅

Tarefa 1

Criar um módulo (um arquivo .js)
Este módulo vocês terão o desafio de interceptar requisições http.
passar uma lista de ips ()
Caso o IP que chegue na requisição esteja na lista... manda uma resposta.
IP bloqueado

Tarefa 2
Modularizar a 'função' que intercepta os ips e adicionar èm um arquivo .js para reutilizar

Tarefa 3
Criar um yaml or json e adicionar a lista de IP's e carregar na função


<hr>

## 28/08/2020 ✅

1 - Setar o ambiente a rodar o app (dev, test prod) ✅

NODE_ENV 

2 - Modularizar a funcionalidade ✅

3 - ler o arquivo documento.doc do c:\ e copiar para a pasta storage ✅

4 - modularizar o funcionalidade de mover ✅

5 - Estudar a possibilidade de fazer upload de arquivos com o node.js ✅

Ex: var fileupload = require("express-fileupload");
app.use(fileupload());

<hr>

## 04/09/2020 ✅

1 - filtrem o tipo de arquivo que pode ser carregado (png, jpg) ✅

<hr>

## 11/09/2020 0/3

Criar a rotina para tratamento de erros na aplicação

1 - Para cada "endpoint" de salvar criar uma validação que pode
retornar um erro (bad request) para o usuário

2 - para cada crud criar 10 códigos de erro específicos

<hr>

## 14/09/2020 

Criar na rotina de cadastro o vínculo com o aquivo carregado (upload)  ✅

Exemplo:
{
"guidveiculo":"2",
"marca":"FIAT",
"modelo":"ARGO",
"image":"url_para_download_do_arquivo"

}]

Criar 2 lugares com a opção do try / catch
Criar 2 lugares com a opção do promise

<hr>

## 18/09/2020 ✅

Criar um frontzinho pra vermos o front conectado com o back ✅

<hr>

## 21/09/2020 

Publicar o app (node.js) na plataforma heroku (ou similar)

<hr>

