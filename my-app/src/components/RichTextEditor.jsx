import React from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { FORMAT_TEXT_COMMAND } from "lexical";

import "./editor.css";

function ToolbarPlugin() {
  const [editor] = useLexicalComposerContext();

  const onClick = (format) => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, format);
  };

  return (
    <div className="toolbar">
      <button onClick={() => onClick("bold")}>Bold</button>
      <button onClick={() => onClick("italic")}>Italic</button>
      <button onClick={() => onClick("underline")}>Underline</button>
    </div>
  );
}

const theme = {
  paragraph: "editor-paragraph",
  bold: "editor-bold",
  italic: "editor-italic",
  underline: "editor-underline",
};

const editorConfig = {
  namespace: "MyEditor",
  theme,
  onError(error) {
    throw error;
  },
  nodes: [],
};

export default function RichTextEditor() {
  return (
    <LexicalComposer initialConfig={editorConfig}>
      <div className="editor-container">
        <ToolbarPlugin />
        <RichTextPlugin
          contentEditable={<ContentEditable className="editor-input" />}
          placeholder={<div className="editor-placeholder">Enter text...</div>}
        />
        <HistoryPlugin />
      </div>
    </LexicalComposer>
  );
}
