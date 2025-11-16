const express = require('express');
const path = require('path'); 
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public'))); // ✅ Modifique esta linha

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html')); // ✅ Modifique esta linha
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});