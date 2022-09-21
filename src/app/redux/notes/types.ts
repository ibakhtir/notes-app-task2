export type Note = {
  id: string;
  title: string;
  body: string;
  category: string;
  createdAt: number;
  dates: string[];
  isArchived: boolean;
};

export interface NotesSliceState {
  notes: Note[];
}

export interface Stats {
  [key: string]: any;
}
