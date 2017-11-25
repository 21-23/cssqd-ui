import { h } from 'preact';

const CorrectSolution = ({ solution }) => (
    <div>
        <label for="solution-visibility-toggle">Solution</label>
        <input type="checkbox" id="solution-visibility-toggle" />
        <span className="solution">{ solution }</span>

        <style jsx>{`
            div {
                user-select: none;
                cursor: pointer;
                font-size: 1.2em;
                padding: 5px;
            }

            label {
                margin-right: 5px;
                color: #badece;
            }

            input {
                display: none;
            }

            input + .solution {
                opacity: 0;
            }

            input:checked + .solution {
                opacity: 1;
            }

            .solution {
                transition: opacity .25s;
                color: #f8d940;
                font-weight: bold;
            }
        `}</style>
    </div>
);

export { CorrectSolution };
