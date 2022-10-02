import React, { useState } from "react";
import { useSelector } from "react-redux";
import { orderBy } from "lodash";

import NotesTable from "../components/notesTable";
import StatsTable from "../components/statsTable";
import NoteForm from "../components/noteForm";
import Button from "../components/common/button";
import Modal from "../components/common/modal";
import { useAppDispatch } from "../redux/store";
import { deleteNote, saveNote } from "../redux/notes/slice";
import { Note } from "../redux/notes/types";
import {
  getActiveNotes,
  getArchivedNotes,
  getStats
} from "../redux/notes/selectors";

const Main: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeNote, setActiveNote] = useState<null | Note>(null);
  const [isActiveTable, setActiveTable] = useState(true);

  const activeNotes = useSelector(getActiveNotes);
  const archivedNotes = useSelector(getArchivedNotes);
  const stats = useSelector(getStats);

  const dispatch = useAppDispatch();

  const setSort = (notes: Note[], path: string, order: "asc" | "desc") => {
    return orderBy(notes, [path], [order]);
  };

  const handleShowModal = (note: Note) => {
    setShowModal(true);
    setActiveNote(note);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setActiveNote(null);
  };

  const handleArchiveNote = (note: Note) => {
    if (isActiveTable) {
      dispatch(
        saveNote({
          ...note,
          isArchived: true
        })
      );
    } else {
      dispatch(
        saveNote({
          ...note,
          isArchived: false
        })
      );
    }
  };

  const handleDeleteNote = (id: string) => {
    dispatch(deleteNote(id));
  };

  const handleToggleTable = () => {
    setActiveTable((prevState) => !prevState);
  };

  return (
    <>
      <div>
        <section>
          <NotesTable
            notes={
              isActiveTable
                ? setSort(activeNotes, "createdAt", "desc")
                : setSort(archivedNotes, "createdAt", "desc")
            }
            onShowModal={handleShowModal}
            onArchiveNote={handleArchiveNote}
            onDeleteNote={handleDeleteNote}
          />
          <div className="text-white text-end mr-8 mb-1">
            <Button
              className="bg-archive-main tracking-wider mr-1"
              type="button"
              onClick={handleToggleTable}
            >
              {isActiveTable ? "Archive" : "Active"}
            </Button>
            <Button
              className="bg-add tracking-wider mr-1"
              type="button"
              onClick={() => setShowModal(true)}
            >
              Create
            </Button>
          </div>
        </section>
        <section>
          <StatsTable items={stats} />
        </section>
      </div>
      <Modal title="Note" isOpen={showModal}>
        <NoteForm note={activeNote} onCloseModal={handleCloseModal} />
      </Modal>
    </>
  );
};

export default Main;
