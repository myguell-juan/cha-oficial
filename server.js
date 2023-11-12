// server.js
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Conectar ao banco de dados MongoDB
mongoose.connect('mongodb://localhost/meu-banco-de-dados', { useNewUrlParser: true, useUnifiedTopology: true });

// Definir o modelo de dados (exemplo)
const ItemSchema = new mongoose.Schema({
    nome: String,
    descricao: String,
});

const Item = mongoose.model('Item', ItemSchema);

// Middleware para permitir o uso de JSON
app.use(express.json());

// Rota para obter todos os itens
app.get('/api/itens', async(req, res) => {
    try {
        const itens = await Item.find();
        res.json(itens);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Rota para adicionar um novo item
app.post('/api/itens', async(req, res) => {
    const newItem = new Item(req.body);

    try {
        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});