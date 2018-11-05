import { h } from 'preact';
import Icon from 'react-fontawesome';

const AuthButton = ({ path, icon, target, size = 13, children }) => (
    <a
        href={path}
        target={target}
        style={{
            width: `${size}vh`,
            height: `${size}vh`,
            lineHeight: `${size}vh`,
            fontSize: `${size * 0.7}vh`,
        }}
    >
        <Icon name={icon} />
        {children}

        <style jsx>{`
            a {
                text-align: center;
                color: white;
                text-decoration: none;
            }

            a > span {
                vertical-align: middle;
            }
        `}</style>
    </a>
);

export { AuthButton };
