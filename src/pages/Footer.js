import React from 'react'
import './Footer.css';
import { GrInstagram } from 'react-icons/gr';
import { GrLinkedin } from 'react-icons/gr';
import { GrTwitter } from 'react-icons/gr';

function Footer() {
    return (
        <div className='main'>

            <footer>

                {/* <div class="footer-content">

                    <h3>CSS Tutorial Webpage</h3>

                    <p>Thank you for visiting our CSS tutorial website. We hope that you have found the resources and information on this site helpful in your journey to become proficient in CSS. Our goal is to provide clear and concise explanations of CSS concepts and practical examples to help you apply them in your own projects. If you have any feedback or suggestions on how we can improve our site, please don't hesitate to contact us. Happy coding</p>

                    <ul class="socials">

                        <li><a href="https://www.instagram.com/__shiwang/"><GrInstagram /></a></li>
                        <li><a href="https://www.linkedin.com/in/shiwang-pandey/"><GrLinkedin /></a></li>
                        <li><a href="https://twitter.com/Shiwang__Pandey"><GrTwitter /></a></li>

                    </ul>

                </div> */}

                <div class="footer-bottom">

                    <p>Copyright &copy <span id="year"></span> <a href="https://www.linkedin.com/in/shiwang-pandey/">@Shiwang Pandey</a> </p>

                </div>

            </footer>
        </div >
    )
}

export default Footer