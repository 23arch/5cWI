const express = require('express');
const app = express();
const port = 3000;

let people = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
];

app.use(express.json());

app.get('/person', (req, res) => res.json(people));

app.post('/person', (req, res) => {
    let person = req.body;
    
    if (!person.id || !person.name) {
        res.status(400).send('Bitte ID und Name angeben!');
        return;
    }

    people.push(person);
    res.send('Person wurde hinzugefügt!');
});

app.put('/person/:id', (req, res) => {
    let id = req.params.id;
    let newPersonData = req.body;
    let person = people.find(p => p.id == id);

    if (!person) {
        res.status(404).send('Person nicht gefunden!');
        return;
    }

    person.name = newPersonData.name || person.name;
    res.send('Person wurde aktualisiert!');
});

app.delete('/person/:id', (req, res) => {
    let id = req.params.id;
    let index = people.findIndex(p => p.id == id);

    if (index === -1) {
        res.status(404).send('Person nicht gefunden!');
        return;
    }

    people.splice(index, 1);
    res.send('Person wurde gelöscht!');
});