import React, { useState } from 'react';
import './Contactus.css';
import { PiSpiralThin } from "react-icons/pi";

const Contactus = () => {
    const alertRedInput = "#8C1010";
    const defaultInput = "rgba(10, 180, 180, 1)";

    const [username, setUsername] = useState('');
    const [usernameError, setUsernameError] = useState('');

    const userNameValidation = (usernameInput) => {
        const issueArr = [];
        if (/[-!@#$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/.test(usernameInput)) {
            issueArr.push("No special characters!");
        }
        if (issueArr.length > 0) {
            setUsernameError(issueArr.join("\n"));
        } else {
            setUsernameError('');
        }
    };


    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
        userNameValidation(e.target.value);
    };


    return (
        <div className='ContactPage'>
            <div className="signupSection">
                <div className="info">
                    <h2>Mission to Deep Space</h2>
                    <PiSpiralThin className="icon ion-ios-ionic-outline" aria-hidden="true" />
                    <p>The Future Is Here</p>
                </div>
                <form action="https://api.web3forms.com/submit" method="POST" className="signupForm py-5" name="signupform">
                    <h1 className='my-2'>Get in Touch</h1>
                    <ul className="noBullet">
                        <li>
                            <input type="hidden" name="access_key" value="419c67fd-6eb4-42be-af86-7472d3df7413" />
                            <label htmlFor="username"></label>
                            <input
                                type="text"
                                className="inputFields"
                                id="username"
                                name="name"
                                placeholder="Your Name"
                                // value={username}
                                onChange={handleUsernameChange}
                                required
                            />

                        </li>
                        <li>
                            <label htmlFor="email"></label>
                            <input
                                type="email"
                                className="inputFields"
                                id="email"
                                name="email"
                                placeholder="Email Address"
                                required
                            />
                        </li>
                        <li>
                            <label htmlFor="subject"></label>
                            <input
                                type="text"
                                className="inputFields"
                                id="subject"
                                name="subject"
                                placeholder="Subject"
                                required
                            />
                        </li>
                        <li>
                            <label htmlFor="message"></label>
                            <textarea
                                className="inputFields"
                                id="message"
                                name="message"
                                placeholder="Your Message"
                                required
                            />
                        </li>

                        <li id="center-btn">
                            <input type="submit" id="join-btn" name="Send" alt="Send" value="Send" />
                        </li>
                        <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
                    </ul>
                </form>
            </div>
        </div>
    );
};

export default Contactus;
