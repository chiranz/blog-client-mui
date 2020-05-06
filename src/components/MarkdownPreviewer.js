import React from "react";
import ReactMarkdown from "react-markdown";
import Container from "@material-ui/core/Container";



export default function MarkdownPreviewer({ title, body }) {
  return (
    <Container maxWidth="md">
      <h1>{title}</h1>
      <ReactMarkdown source={body} />
    </Container>
  );
}
