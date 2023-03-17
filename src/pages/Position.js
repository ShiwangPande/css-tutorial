import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import styled from "styled-components";
import "./Home.css";
import cssposition from "./img/cssposition.png";

// import required modules
import { Mousewheel, Pagination } from "swiper";
function Position() {
  const [code1, setCode1] = React.useState(
    `div.relative {
      position: relative;
      left: 30px;
      border: 3px solid #73AD21;
    }`
  );
  const [code2, setCode2] = React.useState(
    `div.fixed {
      position: fixed;
      bottom: 0;
      right: 0;
      width: 300px;
      border: 3px solid #73AD21;
    }`
  );
  const [code3, setCode3] = React.useState(
    `div.relative {
      position: relative;
      width: 325px;
      height: 150px;
      border: 3px solid #73AD21;
      font-size: 20px;
    }
    div.absolute {
      position: absolute;
      top: 80px;
      right: 0;
      width: 250px;
      height: 50px;
      fontSize: 20px;
      border: 3px solid #73AD21;
    }`
  );
  const [code4, setCode4] = React.useState(
    `div.sticky {
      position: -webkit-sticky; /* Safari */
      position: sticky;
      top: 0;
      background-color: green;
      border: 2px solid #4CAF50;
    }`
  );

  return (
    <div className="home">
      <>
        <Swiper
          direction={"vertical"}
          slidesPerView={"auto"}
          // spaceBetween={3}
          mousewheel={true}
          pagination={{
            clickable: true,
          }}
          modules={[Mousewheel, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="container">
              <h1>CSS Layout - The position Property </h1>
              <hr />
              <img className="cssposition" src={cssposition} />
              <ul>
                <li>
                  The position property specifies the type of positioning method
                  used for an element (static, relative, fixed, absolute or
                  sticky).
                </li>
                <li>The position Property</li>
                <li>
                  The position property specifies the type of positioning method
                  used for an element. There are five different position values:{" "}
                </li>

                <ul>
                  <li> static</li>
                  <li>relative</li>
                  <li>fixed</li>
                  <li>absolute</li>
                  <li>sticky</li>
                </ul>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide>

            <div className="container">
              <h1>position: static; </h1>
              <hr />
              <ul>

                <li>
                  Elements are then positioned using the top, bottom, left, and
                  right properties. However, these properties will not work
                  unless the position property is set first. They also work
                  differently depending on the position value.
                </li>
                <li>HTML elements are positioned static by default.</li>
                <li>
                  Static positioned elements are not affected by the top,
                  bottom, left, and right properties.
                </li>
                <li>
                  An element with position: static; is not positioned in any
                  special way; it is always positioned according to the normal
                  flow of the page:{" "}
                </li>
                <li style={{ position: "static", border: "3px solid #fff" }}>
                  This &#60;li&#62; element has position: static;
                </li>
                <li>Here is the CSS that is used:</li>
                <Editor
                  value={code1}
                  onValueChange={(code1) => setCode1(code1)}
                  highlight={(code1) => highlight(code1, languages.js)}
                  padding={10}
                  className="codeeditor_addcsscode"
                  style={{
                    fontFamily: '"Fira code", "Fira Mono", monospace',
                    backgroundColor: "black",
                  }}
                />
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide>

            <div className="container">
              <h1>position: fixed;</h1>
              <hr />
              <div
                style={{
                  position: "fixed",
                  top: 0,
                  right: 0,
                  width: " 300px",
                  border: "3px solid #73AD21;",
                  background: "blue"
                }}
              >
                This &#60;div&#62; element has position: fixed;
              </div>
              <ul>
                <li>
                  An element with position: fixed; is positioned relative to the
                  viewport, which means it always stays in the same place even
                  if the page is scrolled. The top, right, bottom, and left
                  properties are used to position the element.
                </li>
                <li>
                  A fixed element does not leave a gap in the page where it
                  would normally have been located.
                </li>
                <li>
                  Notice the fixed element in the lower-right corner of the
                  page. Here is the CSS that is used:{" "}
                </li>
                <li>Here is the CSS that is used:</li>
                <Editor
                  value={code2}
                  onValueChange={(code2) => setCode2(code2)}
                  highlight={(code2) => highlight(code2, languages.js)}
                  padding={10}
                  className="codeeditor_addcsscode"
                  style={{
                    fontFamily: '"Fira code", "Fira Mono", monospace',
                    backgroundColor: "black",
                  }}
                />
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide>

            <div className="container">
              <h2>position: absolute;</h2>
              <hr />
              <ul>
                <li>
                  An element with position: absolute; is positioned relative to the nearest positioned ancestor (instead of positioned relative to the viewport, like fixed).
                </li>
                <li>
                  However; if an absolute positioned element has no positioned ancestors, it uses the document body, and moves along with page scrolling.
                </li>
                <li>
                  <strong>Note:</strong> Absolute positioned elements are removed from the normal flow, and can overlap elements.
                </li>
                <li>Here is a simple example:</li>
                <li >
                  <div style={{
                    position: "relative", border: "3px solid #73AD21", width: "325px", fontSize: "20px",
                    height: "150px",
                  }}>
                    This &#60;div&#62; element has position: relative;
                    <div style={{
                      position: "absolute", top: "80px", right: 0, width: "250px", fontSize: "20px",
                      height: "50px", border: "3px solid #73AD21"
                    }}>
                      This &#60;div&#62; element has position: absolute;
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </SwiperSlide>

          <SwiperSlide>

            <div className="container">
              <h2>position: absolute;</h2>
              <hr />
              <ul>
                <li>
                  <Editor
                    value={code3}
                    onValueChange={(code3) => setCode3(code3)}
                    highlight={(code3) => highlight(code3, languages.js)}
                    padding={10}
                    className="codeeditor_addcsscode"
                    style={{
                      fontFamily: '"Fira code", "Fira Mono", monospace',
                      backgroundColor: "black",
                    }}
                  />
                </li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide>

            <div className="container">
              <h2>position: sticky;</h2>
              <hr />
              <ul>
                <li>
                  An element with position: sticky; is positioned based on the user's scroll position </li>
                <li>
                  A sticky element toggles between relative and fixed, depending on the scroll position. It is positioned relative until a given offset position is met in the viewport - then it "sticks" in place (like position:fixed).

                </li>
                <li>
                  <div>

                    <div style={{ border: "3px solid #73AD21", height: "100px", padding: "20px", overflow: "auto" }}>
                      <h5>Try to scroll inside this frame to understand how sticky positioning works.</h5>

                      <div style={{ position: "sticky", top: 0, backgroundColor: "#73AD21", padding: "5px", fontSize: "20px" }}>
                        This &#60;div&#62; element has position: sticky;
                      </div>
                      <p style={{ fontSize: "20px" }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos numquam quis iure dicta beatae explicabo illo quae sapiente? Obcaecati nesciunt hic earum quae, veniam officia dicta error tempore eligendi repudiandae.
                      </p>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, omnis. Doloribus quaerat nisi voluptas ipsam totam dolorem quidem adipisci quia reiciendis? Exercitationem, similique. Quidem, suscipit! Corrupti enim accusamus iste, amet veritatis accusantium nemo numquam. Neque velit hic vel soluta ad?</p>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ipsam consectetur assumenda est illum expedita aliquid, quo minus laudantium magni, impedit eos id tenetur. Tenetur similique perspiciatis repudiandae sit doloribus expedita nemo est nobis officia laudantium eum cupiditate asperiores aliquam numquam repellendus laborum animi, temporibus ipsum impedit blanditiis maxime odio!</p>
                    </div>
                  </div>
                </li>
              </ul>
              <Editor
                value={code4}
                onValueChange={(code4) => setCode4(code4)}
                highlight={(code4) => highlight(code4, languages.js)}
                padding={10}
                className="codeeditor_addcsscode"
                style={{
                  fontFamily: '"Fira code", "Fira Mono", monospace',
                  backgroundColor: "black",
                }}
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
}

export default Position;
