<h1>Semana 9 - API - Metodos_GET_POST_DELETE - Reprograma 🚀</h1>

Aluna : [Ana Paula Lima ](https://www.linkedin.com/in/ana-paula-lima-3269214b/#) 

Prof.: Paula Allemand 

<h4>Exercício da semana</h4>

Essa semana a prof.: Paula nos ensinou a criar uma API no padrão MVC (Arquitetura Modelo-Visão-Controle ), e a usar os metodos GET, POST e DELETE.

Também tivemos uma aula com a professora Mayhhara Morais para aprimorar nossos conhecimentos em javascript e melhorar nossos codigos. 

GET para pesquisar as tabelas pelo ID do contato:

```
const getById = (request, response) => {
    const idRequirido = request.params.id
    const contatoFiltrada = contatoJson.find(contato => contato.id == idRequirido)

    response.status(200).send(contatoFiltrada)
}
```

POST para criar um novo contato:

```
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

```



DELETE para deletar um contato especifico:

```
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
```

