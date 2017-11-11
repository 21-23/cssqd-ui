import { h } from 'preact';

const backgroundImage = require('../../assets/images/waitscreen.jpg');
const paperImage = require('../../assets/images/paper.png');

const WaitScreen = () => (
    <div className="waitscreen">
        <div className="text-content">
            <p>Keep calm, cowboy!</p>
            <p>We are waiting for others...</p>
        </div>

        <style jsx>{`
            .waitscreen {
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                background: url(${backgroundImage});
                background-size: cover;
            }

            p {
                text-align: right;
                font-size: 2rem;
                margin: .2em;
                color: black;
                font-family: serif;
            }

            .text-content {
                position: absolute;
                right: 0px;
                bottom: 0px;
                height: 300px;
                width: 500px;
                background: url(${paperImage});
                padding-top: 150px;
                padding-right: 50px;
                box-sizing: border-box;
            }
        `}
        </style>
    </div>
);

export { WaitScreen };
