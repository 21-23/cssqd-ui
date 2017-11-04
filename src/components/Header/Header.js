import { h } from 'preact';
import Icon from 'react-fontawesome';

const Header = ({ productName, username, backgroundImageUrl }) => (
    <header style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
        <span>{ productName }</span>

        <span>
            <Icon name="user" className="user-icon" />
            { username }
        </span>
        <style jsx>{`
            header {
                padding: 10px;
                flex: 1;
                display: flex;
                justify-content: space-between;
                background-size: auto 100%;
                color: white;
                box-sizing: border-box;
                border-bottom: 1px solid #49837e;
            }

            .user-icon {
                margin-right: 5px;
            }
        `}</style>
    </header>
);

export { Header };
