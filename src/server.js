import app from './routes'

app.listen(process.env.PORT || 8080, () => {
    console.log("Servidor esta rodando na porta " + (process.env.PORT || 8080));
})