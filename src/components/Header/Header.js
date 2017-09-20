import { h } from 'preact';
import Icon from 'react-fontawesome';

const backgroundImage = require('../../assets/images/header-bg.png');

const Header = ({ username }) => (
    <header>
        <span>CSS Quickdraw</span>

        <span>
            <Icon name="user" className="user-icon" />
            {username}
        </span>
        <style jsx>{`
            header {
                padding: 10px;
                flex: 1;
                display: flex;
                justify-content: space-between;
                background-image: url(${backgroundImage});
                background-size: auto 100%;
                color: white;
                box-sizing: border-box;
            }

            .user-icon {
                margin-right: 5px;
            }
        `}</style>
    </header>
);

export { Header };
