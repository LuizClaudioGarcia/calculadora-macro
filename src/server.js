import app from './routes'

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log("Servidor esta rodando na porta: " + PORT);
})