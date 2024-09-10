import React, { useState } from "react";
import "../App.css";

function Editor() {
    const [lineNumbers, setLineNumbers] = useState("1");

    // Function to update the line numbers dynamically
    const updateLineNumbers = e => {
        const editor = e.target;
        const editorValue = editor.value;
        const lines = editorValue.split("\n").length;

        let lineNumbersText = "";

        // Generate line numbers only for the number of actual lines
        for (let i = 1; i <= lines; i++) {
            lineNumbersText += i + "<br>";
        }

        setLineNumbers(lineNumbersText);
    };

    // Synchronize scrolling of line numbers with textarea
    const syncScroll = () => {
        const editor = document.getElementById("editor");
        const lineNumbersDiv = document.getElementById("line-numbers");
        lineNumbersDiv.scrollTop = editor.scrollTop;
    };

    return (
        <>
            <div className="Editor">
                <div
                    className="line-numbers"
                    id="line-numbers"
                    dangerouslySetInnerHTML={{ __html: lineNumbers }}
                ></div>
                <textarea
                    id="editor"
                    placeholder="Write your text here"
                    onInput={updateLineNumbers}
                    onScroll={syncScroll}
                ></textarea>
            </div>
        </>
    );
}

export default Editor;
