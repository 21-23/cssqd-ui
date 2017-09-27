import { h } from 'preact';
import classNames from 'classnames';

const FONT_SIZE = 18;

const BannedCharacters = ({ bannedCharacters = [], highlightedCharacters = [] }) => (
    <div class="banned-characters">
        <span class="label">Banned chars </span>
        { bannedCharacters.map(char => BannedCharactrer(char, highlightedCharacters.includes(char))) }

        <style jsx>{`
            .banned-characters {
                display: inline-flex;
                align-items: center;
            }

            .label {
                font-weight: 600;
                font-family: sans-serif;
                font-size: ${FONT_SIZE}px;
                margin-right: 3px;
                color: #b3decc;
                display: inline-block
            }

            .banned-character {
                display: inline-block;
                font-family: monospace;
                font-weight: 600;
                font-size: ${FONT_SIZE}px;
                color: #FFFFFF;
                margin: 3px;
                background-color: #3A706A;
                width: 23px;
                height: 23px;
                border-radius: 4px;
                text-align: center;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .highlighted {
                background-color: #775957;
                border: 2px solid #B25254;
            }
        `}</style>
    </div>
);

const BannedCharactrer = (char, isHighlighted) => {
    const bannedCharacterClasses = classNames('banned-character', {
        'highlighted': isHighlighted,
    });

    return (<div className={bannedCharacterClasses}>
        { char }
    </div>);
};

export { BannedCharacters };
