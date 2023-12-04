import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { NotesState, addNote } from '../../redux/slices/charactersSlice';

import { NewNoteInput } from './NewNoteInput/NewNoteInput';

export const Notes: React.FC = () => {
    const notes = useSelector<NotesState, NotesState["notes"]>( (state) => state.notes );
    const dispatch = useDispatch();
    const onAddNote = (note: string) => {
        dispatch(addNote(note));
    }
    return (
        <>
            <NewNoteInput addNote={onAddNote} />
            <div className="notes">
                {
                    notes.map(note => <div className="note">{note}</div>)
                }
            </div>
        </>
    );
}