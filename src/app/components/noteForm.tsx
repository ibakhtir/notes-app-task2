import React, { useState } from "react";

import { useAppDispatch } from "../redux/store";
import { Note } from "../redux/notes/types";
import { saveNote } from "../redux/notes/slice";
import { getDateFromText } from "../utils/getDate";
import generateId from "../utils/generateId";
import Button from "./common/button";
import TextField from "./common/forms/textField";
import SelectField from "./common/forms/selectField";
import { InputValue } from "./common/forms/types";

type NoteFormProps = {
  note: Note | null;
  onCloseModal: () => void;
};

const initialState = {
  title: "",
  body: "",
  category: "Task"
};

const NoteForm: React.FC<NoteFormProps> = ({ note, onCloseModal }) => {
  const [data, setData] = useState(note || initialState);
  const [errors, setErrors] = useState({ title: "", body: "" });

  const dispatch = useAppDispatch();

  // basic validation

  const validate = () => {
    let isValid = true;

    if (data.body.trim() === "") {
      setErrors((prevState) => ({ ...prevState, body: "Body is required" }));
      isValid = false;
    } else {
      setErrors((prevState) => ({ ...prevState, body: "" }));
    }

    if (data.title.trim() === "") {
      setErrors((prevState) => ({ ...prevState, title: "Title is required" }));
      isValid = false;
    } else {
      setErrors((prevState) => ({ ...prevState, title: "" }));
    }

    return isValid;
  };

  // data from input

  const handleChange = (target: InputValue) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }));
  };

  // submit

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const isValid = validate();

    if (isValid) {
      if (note) {
        dispatch(
          saveNote({
            ...data,
            id: note.id,
            createdAt: note.createdAt,
            dates: getDateFromText(data.body),
            isArchived: note.isArchived
          })
        );
      } else {
        dispatch(
          saveNote({
            ...data,
            id: generateId(),
            createdAt: Date.now(),
            dates: getDateFromText(data.body),
            isArchived: false
          })
        );
      }

      onCloseModal();
    }
  };

  return (
    <form
      className="flex flex-col justify-center py-1 px-2"
      onSubmit={handleSubmit}
    >
      <TextField
        name="title"
        value={data.title}
        placeholder="Name your plan"
        error={errors.title}
        onChange={handleChange}
      />
      <TextField
        name="body"
        value={data.body}
        placeholder="Describe your plan"
        error={errors.body}
        onChange={handleChange}
      />
      <SelectField
        options={[
          { label: "Task", value: "task" },
          { label: "Random Thought", value: "random-thought" },
          { label: "Idea", value: "idea" }
        ]}
        name="category"
        value={data.category}
        onChange={handleChange}
      />
      <div className="text-white text-end mt-5">
        <Button className="bg-save ml-1" type="submit">
          Save
        </Button>
        <Button className="bg-cancel ml-1" type="button" onClick={onCloseModal}>
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default NoteForm;
