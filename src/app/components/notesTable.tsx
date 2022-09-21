import React from "react";

import { Note } from "../redux/notes/types";
import { getDate } from "../utils/getDate";
import Table from "./common/table/table";
import Button from "./common/button";

import pencilImg from "../assets/pencil.svg";
import archiveImg from "../assets/archive.svg";
import unarchiveImg from "../assets/unarchive.svg";
import trashImg from "../assets/trash.svg";

type NotesTableProps = {
  notes: Note[];
  onShowModal: (data: Note) => void;
  onArchiveNote: (data: Note) => void;
  onDeleteNote: (data: string) => void;
};

const NotesTable: React.FC<NotesTableProps> = ({
  notes,
  onShowModal,
  onArchiveNote,
  onDeleteNote
}) => {
  const columns = [
    {
      name: "Name",
      content: (note: Note) => note.title
    },
    {
      name: "Content",
      content: (note: Note) => note.body
    },
    {
      name: "Category",
      content: (note: Note) => note.category
    },
    {
      name: "Created",
      content: (note: Note) => getDate(note.createdAt, "full")
    },
    {
      name: "Dates",
      content: (note: Note) => note.dates.join(", ")
    },
    {
      name: "Actions",
      content: (note: Note) => (
        <div className="list-table__actions">
          {!note.isArchived && (
            <Button
              className="list-table__edit"
              type="button"
              onClick={() => onShowModal(note)}
            >
              <img src={pencilImg} alt="Pencil" />
            </Button>
          )}
          <Button
            className="list-table__archive"
            type="button"
            onClick={() => onArchiveNote(note)}
          >
            {note.isArchived ? (
              <img src={unarchiveImg} alt="Filled archive" />
            ) : (
              <img src={archiveImg} alt="Archive" />
            )}
          </Button>
          <Button
            className="list-table__delete"
            type="button"
            onClick={() => onDeleteNote(note.id)}
          >
            <img src={trashImg} alt="Trash" />
          </Button>
        </div>
      )
    }
  ];

  return (
    <div className="notes__table-wrapper">
      <Table items={notes} columns={columns} />
    </div>
  );
};

export default NotesTable;
