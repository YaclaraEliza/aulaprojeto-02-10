const express = require("express");
const router = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");

const Produto = require('./Produto')
const produtoController=require("./produtos/ProdutoController")
app.use("/",produtoController);
connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com o Banco de Dados");
    })
    .catch((msgErro) => {
        console.log(msgErro);
    })

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

//EJS como view engine
router.set('view engine', 'ejs');

//definindo a pasta de arquivos estaticos
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.render("index");
});

app.listen(8080, () => {
    console.log("app rodando");
});