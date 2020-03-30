// OUVINDO NA PORTA 3333

const express = require('express') //importando o modulo chamado 'express'
const cors = require('cors')
const routes = require('./routes')

const app = express()

app.use(express.json()) // antes de todas as requisicoes, express converta o json em um objeto js
app.use(cors()) // quem vai poder acessar a aplicacao / metodo de seguranca
app.use(routes)

// ROTA / RECURSO por ex o /user (estou tentando buscar a tabela users)

/*Metodos HTTP:
*GET: Buscar uma informacao no backend > SELECT
*POST: Criar uma informacao no back-end > INSERT
*PUT: Alterar uma informacao no backend > UPDATE
*DELETE: Deletar uma informaca no backend > DELETE
*/

/* 
* Tipos de parametros:
*QUERY: PARAMETROS NOMEADOS ENVIADOS NA ROTA APÓS O SIMBOLO '?' (FILTROS/PAGINACAO)
*ROUTE PARAMS: PARAMETROS UTILIZADOS PARA IDENTIFICAR DE UM UNICO RECURSO EX: /users/:id
*REQUEST BODY: CORPO DA REQUISICAO, UTILIZADO PARA CRIAR OU ALTERAR RECURSOS
*/

/*
*SQL(relacionais): MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
*NoSQL(nao relacionais): MOngoDB, CouchDB, etc
*/

/* 3 FORMAS DE COMUNICAR COM O BD

*DRIVER BD PARA NODE: SELECT * FROM users 
*QUERY BUILDER(utiliza js e é melhor pois esta pronto para aceitar qlqr banco sql): table('users').select(*).where() 
*/ 



app.listen(3333) // quando o node for iniciado ele escutara a porta 3333> localhost:3333