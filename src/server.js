import app from './routes'

app.listen(process.env.PORT, () => {
    console.log("Servidor esta rodando na porta process.env.PORT");
})