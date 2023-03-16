import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css'; //Example style, you can use another
import "./styles.css"
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Home.css";

// import required modules
import { Mousewheel, Pagination } from "swiper";
function Color() {

    const [code1, setCode1] = React.useState(
        `<h1 style="background-color:DodgerBlue;">Hello World</h1>
        <p style="background-color:Tomato;">Lorem ipsum...</p>
          `
    );
    const [code2, setCode2] = React.useState(
        `<h1 style="color:Tomato;">Hello World</h1>
        <p style="color:DodgerBlue;">Lorem ipsum...</p>
        <p style="color:MediumSeaGreen;">Ut wisi enim...</p>
          `
    );
    const [code3, setCode3] = React.useState(
        `<h1 style="border:2px solid Tomato;">Hello World</h1>
        <h1 style="border:2px solid DodgerBlue;">Hello World</h1>
        <h1 style="border:2px solid Violet;">Hello World</h1>
          `
    );
    const [code4, setCode4] = React.useState(
        `body {
            background-color: lightblue;
          }`
    );
    const [code5, setCode5] = React.useState(
        `div {
            background-color: green;
            opacity: 0.3;
          }`
    );
    const [code6, setCode6] = React.useState(
        `body {
            background-image: url("paper.gif");
          }`
    );
    const [code7, setCode7] = React.useState(
        `body {
            background-image: url("gradient_bg.png");
          }`
    );
    const [code8, setCode8] = React.useState(
        `body {
            background-image: url("gradient_bg.png");
          }`
    );
    const [code9, setCode9] = React.useState(
        `body {
            background-image: url("img_tree.png");
            background-repeat: no-repeat;
          }`
    );
    const [code10, setCode10] = React.useState(
        `body {
            background-image: url("img_tree.png");
            background-repeat: no-repeat;
            background-position: right top;
          }`
    );

    return (
        <div className='home'>
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
                        <div className="css_color"></div>
                        <div className="container">
                            <h1>CSS Colors</h1>
                            <hr />
                            <ul>
                                <li>Colors are specified using predefined: </li>
                            </ul>
                            <ol>
                                <li>color names - like "red"</li>
                                <li>hexadecimal values - like "#ff0000"</li>
                                <li>RGB values - like "rgb(255,0,0)"</li>
                                <li>HSL values - like "hsl(0, 100%, 50%)"</li>
                                <li>RGBA values - like "rgba(255,0,0,0.5)"</li>
                                <li>HSLA values - like "hsla(0, 100%, 50%, 0.5)"</li>
                            </ol>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide> <div className="css_color"></div>
                        <div className="container">
                            <h1>CSS Color Names</h1>
                            <hr />
                            <ul>

                                <li>In CSS, a color can be specified by using a predefined color name:</li>
                                <div className="color_container">
                                    <div className="colors" style={{ background: "Tomato" }}>Tomato</div>
                                    <div className="colors" style={{ background: "Orange" }}>Orange</div>
                                    <div className="colors" style={{ background: "DodgerBlue" }}>DodgerBlue</div>
                                    <div className="colors" style={{ background: "MediumSeaGreen" }}>MediumSeaGreen</div>
                                    <div className="colors" style={{ background: "Gray" }}>Gray</div>
                                    <div className="colors" style={{ background: "SlateBlue" }}>SlateBlue</div>
                                    <div className="colors" style={{ background: "Violet" }}>Violet</div>
                                    <div className="colors" style={{ background: "LightGray" }}>LightGray</div>
                                </div>
                            </ul>
                        </div></SwiperSlide>
                    <SwiperSlide>
                        <div className="css_color"></div>
                        <div className="container">
                            <h1>CSS Background Color</h1>
                            <hr />
                            <ul>
                                <li>You can set the background color for HTML elements:</li>
                                <li style={{ backgroundColor: "Tomato", textAlign: "center" }}>Hello World</li>
                                <li style={{ backgroundColor: "dodgerblue", textAlign: "center" }}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab soluta sequi harum illo voluptates error illum similique in, autem laborum perferendis earum hic modi quisquam eius, fugiat voluptatem nostrum nihil? </li>
                            </ul>
                            <Editor
                                value={code1}
                                onValueChange={code1 => setCode1(code1)}
                                highlight={code1 => highlight(code1, languages.js)}
                                padding={10}
                                className="codeeditor_addcsscode"
                                style={{
                                    fontFamily: '"Fira code", "Fira Mono", monospace',
                                    backgroundColor: "black",
                                }} />

                        </div>


                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="css_color"></div>
                        <div className="container">
                            <h1> CSS Text Color</h1>
                            <hr />
                            <ul>
                                <li>

                                    You can set the color of text:

                                </li>
                                <li style={{ color: "orange" }}>Hello World</li>


                                <li style={{ color: "white" }}>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.

                                </li>
                                <li style={{ color: "mediumseagreen" }}>

                                    Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                                </li>
                            </ul>

                            <Editor
                                value={code2}
                                onValueChange={code2 => setCode2(code2)}
                                highlight={code2 => highlight(code2, languages.js)}
                                padding={10}
                                className="codeeditor_addcsscode"
                                style={{
                                    fontFamily: '"Fira code", "Fira Mono", monospace',
                                    backgroundColor: "black",
                                }} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="css_color"></div>
                        <div className="container">
                            <h1>CSS Border Color</h1>
                            <hr />
                            <ul>
                                <li>You can set the color of borders:</li>
                                <li style={{ border: "2px solid Tomato" }}>Hello World</li>
                                <li style={{ border: "2px solid DodgerBlue" }}>Hello World</li>
                                <li style={{ border: "2px solid Violet" }}>Hello World</li>

                            </ul>
                            <Editor
                                value={code3}
                                onValueChange={code3 => setCode3(code3)}
                                highlight={code3 => highlight(code3, languages.js)}
                                padding={10}
                                className="codeeditor_addcsscode"
                                style={{
                                    fontFamily: '"Fira code", "Fira Mono", monospace',
                                    backgroundColor: "black",
                                }} />
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="css_color"></div>
                        <div className="container_large">
                            <h1>CSS Color Values</h1>
                            <hr />
                            <ul>
                                <li> In CSS, colors can also be specified using RGB values, HEX values, HSL values, RGBA values, and HSLA values:</li>
                                <li>Same as color name "Tomato": </li>
                                <li style={{ backgroundColor: "rgb(255, 99, 71)" }}> rgb(255, 99, 71)</li>
                                <li style={{ backgroundColor: "#ff6347" }}>#ff6347</li>
                                <li style={{ backgroundColor: "hsl(9, 100%, 64%)" }}> hsl(9, 100%, 64%)</li>
                                <li style={{ backgroundColor: "rgba(255, 99, 71, 0.5)" }}> rgba(255, 99, 71, 0.5)</li>
                                <li style={{ backgroundColor: "hsla(9, 100%, 64%, 0.5)" }}> hsla(9, 100%, 64%, 0.5)</li>
                            </ul>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="css_color"></div>
                        <div className="container">
                            <h1 style={{ margin: "1rem" }}>CSS Backgrounds</h1>
                            <hr />
                            <p style={{ marginBottom: "20px", marginTop: "20px" }}>
                                The CSS background properties are used to add background effects for elements.
                            </p>
                            <div className="css_backgrounds">
                                In these chapters, you will learn about the following CSS background properties:
                                <ul>
                                    <li>background-color</li>
                                    <li>background-image
                                    </li>
                                    <li>background-repeat
                                    </li>
                                    <li>background-attachment
                                    </li>
                                    <li>background-position
                                    </li>
                                    <li>background (shorthand property)
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="css_color"></div>
                        <div className="container_large">
                            <h1>CSS background-color</h1>
                            <hr />
                            <ul>
                                <li> The background-color property specifies the background color of an element.</li>
                                <li>Example <br />
                                    The background color of a page is set like this:</li>
                            </ul>
                            <Editor
                                value={code4}
                                onValueChange={code4 => setCode4(code4)}
                                highlight={code4 => highlight(code4, languages.js)}
                                padding={10}
                                className="codeeditor_addcsscode"
                                style={{
                                    fontFamily: '"Fira code", "Fira Mono", monospace',
                                    backgroundColor: "black",
                                }} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="css_color"></div>
                        <div className="container_large">
                            <h1>Opacity / Transparency</h1>
                            <hr />
                            <ul>
                                <li> The opacity property specifies the opacity/transparency of an element. It can take a value from 0.0 - 1.0. The lower value, the more transparent:</li>
                            </ul>
                            <div>
                                <div className="opacity">
                                    <div className="opacity1" style={{ opacity: "1" }}>  opacity 1</div>
                                    <div className="opacity1" style={{ opacity: "0.6" }}>opacity 2</div>
                                    <div className="opacity1" style={{ opacity: "0.3" }}>opacity 3</div>
                                    <div className="opacity1" style={{ opacity: "0.1" }}>opacity 4</div>
                                </div>
                            </div>
                            <Editor
                                value={code5}
                                onValueChange={code5 => setCode5(code5)}
                                highlight={code5 => highlight(code5, languages.js)}
                                padding={10}
                                className="codeeditor_addcsscode"
                                style={{
                                    fontFamily: '"Fira code", "Fira Mono", monospace',
                                    backgroundColor: "black",
                                }} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="css_color"></div>
                        <div className="container_large">
                            <h1>CSS Background Image</h1>
                            <hr />
                            <ul>
                                <li> The background-image property specifies an image to use as the background of an element.

                                    By default, the image is repeated so it covers the entire element.</li>
                                <li>
                                    Example <br />
                                    Set the background image for a page:
                                </li>
                            </ul>
                            <Editor
                                value={code6}
                                onValueChange={code6 => setCode6(code6)}
                                highlight={code6 => highlight(code6, languages.js)}
                                padding={10}
                                className="codeeditor_addcsscode"
                                style={{
                                    fontFamily: '"Fira code", "Fira Mono", monospace',
                                    backgroundColor: "black",
                                }} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="css_color"></div>
                        <div className="container_large">
                            <h1>CSS Background Image Repeat</h1>
                            <hr />
                            <ul>
                                <li> By default, the background-image property repeats an image both horizontally and vertically.</li>
                                <li>


                                    Some images should be repeated only horizontally or vertically, or they will look strange, like this:
                                </li>
                            </ul>
                            <Editor
                                value={code7}
                                onValueChange={code7 => setCode7(code7)}
                                highlight={code7 => highlight(code7, languages.js)}
                                padding={10}
                                className="codeeditor_addcsscode"
                                style={{
                                    fontFamily: '"Fira code", "Fira Mono", monospace',
                                    backgroundColor: "black",
                                }} />
                            <ul>
                                <li>
                                    If the image above is repeated only horizontally (background-repeat: repeat-x;), the background will look better:
                                </li>
                            </ul>
                            <Editor
                                value={code8}
                                onValueChange={code8 => setCode8(code8)}
                                highlight={code8 => highlight(code8, languages.js)}
                                padding={10}
                                className="codeeditor_addcsscode"
                                style={{
                                    fontFamily: '"Fira code", "Fira Mono", monospace',
                                    backgroundColor: "black",
                                }} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="css_color"></div>
                        <div className="container_large">
                            <h1>CSS background-repeat: no-repeat</h1>
                            <hr />
                            <ul>
                                <li> Showing the background image only once is also specified by the background-repeat property:</li>
                                <li>Example <br />
                                    Show the background image only once:
                                </li>
                            </ul>
                            <Editor
                                value={code9}
                                onValueChange={code9 => setCode9(code9)}
                                highlight={code9 => highlight(code9, languages.js)}
                                padding={10}
                                className="codeeditor_addcsscode"
                                style={{
                                    fontFamily: '"Fira code", "Fira Mono", monospace',
                                    backgroundColor: "black",
                                }} />
                            <ul>
                                <li>
                                    If the image above is repeated only horizontally (background-repeat: repeat-x;), the background will look better:
                                </li>
                            </ul>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="css_color"></div>
                        <div className="container_large">
                            <h1>CSS background-position</h1>
                            <hr />
                            <ul>
                                <li> The background-position property is used to specify the position of the background image.</li>
                                <li>Example <br />
                                    Position the background image in the top-right corner:
                                </li>
                            </ul>
                            <Editor
                                value={code10}
                                onValueChange={code10 => setCode10(code10)}
                                highlight={code10 => highlight(code10, languages.js)}
                                padding={10}
                                className="codeeditor_addcsscode"
                                style={{
                                    fontFamily: '"Fira code", "Fira Mono", monospace',
                                    backgroundColor: "black",
                                }} />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </>
        </div >
    );
}

export default Color;


