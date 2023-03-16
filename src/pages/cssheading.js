import React from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css'; //Example style, you can use another
import "./styles.css"

function Cssheading() {
    const [code, setCode] = React.useState(
        `h1, h2, h3 {
            font-size: 24px;
            color: #333;
          }
          
          `
    );
    return (
        <Editor
            value={code}
            onValueChange={code => setCode(code)}
            highlight={code => highlight(code, languages.js)}
            padding={5}
            className="codeeditor"
            style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                backgroundColor: "black",
            }}
        />
    );
}

export default Cssheading;