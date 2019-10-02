import { h } from 'preact';

const JoinReason = ({ reason }) => (
    <div>
        {reason}
        <style jsx>
            {`
                div {
                    color: #badece;
                    font-size: 3em;
                    text-align: center;
                    margin: 2em;
                }
            `}
        </style>
    </div>
);

export { JoinReason };
