# Calculadora-Romana

Bem vindo ao repositório do Projeto Calculadora-Romana

## Sobre o Projeto

Esse projeto consiste em uma API com dois endpoints:
/register
/calculator

O primeiro endpoint é sobre registrar o usuário com seus dados, e essa requisição retornará um Token.

O segundo endpoint é sobre realizar o cáculo de quantos números o usuário inserir, contudo é preciso estar autorizado com o Token criado.
Essa requisição retornará todos os números a serem somados e subtraídos além de seus respectivos resultados convertidos em Algarítimos Romanos.


## Desenvolvimento

Este projeto foi desenvolvido utilizando JavaScript e NodeJs com Express e a arquitetura MSC (Model Service Controller).

## Utilizando o App

Primeiramente é necessário clonar o repositório:
git clone https://github.com/guiiffonseca/Calculadora-Romana.git

Após clonar o repositório é preciso entrar no diretório que se encontra o projeto, e então dentro do terminal rodar o comando:
npm start 

---

### Registrando um usuário: 

Para rodar o programa localmente é necessário usar algum programa de API Client.

Caso não tenha nenhum instalado, segue o link para instalação do Insomnia:
https://insomnia.rest/download

Então, com o progrma de API Client aberto, é preciso criar uma nova requisição do tipo POST, com o endpoint: 
http://localhost:3000/register

É nessa rota que será registrado o usuário e com isso, retornado um Token.

Dessa forma, criar um Body JSON:
Name:
Email:
Password:
Preechendo todos os campos.


Com o Token em mãos pode-se ir para a próxima rota tipo POST:
http://localhost:3000/calculator

---

### Fazendo os cálculos 

A partir da rota menciona acima e com o token retornado na rota /register, é necessário que na aba "Headers" seja criado uma chave 
"authorization" com o valor do token.
Então, criar outro Body Json com o campo:
Numbers: [];
Dentro do Array inserir os números que serão somados e subtraídos.

## Contato
email: guii.ffonsecca22@gmail.com


