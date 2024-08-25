import React, { useState, useEffect } from 'react';
import "./home.css";

const Typing = () => {
    const [status, setStatus] = useState("");
    const statuses = ["Full-Stack Web Developer", "Front-End Developer", "Back-End Developer", "Software Engineer"];
    const [index, setIndex] = useState(0);
    const [typingIndex, setTypingIndex] = useState(0);
    const [typingDirection, setTypingDirection] = useState(1); // 1 for typing, -1 for erasing

    useEffect(() => {
        const currentStatus = statuses[index];
        const length = currentStatus.length;

        // Determine whether to type or erase
        if (typingDirection === 1) {
            if (typingIndex < length) {
                // Typing
                const timeoutId = setTimeout(() => {
                    setStatus(prevStatus => prevStatus + currentStatus[typingIndex]);
                    setTypingIndex(prevTypingIndex => prevTypingIndex + 1);
                }, 100);
                return () => clearTimeout(timeoutId);
            } else {
                // Finished typing, wait for 2 seconds then start erasing
                const timeoutId = setTimeout(() => {
                    setTypingDirection(-1);
                }, 2000);
                return () => clearTimeout(timeoutId);
            }
        } else {
            if (typingIndex > 0) {
                // Erasing
                const timeoutId = setTimeout(() => {
                    setStatus(prevStatus => prevStatus.slice(0, -1)); // Remove last character
                    setTypingIndex(prevTypingIndex => prevTypingIndex - 1);
                }, 60);
                return () => clearTimeout(timeoutId);
            } else {
                // Finished erasing, move to the next status
                const nextIndex = (index + 1) % statuses.length;
                // Set typingIndex to 0 immediately to start typing next status
                setTypingIndex(0);
                const timeoutId = setTimeout(() => {
                    setStatus("");
                    setIndex(nextIndex);
                    setTypingDirection(1);
                }, 0); // No delay for typing
                return () => clearTimeout(timeoutId);
            }
        }
    }, [index, typingIndex, statuses, typingDirection]);

    return (
        <div className='jobContainer'>
            <h2 className='job'>{status}</h2>
        </div>
    );
}

export default Typing