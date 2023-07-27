import React from 'react';
import './App.css';
import qr from './images/image-qr-code.png';

console.log(qr);

const App = () => {
    return (
        <div className='body'>
            <div className='main'>
                <img src={qr} alt='QR Code' className='center' />
                <h3>Improve your front-end skills by building projects</h3>
                <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
            </div>

            <div className='footer'>
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>. 
                Coded by <a href="https://github.com/ngww">Thembi Ngwenya</a>.
            </div>
        </div>
    );
}

export default App;