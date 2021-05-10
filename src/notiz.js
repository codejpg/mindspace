import React, { useState } from "react";
import { render } from "react-dom";
import { TextField } from '@material-ui/core';



const Notiz = (props) => {
  // resolves to new value in 2 seconds
  const mockSave = val =>
    new Promise(resolve => setTimeout(() => resolve(val), 2000));
    const handleChange = (event) => {
        props.saveNotes(event.target.value);
      };

  return (
    <form  noValidate autoComplete="off">
        <textarea className="notizInput"
          
          variant="filled"
          fullWidth
          fullHeight
          label="Notiz"
          defaultValue={props.getNotes()}
          onChange={handleChange}
        />
</form>
  );
};
export default Notiz
