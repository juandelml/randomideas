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

// Add an idea
router.post('/', (req, res) => {
    const idea = {
        id: ideas.length + 1,
        text: req.body.text,
        tag: req.body.tag,
        username: req.body.username,
        date: new Date().toISOString().slice(0, 10)
    }

    ideas.push(idea);

    res.json({ success: true, data: idea });
});

// Update idea
router.put('/:id', (req, res) => {
    const idea = ideas.find((idea) => idea.id === +req.params.id);

    if(!idea) {
        return res
            .status(404)
            .json({ succes: false, error: 'Resource not found' });
    }
    
    idea.text = req.body.text || idea.text;
    idea.tag = req.body.tag || idea.tag;

    res.json({ succes: true, data: idea });
});

// Delete idea
router.delete('/:id', (req, res) => {
    const idea = ideas.find((idea) => idea.id === +req.params.id);

    if(!idea) {
        return res
            .status(404)
            .json({ succes: false, error: 'Resource not found' });
    }
    
    const index = ideas.indexOf(idea);
    ideas.splice(index, 1);
     
    res.json({ succes: true, data: `The idea with the id ${idea.id} was deleted` });
});

module.exports = router;