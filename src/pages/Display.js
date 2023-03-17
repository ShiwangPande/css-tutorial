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
import cssdisplay from "./img/cssdisplay.png";
// import required modules
import { Mousewheel, Pagination } from "swiper";
function Display() {
    const [code1, setCode1] = React.useState(
        `p {
            margin-top: 100px;
            margin-bottom: 100px;
            margin-right: 150px;
            margin-left: 80px;
          }`
    );

    const [open, setOpen] = useState(false);
    const Popup = styled.div`
    display: ${open ? "block" : "none"};
    opactiy: ${open ? "1" : "0"};
  `;
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
                            <h1>CSS Margins</h1>
                            <hr />
                            <img className="cssdisplay" src={cssdisplay} />
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

                        <div className="container">
                            <h1>CSS Layout - The display Property</h1>
                            <hr />
                            <ul>
                                <li>
                                    The <code>display</code> property is the most important CSS
                                    property for controlling layout.
                                </li>
                                <li>The display Property </li>
                                <li>
                                    The display property specifies if/how an element is displayed.
                                </li>

                                <li>
                                    {" "}
                                    Every HTML element has a default display value depending on
                                    what type of element it is. The default display value for most
                                    elements is block or inline.
                                </li>

                                <div>
                                    <button
                                        className="popup_open"
                                        onClick={() => {
                                            setOpen(true);
                                        }}
                                        style={{ display: !open ? "block" : "none" }}
                                    >
                                        click to show
                                    </button>
                                    <Popup className="popup">
                                        <button
                                            className="popup_close"
                                            onClick={() => {
                                                setOpen(false);
                                            }}
                                        >
                                            Close
                                        </button>
                                        <h1>Block and Inline Elements</h1>
                                        <p>
                                            <li>
                                                {" "}
                                                This panel contains a <code>&#60;div&#62;</code>{" "}
                                                element, which is hidden by default (display: none).
                                            </li>
                                            <li>
                                                {" "}
                                                It is styled with CSS, and we use JavaScript to show it
                                                change it to (display: block).
                                            </li>
                                        </p>
                                    </Popup>
                                </div>
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

                        <div className="container">
                            <h1>Block-level Elements</h1>
                            <hr />
                            <ul>
                                <li>
                                    A block-level element always starts on a new line and takes up
                                    the full width available (stretches out to the left and right
                                    as far as it can).
                                </li>
                                <l>The &#60;div&#62; element is a block-level element.</l>
                                <ol>
                                    <li>Examples of block-level elements: </li>

                                    <li>&#60;div&#62;</li>
                                    <li>&#60;h1&#62; - &#60;h6&#62;</li>
                                    <li>&#60;p&#62;</li>
                                    <li>&#60;form&#62;</li>
                                    <li>&#60;header&#62;</li>
                                    <li>&#60;footer&#62;</li>
                                    <li>&#60;section&#62;</li>
                                </ol>
                            </ul>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>

                        <div className="container">
                            <h1>Inline Elements</h1>
                            <hr />
                            <ul>
                                <li>
                                    An inline element does not start on a new line and only takes
                                    up as much width as necessary.
                                </li>
                                <li>
                                    {" "}
                                    <span>
                                        This is an inline &#60;span&#62; element inside a paragraph.
                                    </span>
                                </li>
                                <ol>
                                    <li> Examples of inline elements:</li>

                                    <li>&#60;span&#62;</li>
                                    <li>&#60;a&#62;</li>
                                    <li>&#60;img&#62;</li>
                                </ol>
                            </ul>
                            <h1>Display: none;</h1>
                            <ul>
                                <hr />
                                <li>
                                    display: none; is commonly used with JavaScript to hide and
                                    show elements without deleting and recreating them.
                                </li>
                                <li>
                                    Take a look at our last example on this page if you want to
                                    know how this can be achieved.
                                </li>
                                <li>
                                    The &#60;script&#62; element uses display: none; as default.
                                </li>
                            </ul>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </>
        </div>
    );
}

export default Display;
