import { h } from 'preact';
import Icon from 'react-fontawesome';

const Header = ({ productName, username, style }) => (
    <header style={style}>
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
            }

            .user-icon {
                margin-right: 5px;
            }
        `}</style>
    </header>
);

export { Header };
