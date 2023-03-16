import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css"; //Example style, you can use another
import "./styles.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Home.css";

// import required modules
import { Mousewheel, Pagination } from "swiper";
function Border() {
    const [code1, setCode1] = React.useState(
        `p.dotted {border-style: dotted;}
        p.dashed {border-style: dashed;}
        p.solid {border-style: solid;}
        p.double {border-style: double;}
        p.groove {border-style: groove;}
        p.ridge {border-style: ridge;}
        p.inset {border-style: inset;}
        p.outset {border-style: outset;}
        p.none {border-style: none;}
        p.hidden {border-style: hidden;}
        p.mix {border-style: dotted dashed solid double;} `
    );
    const [code2, setCode2] = React.useState(
        `p.one {
            border-style: solid;
            border-width: 5px;
          }
          
          p.two {
            border-style: solid;
            border-width: medium;
          }
          
          p.three {
            border-style: dotted;
            border-width: 2px;
          }
          
          p.four {
            border-style: dotted;
            border-width: thick;
          } `
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
                        <div className="css_border"></div>
                        <div className="container">
                            <h1>CSS Borders</h1>
                            <hr />
                            <ul>
                                <li>
                                    The CSS border properties allow you to specify the style,
                                    width, and color of an element's border.{" "}
                                </li>
                                <li style={{ border: "solid 2px black" }}>
                                    I have borders on all sides.
                                </li>
                                <li style={{ borderBottom: "solid 2px red" }}>
                                    I have a red bottom border.
                                </li>
                                <li style={{ border: "solid 2px grey", borderRadius: "15px" }}>
                                    I have rounded borders.
                                </li>
                                <li
                                    style={{
                                        borderColor: "#2196F3",
                                        border: "solid 2px #2196F3",
                                        backgroundColor: "#ddffff",
                                        color: "black",
                                    }}
                                >
                                    I have a blue left border.
                                </li>
                            </ul>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        {" "}
                        <div className="css_border"></div>
                        <div className="container_largeest">
                            <h1 style={{ paddingTop: "18px" }}>CSS Border Style</h1>
                            <hr />
                            <ul>
                                <li>
                                    The border-style property specifies what kind of border to
                                    display.
                                </li>
                                <li>The following values are allowed:</li>
                                <ul>
                                    <li> dotted - Defines a dotted border</li>
                                    <li> dashed - Defines a dashed border</li>
                                    <li> solid - Defines a solid border</li>
                                    <li> double - Defines a double border</li>
                                    <li>
                                        {" "}
                                        groove - Defines a 3D grooved border. The effect depends on
                                        the border-color value
                                    </li>
                                    <li>
                                        {" "}
                                        ridge - Defines a 3D ridged border. The effect depends on
                                        the border-color value
                                    </li>
                                </ul>
                            </ul>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        {" "}
                        <div className="css_border"></div>
                        <div className="container_largeest">
                            <h1>CSS Border Style</h1>
                            <hr />
                            <ul>
                                <ul>

                                    <li>
                                        {" "}
                                        inset - Defines a 3D inset border. The effect depends on the
                                        border-color value
                                    </li>
                                    <li>
                                        {" "}
                                        outset - Defines a 3D outset border. The effect depends on
                                        the border-color value
                                    </li>
                                    <li> none - Defines no border</li>
                                    <li> hidden - Defines a hidden border</li>
                                    <li>
                                        {" "}
                                        The border-style property can have from one to four values
                                        (for the top border, right border, bottom border, and the
                                        left border).
                                    </li>
                                </ul>
                            </ul>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="css_border"></div>
                        <div className="container">
                            <h1>History of CSS</h1>
                            <hr />
                            <ul>
                                <li>
                                    Example <br />
                                    Demonstration of the different border styles:
                                </li>
                                <li>
                                    CSS allows developers to separate the presentation of a web
                                    page from its content, making it easier to maintain and modify
                                    the design of a website.
                                </li>
                                <li>
                                    {" "}
                                    CSS was first proposed by Håkon Wium Lie in 1994 while he was
                                    working at CERN, the European Organization for Nuclear
                                    Research.{" "}
                                </li>
                            </ul>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="css_border"></div>
                        <div className="container_large">
                            <h1>History of CSS</h1>
                            <hr />
                            <ul>
                                <li>    <Editor
                                    value={code1}
                                    onValueChange={(code1) => setCode1(code1)}
                                    highlight={(code1) => highlight(code1, languages.js)}
                                    padding={10}
                                    className="codeeditor_addcsscode"
                                    style={{
                                        fontFamily: '"Fira code", "Fira Mono", monospace',
                                        backgroundColor: "black",
                                    }}
                                />  </li>
                            </ul>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="css_border"></div>
                        <div className="container">
                            <h1>CSS Border Width</h1>
                            <hr />
                            <ul>
                                <li>
                                    {" "}
                                    The border-width property specifies the width of the four
                                    borders.
                                </li>
                                <li>
                                    Example <br />
                                    Demonstration of the different border widths:{" "}
                                </li>{" "}

                            </ul>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="css_border"></div>
                        <div className="container_largeest">
                            <h1>CSS Border Width</h1>
                            <hr />
                            <ul>
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
                        <div className="css_border"></div>
                        <div className="container">
                            <h1>History of CSS</h1>
                            <hr />
                            <ul>
                                <li style={{ border: "solid 5px" }}> 5px border-width </li>
                                <li style={{ border: "solid medium" }}> 5px border-width </li>
                                <li style={{ border: "dotted 2px" }}> 5px border-width </li>
                                <li style={{ border: "dotted thick " }}> 5px border-width </li>
                            </ul>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="css_border"></div>
                        <div className="container_largeest">
                            <h1>Specific Side Widths</h1>
                            <hr />
                            <ul>
                                <li>
                                    The border-width property can have from one to four values
                                    (for the top border, right border, bottom border, and the left
                                    border):
                                </li>
                                <li style={{ borderStyle: "solid", borderWidth: "5px 20px" }}>
                                    5px top and bottom, 20px on the sides{" "}
                                </li>
                                <li style={{ borderStyle: "solid", borderWidth: "20px 5px" }}>
                                    5px top and bottom, 20px on the sides{" "}
                                </li>
                                <li
                                    style={{
                                        borderStyle: "solid",
                                        borderWidth: "25px 10px 4px 35px",
                                    }}
                                >
                                    5px top and bottom, 20px on the sides{" "}
                                </li>
                            </ul>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="css_border"></div>
                        <div className="container_largeest">
                            <h1>CSS Border Color</h1>
                            <hr />
                            <ul>
                                <li>
                                    {" "}
                                    The border-color property is used to set the color of the four
                                    borders.
                                </li>
                            </ul>
                            <ol>
                                <li>The color can be set by:</li>{" "}
                                <li>name - specify a color name, like "red"</li>
                                <li> HEX - specify a HEX value, like "#ff0000"</li>
                                <li> RGB - specify a RGB value, like "rgb(255,0,0)" </li>
                                <li>
                                    {" "}
                                    HSL - specify a HSL value, like "hsl(0, 100%, 50%)"{" "}
                                </li>{" "}
                                <li> transparent</li>
                            </ol>
                            <ul>
                                <li>
                                    Note: If border-color is not set, it inherits the color of the
                                    element.
                                </li>
                            </ul>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="css_border"></div>
                        <div className="container_large">
                            <h1>CSS Border Color</h1>
                            <hr />
                            <ul>
                                <li style={{ border: "solid red" }}>
                                    Red border
                                </li>
                                <li style={{ border: "solid green" }}>
                                    Green border
                                </li>
                                <li style={{ border: "dotted blue" }}>
                                    Blue border
                                </li>
                            </ul>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </>
        </div>
    );
}

export default Border;
