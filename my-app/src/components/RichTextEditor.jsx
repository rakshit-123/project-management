// import React, {
//   useState,
//   useRef,
//   useImperativeHandle,
//   forwardRef,
//   useEffect,
// } from "react";
// import { LexicalComposer } from "@lexical/react/LexicalComposer";
// import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
// import { ContentEditable } from "@lexical/react/LexicalContentEditable";
// import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
// import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
// import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
// import { $getRoot, $getSelection } from "lexical";

// import "./editor.css";

// // Toolbar
// function ToolbarPlugin() {
//   const [editor] = useLexicalComposerContext();

//   const onClick = (format) => {
//     editor.dispatchCommand("format_text", format);
//   };

//   return (
//     <div className="toolbar">
//       <button onClick={() => onClick("bold")}>Bold</button>
//       <button onClick={() => onClick("italic")}>Italic</button>
//     </div>
//   );
// }

// // Theme (optional)
// const theme = {
//   paragraph: "editor-paragraph",
//   bold: "editor-bold",
//   italic: "editor-italic",
// };

// // Editor config
// const editorConfig = {
//   namespace: "MyEditor",
//   theme,
//   onError(error) {
//     throw error;
//   },
//   nodes: [],
// };

// const RichTextEditor = forwardRef(({ description }, ref) => {
//   const contentRef = useRef("");

//   const onChange = (editorState) => {
//     editorState.read(() => {
//       const root = $getRoot();
//       contentRef.current = root.getTextContent(); // or export to HTML
//     });
//   };

//   useImperativeHandle(ref, () => ({
//     getContent: () => contentRef.current,
//   }));

//   return (
//     <LexicalComposer initialConfig={editorConfig}>
//       <div className="editor-container">
//         <ToolbarPlugin />
//         <RichTextPlugin
//           contentEditable={<ContentEditable className="editor-input" />}
//           placeholder={<div className="editor-placeholder">Enter text...</div>}
//         />
//         <OnChangePlugin onChange={onChange} />
//         <HistoryPlugin />
//       </div>
//     </LexicalComposer>
//   );
// });

// export default RichTextEditor;
import "./editor.css";
import React, {
  useState,
  useRef,
  useImperativeHandle,
  forwardRef,
} from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { FORMAT_TEXT_COMMAND, $getRoot } from "lexical";

import "./editor.css";

// Toolbar plugin
function ToolbarPlugin() {
  const [editor] = useLexicalComposerContext();

  const onClick = (format) => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, format);
  };

  return (
    <div className="toolbar">
      <button onClick={() => onClick("bold")}>Bold</button>
      <button onClick={() => onClick("italic")}>Italic</button>
    </div>
  );
}

// Editor theme
const theme = {
  paragraph: "editor-paragraph",
  text: {
    bold: "editor-bold",
    italic: "editor-italic",
  },
};

// Editor config
const editorConfig = {
  namespace: "MyEditor",
  theme,
  onError(error) {
    throw error;
  },
  nodes: [],
};

// Editor component
const RichTextEditor = forwardRef(({ description }, ref) => {
  const contentRef = useRef("");

  const onChange = (editorState) => {
    editorState.read(() => {
      const root = $getRoot();
      contentRef.current = root.getTextContent(); // plain text
    });
  };

  useImperativeHandle(ref, () => ({
    getContent: () => contentRef.current,
  }));

  return (
    <LexicalComposer initialConfig={editorConfig}>
      <div className="editor-container">
        <ToolbarPlugin />
        <RichTextPlugin
          contentEditable={<ContentEditable className="editor-input" />}
          placeholder={<div className="editor-placeholder">Enter text...</div>}
        />
        <OnChangePlugin onChange={onChange} />
        <HistoryPlugin />
      </div>
    </LexicalComposer>
  );
});

export default RichTextEditor;
