const router = require("../src/configs/routes");
const express = require("express");

const SERVER_PORT = 1334;
const app = express();

app.set('view engine', 'ejs');

app.listen(SERVER_PORT, (error) => {
    if (!error)
        console.log(`Servidor iniciado em ${SERVER_PORT}`);
    else
        console.error("Ocorreu um erro ao tentar iniciar servidor");
});

app.use("/", router);
app.use(express.static('views'));
