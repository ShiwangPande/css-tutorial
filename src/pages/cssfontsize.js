import React from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';

function Cssparacode() {
    const [code, setCode] = React.useState(
        `p {
            font: 16px/1.5 Arial, sans-serif;
          }          
          `
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

export default Cssparacode;