let notes = [];
let nextId = 1;

const getAllNotes = () => {
    return notes;
};

const createNote = (title, description) => {
    const newNote = { id: nextId++, title, description };
    notes.push(newNote);
    return newNote;
};
const updateNote = (id, title, description) => {
    const noteIndex = notes.findIndex((note) => note.id === id);
    if (noteIndex === -1) {
        return false;
    }
    notes[noteIndex] = {id, title, description};
    return true;
};

const deleteNote = (id) => {
    const initialLength = notes.length;
    notes = notes.filter((note) => note.id !== id);
    return notes.length !== initialLength;
}

module.exports = {
    getAllNotes,
    createNote,
    updateNote,
    deleteNote,
};