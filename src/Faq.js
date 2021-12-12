import React, { useState } from 'react'
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";

const Faq = ({ question, answer }) => {
    const [showInfo, setShowInfo] = useState(false)
    return (
        <article>
            <header>
                <h4 
                onClick={() => setShowInfo(!showInfo)}
                className={showInfo ? 'active' : ''}
                >{question}</h4>
                <button onClick={() => setShowInfo(!showInfo)}>
                    {showInfo ? <IoChevronDownOutline /> : <IoChevronUpOutline/>}
                </button>
            </header>
            { showInfo && <p>{answer}</p> }
        </article>
    )
}

export default Faq