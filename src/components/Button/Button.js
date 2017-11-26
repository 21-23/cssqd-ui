import { h } from 'preact';
import Icon from 'react-fontawesome';

const Button = ({ iconLeft, iconRight, text, disabled, onClick }) => (
    <button onClick={onClick} disabled={disabled}>
        { iconLeft ? <Icon name={iconLeft} /> : null }
        <span>{ text }</span>
        { iconRight ? <Icon name={iconRight} /> : null }

        <style jsx>{`
        button {
            color: #badece;
            border: 2px solid #84b4aa;
            border-radius: 1em;
            padding: 0.25em 1em 0.3em;
            background: transparent;
            outline: none;
            font-size: 1em;
            cursor: pointer;
        }

        button:hover {
            background: rgba(186,222,206,0.26);
        }

        span {
            margin-left: 5px;
            margin-right: 5px;
        }

        span:first-child {
            margin-left: 0;
        }

        span:last-child {
            margin-right: 0;
        }
        `}</style>
    </button>
);

export { Button };
