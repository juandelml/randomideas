const express = require('express');
const router = express.Router();

const ideas = [
    {
        id: 1,
        text: 'Noticiero positivo, un noticiero que solo comparte noticias positivas, alentadoras',
        tag: 'Tecnología',
        username: 'PeterParker',
        date: '2024-05-16',
    },
    {
        id: 2,
        text: 'Cartones de leche que cambian de color conforme a lo vieja que se vuelve la leche',
        tag: 'Inventos',
        username: 'MatthewMurdock',
        date: '2024-05-16',
    },
    {
        id: 3,
        text: 'Aplicación de localización de cajeros automáticos que te muestra el cajero más cercano y si está en servicio',
        tag: 'Software',
        username: 'FoggyNelson',
        date: '2024-05-16',
    },
];

// Get all ideas
router.get('/', (req, res) => {
    res.json({ succes: true, data: ideas });
});

// Get single idea
router.get('/:id', (req, res) => {
    const idea = ideas.find((idea) => idea.id === +req.params.id);

    if(!idea) {
        return res
            .status(404)
            .json({ succes: false, error: 'Resource not found' });
    }
    
    res.json({ succes: true, data: idea });
});

module.exports = router;