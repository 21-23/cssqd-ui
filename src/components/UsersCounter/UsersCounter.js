import { h } from 'preact';
import Icon from 'react-fontawesome';

const UsersCounter = ({ count, label }) => (
    <div className="users-counter">
        <div className="count">
            { count }
        </div>

        <div className="label">
            <Icon name="users" />
            <span>{ label }</span>
        </div>
        <style jsx>{`
            .users-counter {
                display: flex;
                font-size: 2em;
                align-items: center;
            }

            .count {
                font-size: 1.5em;
                margin-right: 5px;
            }

            .label {
                display: flex;
                flex-direction: column;
                font-size: 0.6em;
                align-items: flex-start;
            }

        `}</style>
    </div>
);

export { UsersCounter };
