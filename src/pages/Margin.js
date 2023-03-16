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
function Margin() {
    const [code1, setCode1] = React.useState(
        `p {
            margin-top: 100px;
            margin-bottom: 100px;
            margin-right: 150px;
            margin-left: 80px;
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
                        <div className="css_margin"></div>
                        <div className="container">
                            <h1>CSS Margins</h1>
                            <hr />
                            <ul>
                                <li style={{ border: "solid lightgreen", margin: "70px" }}>
                                    This element has a margin of 70px.
                                </li>
                                <li>
                                    {" "}
                                    The CSS margin properties are used to create space around
                                    elements, outside of any defined borders.
                                </li>
                                <li>
                                    With CSS, you have full control over the margins. There are
                                    properties for setting the margin for each side of an element
                                    (top, right, bottom, and left).
                                </li>
                            </ul>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        {" "}
                        <div className="css_margin"></div>
                        <div className="container_largeest">
                            <h1>Margin - Individual Sides</h1>
                            <hr />
                            <ul>
                                <li>
                                    CSS has properties for specifying the margin for each side of
                                    an element:
                                </li>
                                <ol>
                                    <li>margin-top</li>
                                    <li> margin-right</li>
                                    <li>margin-bottom</li>
                                    <li> margin-left</li>
                                </ol>
                                <li>
                                    All the margin properties can have the following values:
                                </li>
                                <ol>
                                    <li>auto - The browser calculates the margin</li>
                                    <li>
                                        length - Defines a margin in px, pt, cm, etc. Negative
                                        values are also allowed
                                    </li>
                                    <li>
                                        % - Defines a margin in % of the width of the containing
                                        element
                                    </li>
                                    <li>
                                        inherit - Inherits the margin value from the parent element
                                    </li>
                                </ol>
                            </ul>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="css_margin"></div>
                        <div className="container">
                            <h1>History of CSS</h1>
                            <hr />
                            <ul>
                                <li>
                                    Example Set different margins for all four sides of a
                                    &#60;p&#62; element:
                                </li>
                            </ul>
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
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="css_margin"></div>
                        <div className="container_largeest">
                            <h1>Margin - Shorthand Property </h1>
                            <hr />
                            <ul>
                                <li>
                                    To shorten the code, it is possible to specify all the margin
                                    properties in one property.
                                </li>
                                <li>
                                    The margin property is a shorthand property for the following
                                    individual margin properties:
                                </li>
                                <ul>
                                    <li>margin-top </li>
                                    <li> margin-right </li>
                                    <li> margin-bottom</li>
                                    <li> margin-left</li>
                                </ul>

                                <li> So, here is how it works:</li>
                                <li>If the margin property has four values:</li>
                                <li>
                                    margin: 25px 50px 75px 100px;
                                    <ul>
                                        <li>top margin is 25px</li>
                                        <li>right margin is 50px</li>
                                        <li>bottom margin is 75px</li>
                                        <li>left margin is 100px</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="css_margin"></div>
                        <div className="container_largeest">
                            <h1>Margin - Shorthand Property </h1>
                            <hr />
                            <ul>
                                <li>If the margin property has three values:</li>
                                <li>
                                    margin: 25px 50px 75px;
                                    <ul>
                                        <li>top margin is 25px</li>
                                        <li>right and left margins are 50px</li>
                                        <li>bottom margin is 75px</li>
                                    </ul>
                                </li>
                                <li>If the margin property has two values:</li>
                                <li>
                                    margin: 25px 50px;
                                    <ul>
                                        <li>top and bottom margins are 25px</li>
                                        <li>right and left margins are 50px</li>
                                    </ul>
                                </li>
                                <li>If the margin property has one value:</li>
                                <li>
                                    margin: 25px;
                                    <ul>
                                        <li>all four margins are 25px</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </>
        </div>
    );
}

export default Margin;
