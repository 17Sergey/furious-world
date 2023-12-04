import React, { ChangeEvent } from 'react'
import { useState } from 'react'

interface NewNoteInputProps {
    addNote(note: string) : void;
}

export const NewNoteInput: React.FC<NewNoteInputProps> = ({ addNote }) => {
    const [note, setNote] = useState("");

    const updateNote = (event: ChangeEvent<HTMLInputElement>) => {
        setNote(event.target.value);
    }

    const onAddNote = () => {
        addNote(note);
        setNote("");
    }

    return (
        <div className="newNote">
            <input onChange={updateNote} value={note} type="text" name="note" placeholder="note" />
            <button onClick={onAddNote}>Add note</button>
        </div>
    );
}