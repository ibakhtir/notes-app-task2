import { RootState } from "../store";
import { Stats } from "./types";

export const getNotes = (state: RootState) => state.notes;

export const getActiveNotes = (state: RootState) => {
  return state.notes.filter((note) => note.isArchived === false);
};

export const getArchivedNotes = (state: RootState) => {
  return state.notes.filter((note) => note.isArchived === true);
};

export const getStats = (state: RootState) => {
  const stats: Stats = {};

  state.notes.forEach((note) => {
    if (!stats[note.category]) {
      stats[note.category] = {
        active: note.isArchived === false ? 1 : 0,
        archive: note.isArchived === false ? 0 : 1
      };
    } else {
      stats[note.category].active += note.isArchived === false ? 1 : 0;
      stats[note.category].archive += note.isArchived === false ? 0 : 1;
    }
  });

  return Object.keys(stats).map((category) => {
    return {
      id: category,
      active: stats[category].active,
      archive: stats[category].archive
    };
  });
};
