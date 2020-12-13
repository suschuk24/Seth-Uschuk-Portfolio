import React from 'react'


function Header() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>
                    <a href="/">Seth Uschuk's Portfolio</a>
                </h1>
                <ul>
                    <li>
                        <a href="#about-me">About Me</a>
                    </li>
                    <li>
                        <a href="#my-work">My Work</a>
                    </li>
                    <li>
                        <a href="#contact-me">Contact Me</a>
                    </li>
                </ul>
            </header>
        </div>
    )
}

export default Header