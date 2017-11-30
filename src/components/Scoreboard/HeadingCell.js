import { h } from 'preact';


export const HeadingCell = ({ title }) => (
    <td>
        { title }

        <style jsx>{`
            td {
                padding: 10px;
                border-bottom: 3px solid #3C8A82;
            }
        `}</style>
    </td>
);
