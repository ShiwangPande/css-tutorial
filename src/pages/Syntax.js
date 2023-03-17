import React from "react";
import "./Home.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Codeeditor from "./Codeeditor";
import Syntaxcode from "./Codeeditor_syntax";
import Commentcode from "./Codeeditor_comment";
import Cssparacode from "./cssparacode";
import Cssheading from "./cssheading";
import Cssfontsize from "./cssfontsize";
import syntax from "./img/syntax.png"
import { Link } from 'react-router-dom'
import { AiFillCaretLeft } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";
import { Mousewheel, Pagination } from "swiper";
function Syntax() {
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
              <h1>Basic CSS Syntax</h1>
              <hr />
              <img src={syntax} className="css_syntax" />
              <ul>
                <li>
                  The basic structure of a CSS rule consists of a selector,
                  which specifies the HTML element(s) to which the rule should
                  be applied, followed by a set of declarations enclosed in
                  curly braces.{" "}
                </li>
                <li>
                  {" "}
                  Each declaration consists of a property, followed by a colon
                  and a value, and is separated from other declarations by a
                  semicolon. For example:
                </li>
                <Codeeditor />
              </ul>
            </div>
            <div className="next">
              <Link to="/"><AiFillCaretLeft /></Link> <Link to="/addCss"><AiFillCaretRight /></Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="container">
              <h1>Basic CSS Syntax</h1>
              <hr />

              <ul>
                <li>
                  Here, selector can be an HTML element, a class, an ID, or a
                  combination of these. property refers to the style attribute
                  being set, such as color, font-size, or background-color, and
                  value is the value assigned to the property.
                </li>
                <li>
                  Multiple selectors can be grouped together, separated by
                  commas. For example:
                </li>
                <Syntaxcode />
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container">
              <h1>Comment CSS Syntax</h1>
              <hr />

              <ul>
                <li>
                  This rule would apply the color blue and a font size of 24
                  pixels to both h1 and h2 HTML elements.
                </li>
                <li>
                  CSS also allows for the use of comments, which are ignored by
                  the browser and are used to provide information to developers.
                  Comments are enclosed in /* */ characters. For example:
                </li>
                <Commentcode />
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container">
              <h1>How CSS works?</h1>
              <hr />

              <ul>
                <li>
                  CSS works by selecting HTML elements and applying styles to
                  them. It uses selectors to identify which HTML elements the
                  style should be applied to and then applies a set of rules
                  that define the appearance of the element.
                </li>
                <li>There are different ways to apply CSS to a webpage. </li>
                <li>
                  {" "}
                  You can use inline styles, which are styles applied directly
                  to individual HTML elements.
                </li>
                <li>
                  {" "}
                  CSS has a wide range of features, including colors, fonts,
                  layout, animation, and more. With CSS, you can create complex
                  and visually appealing web pages that are easy to maintain and
                  update.
                </li>
                <li>
                  {" "}
                  You can also use internal styles, which are defined within the
                  HTML document using the &#60;style&#62; tag.{" "}
                </li>
                <li>
                  {" "}
                  The most common method is to use an external stylesheet, which
                  is a separate file that contains all the styles for the
                  website and is linked to the HTML document using the
                  &#60;link&#62; tag.
                </li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container">
              <h1>CSS Syntax</h1>
              <hr />

              <ul>
                <li>
                  The syntax of CSS consists of selectors, properties, and
                  values. Selectors specify which elements in a document the
                  styles should apply to, properties define the styles to be
                  applied, and values specify the values of the properties.
                </li>
                <li>
                  Selectors are the most fundamental part of the CSS syntax.
                  They identify the elements in a document that the styles
                  should apply to.{" "}
                </li>
              </ul>

              <ul>
                <li>
                  Once a selector has been defined, properties and values can be
                  applied to it. Properties define the styles to be applied,
                  while values specify the values of those styles. For example,
                  the following CSS rule sets the font size of all paragraphs to
                  16 pixels:
                </li>
              </ul>
              <Cssparacode />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container">
              <h1>Types of CSS Selector</h1>
              <hr />

              <ol>
                <li>
                  Type selectors: These selectors target elements based on their
                  tag name. For example, the selector "p" targets all paragraphs
                  in a document.
                </li>{" "}
                <li>
                  {" "}
                  Class selectors: These selectors target elements based on
                  their class attribute. For example, the selector ".my-class"
                  targets all elements with the class attribute "my-class".
                </li>{" "}
                <li>
                  {" "}
                  ID selectors: These selectors target elements based on their
                  ID attribute. For example, the selector "#my-id" targets the
                  element with the ID attribute "my-id".
                </li>
                <li>
                  {" "}
                  Attribute selectors: These selectors target elements based on
                  the presence or value of an attribute. For example, the
                  selector "[href]" targets all elements with an href attribute,
                  while the selector "[data-target='my-target']" targets all
                  elements with a data-target attribute value of "my-target".
                </li>
              </ol>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container">
              <h1>Css Heading Syntax</h1>
              <hr />

              <ul>
                <li>
                  In this example, "font-size" is the property being defined,
                  while "16px" is the value of that property.
                </li>{" "}
                <li>
                  {" "}
                  Multiple properties and values can be defined in a single CSS
                  rule. For example, the following CSS rule sets the font size
                  and color of all headings:
                </li>
                <Cssheading />
                <li>
                  In this example, "h1, h2, h3" is the selector, while
                  "font-size" and "color" are the properties being defined, and
                  "24px" and "#333" are the values of those properties.
                </li>{" "}
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container">
              <h1>Css Fontsize</h1>
              <hr />

              <ul>
                <li>
                  CSS also supports shorthand properties, which allow multiple
                  properties to be set with a single line of code. For example,
                  the following CSS rule sets the font size, line height, and
                  font family of all paragraphs:
                </li>

                <Cssfontsize />
                <li>
                  In this example, "font" is the shorthand property being used,
                  while "16px/1.5" sets the font size and line height, and
                  "Arial, sans-serif" sets the font family.
                </li>
              </ul>
              <h1>Conclusion</h1>
              <hr />
              <ul>
                <li>
                  In conclusion, the syntax of CSS is composed of selectors,
                  properties, and values. Selectors specify which elements in a
                  document the styles should apply to, while properties and
                  values define the styles to be applied. CSS allows developers
                  to separate the presentation of a website or web application
                  from its content, making it easier to maintain and update.
                </li>
              </ul>
            </div>
            <div className="next">
              <Link to="/"><AiFillCaretLeft /></Link> <Link to="/addCss"><AiFillCaretRight /></Link>
            </div>
          </SwiperSlide>

        </Swiper>
      </>
    </div>
  );
}

export default Syntax;
