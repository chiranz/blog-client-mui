import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ClipboardItem from "./ClipboardItem";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ImageUrls() {
  const classes = useStyles();

  return (
    <List dense className={classes.root}>
      {[
        "https://picsum.photos/200",
        "https://picsum.photos/300",
        "https://picsum.photos/400",
        "https://picsum.photos/500",
      ].map((value, index) => {
        return (
          <ClipboardItem
            key={`${Math.floor(Math.random() * 99)}${index}`}
            value={value}
            index={index}
          />
        );
      })}
    </List>
  );
}
