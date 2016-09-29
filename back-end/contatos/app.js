var app = require('express')();

app.get('/contatos', function (request, response) {
    response.send("<html><body><h1>testando</h1></body></html>");
})

app.get('/api/contatos', function (request, response) {
    response.header("Access-Control-Allow-Origin", "");
    var contatos = [{nome: "Andre", telefone: "85-99751-3122"},
                    {nome: "Marta", telefone:"85-99131-1245"}];

   response.json(contatos);
})

app.listen(80, function () {
    console.log("servidor rodando");
})
