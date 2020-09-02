const express = require('express')
const app = express()
const valorModel = require('./models/valorModel')
const jwt = require('jsonwebtoken')
const body = require('body-parser')
const {urlencoded} = require('body-parser')

app.get('/nomes/alunos', (req, res) => {
    let alunos = [
        {'nome': 'Maria', 'sobrenome':'Rosa'},
        {'nome': 'Jose', 'sobrenome':'Azul'},
        {'nome': 'Pedro', 'sobrenome':'Amarelo'},
        {'nome': 'Marta', 'sobrenome':'Vermelho'},
        {'nome': 'Debora', 'sobrenome':'Barreto'},
    ]
    res.json(alunos)
})

app.get('/moeda/:valor', valorModel.obterValor)


app.listen(3000, () => {
    console.log('App funcionando')
})