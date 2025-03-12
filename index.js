const express = require('express');
const {getAllNotes, createNote, updateNote, deleteNote } = require('./notes');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/notes', (req, res) => {
    const notes = getAllNotes();
    res.status(200).json(notes);
}
);

app.post('/notes', (req, res) => {
    const { title, description } = req.body;
    if (!title || !description) {
        return res.status(400).json({ error: 'Title and description are required' });
    }
    const newNote = createNote(
        title,
        description
    );
    res.status(201).json({ id: newNote.id, message: 'Note created successfully' });
});

app.put('/notes', (req, res) => {
    const { id, title, description } = req.body;
    if (!id || !title || !description) {
        return res.status(400).json({ error: 'Id, title and description are required' });
    }
    const updated = updateNote(
        id,
        title,
        description
    );
    if (!updated) {
        return res.status(404).json({ error: 'Note not found' });
    }
    res.status(200).json({ message: 'Note updated successfully' });
});

app.delete('/notes', (req, res) => {
    const { id } = req.body;
    if (!id) {
        return res.status(400).json({ error: 'Id is required' });
    }
    const deleted = deleteNote(id);
    if (!deleted) {
        return res.status(404).json({ error: 'Note not found' });
    }
    res.status(200).json({ message: 'Note deleted successfully' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});