import { Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import React from "react";

function Contact() {
  return (
    <div className="page contact-container">
      <form className="contact-form">
        <h2>Contact</h2>
        <TextField
          sx={{ marginBottom: "1rem" }}
          id="outlined-basic"
          fullWidth
          label="Name"
          variant="outlined"
        />

        <TextField
          sx={{ marginBottom: "1rem" }}
          id="outlined-basic"
          label="Email"
          fullWidth
          variant="outlined"
        />

        <TextField
          sx={{ marginBottom: "1rem" }}
          id="outlined-multiline-static"
          label="Message"
          fullWidth
          multiline
          rows={6}
          defaultValue="Default Value"
        />

        <Button variant="contained" fullWidth endIcon={<SendIcon />}>
          Send
        </Button>
      </form>
    </div>
  );
}

export default Contact;
