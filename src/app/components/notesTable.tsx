import React from "react";

import { Note } from "../redux/notes/types";
import { getDate } from "../utils/getDate";
import Button from "./common/button";
import Table from "./common/table/table";

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
        <div className="flex justify-end items-center">
          {!note.isArchived && (
            <Button
              type="button"
              color="bg-edit"
              restStyle="p-2 mr-1"
              onClick={() => onShowModal(note)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                />
              </svg>
            </Button>
          )}
          <Button
            type="button"
            color="bg-archive"
            restStyle="p-2 mr-1"
            onClick={() => onArchiveNote(note)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill={note.isArchived ? "#ced4da" : "none"}
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
              />
            </svg>
          </Button>
          <Button
            type="button"
            color="bg-delete"
            restStyle="p-2 mr-1"
            onClick={() => onDeleteNote(note.id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </Button>
        </div>
      )
    }
  ];

  return (
    <div className="overflow-auto h-80 mt-10 mb-5 scroll">
      <Table items={notes} columns={columns} />
    </div>
  );
};

export default NotesTable;
