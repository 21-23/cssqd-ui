import { h } from 'preact';
import Icon from 'react-fontawesome';

const Header = ({ productName, username, backgroundImageUrl }) => (
    <header style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
        <span>{ productName }</span>

        { username ?
            <span>
                <Icon name="user" />
                <span className="username">{ username }</span>
            </span>
            : null
        }
        <style jsx>{`
            header {
                padding: 10px;
                flex: 0;
                display: flex;
                align-items: center;
                justify-content: space-between;
                background-size: auto 100%;
                color: white;
                box-sizing: border-box;
                border-bottom: 1px solid #49837e;
                flex-basis: 50px;
            }

            .username {
                margin-left: 10px;
            }
        `}</style>
    </header>
);

export { Header };
