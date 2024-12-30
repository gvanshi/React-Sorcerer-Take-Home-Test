import React, { useState, useEffect } from "react";
import {
  Editor,
  EditorState,
  RichUtils,
  Modifier,
  convertToRaw,
  convertFromRaw,
} from "draft-js";
import "draft-js/dist/Draft.css";

const EditorComponent = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  // Load content from localStorage on component mount
  useEffect(() => {
    try {
      const savedContent = localStorage.getItem("editorContent");
      if (savedContent) {
        const rawContent = JSON.parse(savedContent);
        if (rawContent && rawContent.blocks && rawContent.entityMap !== undefined) {
          const contentState = convertFromRaw(rawContent);
          setEditorState(EditorState.createWithContent(contentState));
        } else {
          console.warn("Invalid RawDraftContentState structure in localStorage.");
        }
      }
    } catch (error) {
      console.error("Error loading saved content: ", error);
    }
  }, []);

  // Custom style map for RED and UNDERLINE
  const styleMap = {
    RED: {
      color: "red",
    },
    UNDERLINE: {
      textDecoration: "underline",
    },
  };

  // Handle key commands (e.g., Bold, Italics)
  const handleKeyCommand = (command) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return "handled";
    }
    return "not-handled";
  };

  // Handle specific character inputs (*, **, #)
  const handleBeforeInput = (chars) => {
    const selection = editorState.getSelection();
    const blockKey = selection.getStartKey();
    const contentState = editorState.getCurrentContent();
    const blockText = contentState.getBlockForKey(blockKey).getText();

    if (chars === " " && selection.getStartOffset() === blockText.length) {
      let newContentState;

      if (blockText === "#") {
        // Heading
        newContentState = Modifier.removeRange(
          contentState,
          selection.merge({ anchorOffset: 0 }),
          "backward"
        );
        setEditorState(
          RichUtils.toggleBlockType(
            EditorState.push(editorState, newContentState),
            "header-one"
          )
        );
      } else if (blockText === "*") {
        // Bold
        newContentState = Modifier.removeRange(
          contentState,
          selection.merge({ anchorOffset: 0 }),
          "backward"
        );
        setEditorState(
          RichUtils.toggleInlineStyle(
            EditorState.push(editorState, newContentState),
            "BOLD"
          )
        );
      } else if (blockText === "**") {
        // Red Text
        newContentState = Modifier.removeRange(
          contentState,
          selection.merge({ anchorOffset: 0 }),
          "backward"
        );
        setEditorState(
          RichUtils.toggleInlineStyle(
            EditorState.push(editorState, newContentState),
            "RED"
          )
        );
      } else if (blockText === "***") {
        // Underline
        newContentState = Modifier.removeRange(
          contentState,
          selection.merge({ anchorOffset: 0 }),
          "backward"
        );
        setEditorState(
          RichUtils.toggleInlineStyle(
            EditorState.push(editorState, newContentState),
            "UNDERLINE"
          )
        );
      }
      return "handled";
    }
    return "not-handled";
  };

  // Save content to localStorage
  const saveContent = () => {
    const contentState = editorState.getCurrentContent();
    const rawContent = convertToRaw(contentState);
    try {
      localStorage.setItem("editorContent", JSON.stringify(rawContent));
      alert("Content saved successfully!");
    } catch (error) {
      console.error("Error saving content to localStorage: ", error);
    }
  };

  return (
    <div>
      <h2>Draft.js Editor</h2>
      <div
        className="editor-container"
        style={{ border: "1px solid #ccc", padding: "10px", minHeight: "200px" }}
      >
        <Editor
          editorState={editorState}
          onChange={setEditorState}
          handleKeyCommand={handleKeyCommand}
          handleBeforeInput={handleBeforeInput}
          customStyleMap={styleMap}
          placeholder="Start typing here..."
        />
      </div>
      <button className="save-button" onClick={saveContent}>
        Save
      </button>
    </div>
  );
};

export default EditorComponent;
