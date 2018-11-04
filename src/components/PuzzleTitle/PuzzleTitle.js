import { h } from 'preact';

const textShadow = '0 1px 4px rgba(0, 0, 0, 0.15)';
const margin = '0 0.3em 0 0;';

const PuzzleTitle = ({ index, title }) => (
    <p>
        <span className="puzzle-index">#{index + 1}</span>
        <span className="puzzle-title">{title}</span>

        <style jsx>{`
            p {
                font-size: 1.5rem;
            }

            .puzzle-index {
                color: #badece;
                text-shadow: ${textShadow};
                margin: ${margin};
                vertical-align: middle;
            }

            .puzzle-title {
                color: #f8d940;
                font-weight: bold;
                text-shadow: ${textShadow};
                margin: ${margin};
                vertical-align: middle;
            }
        `}</style>
    </p>
);

export { PuzzleTitle };
