import React from "react";
// import "./AddCss.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css'; //Example style, you can use another
import "./Home.css"
// Import Swiper styles
import "swiper/css";
import Footer from './Footer';
import "swiper/css/pagination";
import addcss from "./img/addcss.png"
import Cssfontsize from "./cssfontsize";
import { Mousewheel, Pagination } from "swiper";
import { Link } from 'react-router-dom'
import { AiFillCaretLeft } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";

function AddCss() {
  const [code1, setCode1] = React.useState(
    `<!DOCTYPE html>
    <html>
    <head>
    <link rel="stylesheet" href="mystyle.css">
    </head>
    <body>
    
    <h1>This is a heading</h1>
    <p>This is a paragraph.</p>
    
    </body>
    </html>
      `
  );
  const [code2, setCode2] = React.useState(
    ` body {
      background-color: lightblue;
    }
    
    h1 {
      color: navy;
      margin-left: 20px;
    }`
  );
  const [code3, setCode3] = React.useState(
    `<!DOCTYPE html>
    <html>
    <head>
    <style>
    body {
      background-color: linen;
    }
    
    h1 {
      color: maroon;
      margin-left: 40px;
    }
    </style>
    </head>
    <body>
    
    <h1>This is a heading</h1>
    <p>This is a paragraph.</p>
    
    </body>
    </html>
      `
  );
  const [code4, setCode4] = React.useState(
    ` <!DOCTYPE html>
    <html>
    <body>
    
    <h1 style="color:blue;text-align:center;">This is a heading</h1>
    <p style="color:red;">This is a paragraph.</p>
    
    </body>
    </html>`
  );
  const [code5, setCode5] = React.useState(
    `h1 {
      color: navy;
    }`
  );
  const [code6, setCode6] = React.useState(
    `h1 {
      color: orange;   
    }`
  );
  return (
    <>
      <div className="home">
        <div className="swiper">
          <div className="swiperslide">

            <div className="container">
              <h1>How to Add CSS?</h1>
              <hr />
              <img src={addcss} alt="" className="addcss_img" />
              <ul>
                <li>
                  When a browser reads a style sheet, it will format the HTML
                  document according to the information in the style sheet.
                </li>
                <hr />
                <li>There are three ways of inserting a style sheet:</li>
              </ul>
              <ol>
                <li> External CSS</li>
                <li> Internal CSS</li>
                <li> Inline CSS</li>
              </ol>
              {/* <Codeeditor /> */}
            </div>
            <div className="next">
              <Link to="/Syntax"><AiFillCaretLeft /></Link> <Link to="/color"><AiFillCaretRight /></Link>
            </div>
          </div>
          <div className="swiperslide">
            {" "}

            <div className="container">
              <h1>External CSS</h1>
              <hr />
              <ul>
                <li>
                  With an external style sheet, you can change the look of an
                  entire website by changing just one file!
                </li>
                <li>
                  Each HTML page must include a reference to the external style
                  sheet file inside the &#60;link&#62; element, inside the head
                  section.
                </li>
                <li>
                  Example External styles are defined within the &#60;link&#62;
                  element, inside the &#60;head&#62; section of an HTML page:
                </li>
                <Editor
                  value={code1}
                  onValueChange={code1 => setCode1(code1)}
                  highlight={code1 => highlight(code1, languages.js)}
                  padding={10}
                  className="codeeditor_addcsscode"
                  style={{
                    fontFamily: '"Fira code", "Fira Mono", monospace',
                    backgroundColor: "black",
                  }}
                />
              </ul>
            </div>
          </div>
          <div className="swiperslide">

            <div className="container">
              <h1>External CSS</h1>
              <hr />
              <ul>
                <li>
                  An external style sheet can be written in any text editor, and
                  must be saved with a .css extension.
                </li>
                <li>
                  The external .css file should not contain any HTML tags. Here
                  is how the "mystyle.css" file looks:
                </li>
                <Editor
                  value={code2}
                  onValueChange={code2 => setCode2(code2)}
                  highlight={code2 => highlight(code2, languages.js)}
                  padding={10}
                  className="codeeditor_addcsscode"
                  style={{
                    fontFamily: '"Fira code", "Fira Mono", monospace',
                    backgroundColor: "black",
                  }}
                />
              </ul>
            </div>
          </div>

          <div className="swiperslide">

            <div className="container">
              <h1>Internal CSS</h1>
              <hr />
              <ul>
                <li>
                  An internal style sheet may be used if one single HTML page
                  has a unique style.
                </li>
                <li>
                  The internal style is defined inside the &#60;style&#62;
                  element, inside the head section.{" "}
                </li>
                <li>
                  {" "}
                  Example Internal styles are defined within the &#60;style&#62;
                  element, inside the &#60;head&#62; section of an HTML page:
                </li>

              </ul>
              <Editor
                value={code3}
                onValueChange={code3 => setCode3(code3)}
                highlight={code3 => highlight(code3, languages.js)}
                padding={10}
                className="codeeditor_addcsscodelarge"
                style={{
                  fontFamily: '"Fira code", "Fira Mono", monospace',
                  backgroundColor: "black",
                }}
              />
            </div>
          </div>

          <div className="swiperslide">

            <div className="container">
              <h1> Inline CSS</h1>
              <hr />
              <ul>
                <li>
                  An inline style may be used to apply a unique style for a
                  single element.
                </li>
                <li>
                  {" "}
                  To use inline styles, add the style attribute to the relevant
                  element. The style attribute can contain any CSS property.
                </li>
                <li>
                  {" "}
                  Example <br />
                  Inline styles are defined within the "style" attribute of the
                  relevant element:
                </li>
                <Editor
                  value={code4}
                  onValueChange={code4 => setCode4(code4)}
                  highlight={code4 => highlight(code4, languages.js)}
                  padding={10}
                  className="codeeditor_addcsscode"
                  style={{
                    fontFamily: '"Fira code", "Fira Mono", monospace',
                    backgroundColor: "black",
                  }}
                />
              </ul>
              <h1>Multiple Style Sheets</h1>
              <hr />
              <ul>
                <li>
                  If some properties have been defined for
                  the same selector (element) in different style sheets, the
                  value from the last read style sheet will be used.
                </li>
                <li>
                  Assume that an external style sheet has the following style for the &#60;h1&#62; element:
                </li>
              </ul>
            </div>
          </div>
          <div className="swiperslide">

            <div className="container">

              <Editor
                value={code5}
                onValueChange={code5 => setCode5(code5)}
                highlight={code5 => highlight(code5, languages.js)}
                padding={10}
                className="codeeditor_addcsscode"
                style={{
                  fontFamily: '"Fira code", "Fira Mono", monospace',
                  backgroundColor: "black",
                }}
              />

              <h1>Cascading Order</h1>
              <hr />
              <ul>
                <li>

                  What style will be used when there is more than one style specified for an HTML element?
                </li>
                <li>

                  All the styles in a page will "cascade" into a new "virtual" style sheet by the following rules, where number one has the highest priority:
                </li> </ul>
              <ol>  <li>  Inline style (inside an HTML element) </li>
                <li>  External and internal style sheets (in the head section) </li>
                <li>  Browser default </li>
              </ol>
              <ul>
                <li>
                  So, an inline style has the highest priority, and will override external and internal styles and browser defaults.
                </li></ul>
            </div>
            <div className="next">
              <Link to="/Syntax"><AiFillCaretLeft /></Link> <Link to="/color"><AiFillCaretRight /></Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>

    </>
  );
}

export default AddCss;
