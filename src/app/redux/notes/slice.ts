import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { NotesSliceState, Note } from "./types";

const initialState: NotesSliceState = {
  notes: [
    {
      id: "882338",
      title: "Book",
      body: "Read the book.",
      category: "Random Thought",
      createdAt: 1663335828906,
      dates: [],
      isArchived: false
    },
    {
      id: "882335",
      title: "Dentist",
      body: "I am gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021.",
      category: "Task",
      createdAt: 1663335828905,
      dates: ["3/5/2021", "5/5/2021"],
      isArchived: false
    }
  ]
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    saveNote: (state, action: PayloadAction<Note>) => {
      const existNote = state.notes.find((n) => n.id === action.payload.id);

      if (existNote) {
        existNote.title = action.payload.title;
        existNote.body = action.payload.body;
        existNote.category = action.payload.category;
        existNote.dates = action.payload.dates;
        existNote.isArchived = action.payload.isArchived;
      } else {
        state.notes.push(action.payload);
      }
    },

    deleteNote: (state, action: PayloadAction<string>) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    }
  }
});

const { reducer: notesReducer, actions } = notesSlice;

export const { saveNote, deleteNote } = actions;

export default notesReducer;
