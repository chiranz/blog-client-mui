import React, { useRef, useState } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ContentCopy from "@material-ui/icons/FileCopy";
import Avatar from "@material-ui/core/Avatar";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  copyInput: {
    border: "none",
    color: "grey",
    outline: "none",
  },
  helperText: {
    color: "grey",
  },
}));

export default function ClipboardItem({ index, value }) {
  const [copied, setCopied] = useState(false);
  const urlRef = useRef();
  const handleCopy = () => {
    const url = urlRef.current;
    url.select();
    document.execCommand("copy");
    console.log(url);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  const classes = useStyles();

  return (
    <ListItem key={index}>
      <ListItemAvatar>
        <Avatar alt={`Avatar n°${index + 1}`} src={value} />
      </ListItemAvatar>
      <ListItemText>
        <input
          type="text"
          name={`url_${index}`}
          id={`url_${index}`}
          value={value}
          ref={urlRef}
          readOnly={true}
          className={classes.copyInput}
        />{" "}
        {copied && <small className={classes.helperText}>Copied!</small>}
      </ListItemText>
      <ListItemSecondaryAction>
        <Tooltip title="copy url">
          <IconButton onClick={handleCopy}>
            <ContentCopy color="inherit" style={{ color: "#bbbbbb" }} />
          </IconButton>
        </Tooltip>
      </ListItemSecondaryAction>
    </ListItem>
  );
}
