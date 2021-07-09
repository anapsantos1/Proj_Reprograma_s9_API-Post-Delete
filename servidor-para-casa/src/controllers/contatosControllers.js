const contatoJson = require("../models/contatos.json");

const getAll = (request, response) => {
    response.status(200).send(contatoJson)
}

const getById = (request, response) => {
    const idRequirido = request.params.id
    const contatoFiltrada = contatoJson.find(contato => contato.id == idRequirido)

    response.status(200).send(contatoFiltrada)
}

const criarContato = (request, response) => {
    const nomeRequerida = request.body.nome
    const celularRequerido = request.body.celular
    const redesSociaisRequerido = request.body.redesSociais
const novoContato = {
    id: "12345",
    nome: nomeRequerida,
    celular: celularRequerido,
    redesSociais: redesSociaisRequerido
};



contatoJson.push(novoContato);
response.status(200).send(novoContato);


}

const apagarContato = (request, response) => {
    const idRequerido = request.params.id;
    const contatoFiltrada = contatoJson.find(contato => contato.id == idRequerido);
    
    const indice = contatoJson.indexOf(contatoFiltrada)
    remover = contatoJson.splice(indice, 1)

    response.status(200).send(
    [
        {
            "message": "Tarefa deletada com sucesso!"
        },

        contatoJson

    ]
    )

}

module.exports = {
    getAll,
    getById,
    criarContato,
    apagarContato
}