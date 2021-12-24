import { Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import React from "react";
import Mail from "../../Assets/mail.svg";
import Phone from "../../Assets/phone.svg";
function Contact() {
  return (
    <div className="page contact-container">
      <div className="contact-container-form">
        <div className="contact-container__heading">
          <h2>Contact</h2>
          <ul>
            <li>
              <img src={Mail} alt="email" />
              <p>email@goeshere.com</p>
            </li>
            <li>
              <img src={Phone} alt="email" />
              <p>(678)-232-2321</p>
            </li>
          </ul>
        </div>
        <form className="contact-form">
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
            rows={10}
            defaultValue="Default Value"
          />

          <Button variant="contained" fullWidth endIcon={<SendIcon />}>
            Send
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
