const connection = require('../database/connection')

const crypto = require('crypto') // metodo para gerar uma string aleatoria

module.exports = {
    async index (request, response) {
        const ongs = await connection('ongs').select('*') //selecionar todos os campos da tabela ongs
    
        return response.json(ongs)

    },

    async create(request,response) {
        const {name, email, whatsapp, city, uf} = request.body

    const id= crypto.randomBytes(4).toString('HEX') //gera caracteres aleatorios

    await connection('ongs').insert({ //cadastro da ong
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    })

    return response.json({ id }) // pórem vai retornar só o id crypto
    },

    
}