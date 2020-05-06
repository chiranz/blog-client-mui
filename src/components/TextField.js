import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";
// Local Imports
import UploadImage from "./UploadImage";
import ImageUrls from "./ImageUrls";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%",
  },
  formControl: {
    width: "100%",
  },
}));

export default function FormInput({ title, setTitle, body, setBody }) {
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (title === "") {
      errors.title = "Cannot be empty!";
    }
    if (body === "") {
      errors.body = "Cannot be empty!";
    }
    if (Object.values(errors).length > 0) {
      setErrors(errors);
      return;
    }
  };
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <form onSubmit={handleSubmit} className={classes.form}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">
            <h2>New Post</h2>
          </FormLabel>
          <FormGroup>
            <TextField
              id="title"
              label="Title"
              variant="outlined"
              color="primary"
              margin="normal"
              size="medium"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              fullWidth
              error={errors.title}
              helperText={errors.title && errors.title}
            />
          </FormGroup>
          <FormGroup>
            <UploadImage />
          </FormGroup>
          <ImageUrls />
          <FormGroup>
            <TextField
              id="body"
              label="Body"
              variant="outlined"
              color="primary"
              margin="normal"
              size="medium"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              rows={12}
              fullWidth
              multiline
              error={errors.body}
              helperText={errors.body && errors.body}
            />
          </FormGroup>
          <div className={classes.actionGroup}>
            <Button variant="outlined">Cancle</Button>
            <Button variant="contained" color="primary" type="submit">
              Post
            </Button>
          </div>
        </FormControl>
      </form>
    </Container>
  );
}
