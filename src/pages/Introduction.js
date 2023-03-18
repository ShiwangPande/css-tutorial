import React, { useRef, useState } from "react";
// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
import { AiFillCaretLeft } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";
import "./Home.css";
import css from "../img/creative-css3-tutorials.webp";
import history from "./img/csshistory.png";
import { Link } from 'react-router-dom'

import Footer from './Footer';
// import required modules
import { Mousewheel, Pagination } from "swiper";
function Home() {
  return (
    <>
      <div className='home'>
        <div className="swipers"
        // direction={"vertical"}
        // slidesPerView={"auto"}
        // // spaceBetween={3}
        // mousewheel={true}
        // pagination={{
        //   clickable: true,
        // }}
        // modules={[Mousewheel, Pagination]}
        // className="mySwiper"
        >
          <div className="swiperslide">
            <div className="container">
              <h1>What is CSS?</h1>
              <hr />
              <img src={css} className="img_css" />
              <ul>
                <li>CSS stands for Cascading Style Sheets. </li>
                <li> It is a style sheet language used for describing the presentation of a document written in a markup language like HTML.</li>
                <li> CSS allows web developers to separate the document's content from its presentation, making it easier to maintain and update the website's design and layout.</li>
                <li>CSS provides a set of rules that define how HTML elements should be displayed, including their color, size, font, layout, and more.</li>
                <li> By applying these rules to HTML elements, developers can create visually appealing and consistent web pages across different devices and platforms.</li>
                <li>CSS is an essential part of web development and is widely used in modern web design.</li>

              </ul>

            </div>
            <div className="next">
              <Link to="/Position"><AiFillCaretLeft /></Link> <Link to="/Syntax"><AiFillCaretRight /></Link>
            </div>
          </div>

          <div className="swiperslide">
            <div className="container">
              <h1>History of CSS</h1>
              <hr />
              <img src={history} className="history" />
              <ul>
                <li>CSS (Cascading Style Sheets) is a language used to describe the presentation of HTML (Hypertext Markup Language) and XML (Extensible Markup Language) documents.  </li>
                <li>CSS allows developers to separate the presentation of a web page from its content, making it easier to maintain and modify the design of a website.</li>
                <li> CSS was first proposed by Håkon Wium Lie in 1994 while he was working at CERN, the European Organization for Nuclear Research. </li>
                <li> Lie was collaborating with Tim Berners-Lee, the inventor of the World Wide Web, and saw the need for a separate language to describe the visual presentation of web pages. </li>

              </ul>

            </div>


          </div>
          <div className="swiperslide">
            <div className="container">
              <h1>History of CSS</h1>
              <hr />
              <img src={history} className="history" />
              <ul>
                <li>Lie's proposal was initially called "Cascade" and was later renamed "CSS".  </li>
                <li>The first official release of CSS, CSS1, was published by the World Wide Web Consortium (W3C) in 1996.  </li>
                <li>It included a basic set of formatting properties, such as font size, color, and text alignment.   </li>
                <li>CSS2 was released in 1998 and added support for advanced layout techniques, including absolute and relative positioning, floating elements, and multiple background images.  </li>
                <li> CSS2 also introduced the concept of media types, allowing developers to define different styles for different types of devices, such as screen, print, and handheld devices.   </li>
              </ul>
            </div>
          </div>
          <div className="swiperslide">
            <div className="container">
              <h1>How CSS works?</h1>
              <hr />
              <ul>
                <li>CSS works by selecting HTML elements and applying styles to them. It uses selectors to identify which HTML elements the style should be applied to and then applies a set of rules that define the appearance of the element.</li>
                <li>
                  There are different ways to apply CSS to a webpage. </li>
                <li>  You can use inline styles, which are styles applied directly to individual HTML elements.</li>
                <li>  CSS has a wide range of features, including colors, fonts, layout, animation, and more. With CSS, you can create complex and visually appealing web pages that are easy to maintain and update.</li>
                <li> You can also use internal styles, which are defined within the HTML document using the &#60;style&#62; tag. </li>
                <li> The most common method is to use an external stylesheet, which is a separate file that contains all the styles for the website and is linked to the HTML document using the &#60;link&#62; tag.</li>

              </ul>
              <div className="next">
                <Link to="/Position"><AiFillCaretLeft /></Link> <Link to="/Syntax"><AiFillCaretRight /></Link>
              </div>
            </div>

          </div>
        </div>
        <Footer />
      </div >
    </>
  );
}

export default Home;


