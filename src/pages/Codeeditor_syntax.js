import React from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css'; //Example style, you can use another
import "./Home.css"

function Codeeditor_syntax() {
    const [code, setCode] = React.useState(
        `h1, h2 {
            color: blue;
            font-size: 24px;
          }`
    );
    return (
        <Editor
            value={code}
            onValueChange={code => setCode(code)}
            highlight={code => highlight(code, languages.js)}
            padding={10}
            className="codeeditor"
            style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                backgroundColor: "black",
            }}
        />
    );
}

export default Codeeditor_syntax;