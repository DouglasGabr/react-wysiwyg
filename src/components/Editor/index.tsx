import React from "react";
import { EditorContextProvider } from "../../contexts/EditorContext";

export type EditorProps = {};

export default function Editor(props: EditorProps): JSX.Element {
  return (
    <EditorContextProvider>
      <div>Editor</div>
    </EditorContextProvider>
  );
}
