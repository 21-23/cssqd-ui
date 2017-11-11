import { h } from 'preact';
import Icon from 'react-fontawesome';

const AuthButton = ({ path, icon }) => (
    <a href={path}>
        <Icon name={icon} />

        <style jsx>{`
            a {
                height: 13vh;
                width: 13vh;
                line-height: 13vh;
                font-size: 9vh;
                text-align: center;
                color: white;
            }
        `}</style>
    </a>
);

export { AuthButton };
