import { h } from 'preact';
import classNames from 'classnames';
import { DisplayConstants, Colors } from './banned-characters-style-constants';

const BannedCharacters = ({ bannedCharacters = [], highlightedCharacters = [] }) => {
    let content = null;

    if (bannedCharacters && bannedCharacters.length) {
        content = bannedCharacters.map(char => BannedCharacter(char, highlightedCharacters.includes(char)));
    }

    if (bannedCharacters && !bannedCharacters.length) {
        content = (
            <span>
                no restrictions for this round
                <style jsx>{`
                    span {
                        color: rgb(202, 194, 119);
                    }
                `}</style>
            </span>
        );
    }

    return (
        <div class="banned-characters">
            <span class="label">Banned chars: </span>
            { content }

            <style jsx>{`
                .banned-characters {
                    display: inline-flex;
                    align-items: center;
                    min-height: 35px;
                }

                .label {
                    font-weight: 600;
                    font-family: sans-serif;
                    font-size: ${DisplayConstants.FONT_SIZE}px;
                    color: ${Colors.LABEL};
                    display: inline-block;
                    margin-right: 5px;
                }
            `}</style>
        </div>
    );
};

const BannedCharacter = (char, isHighlighted) => {
    const bannedCharacterClasses = classNames('banned-character', {
        'highlighted': isHighlighted,
    });

    return (
        <div className={bannedCharacterClasses}>
            { char }

            <style jsx>{`
            .banned-character {
                box-sizing: border-box;
                font-family: monospace;
                font-weight: 600;
                font-size: ${DisplayConstants.FONT_SIZE}px;
                color: ${Colors.CHARACTER};
                margin: 0 5px;
                background-color: ${Colors.CHARACTER_BACKGROUND};
                min-width: 25px;
                min-height: 25px;
                border-radius: 4px;
                text-align: center;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                transition: background 0.1s, transform 150ms;
            }

            .highlighted {
                background-color: ${Colors.HIGHLIGHTED_CHARACTER_BACKGROUND};
                border: 2px solid ${Colors.HIGHLIGHTED_CHARACTER_BORDER};
                transform: scale(${DisplayConstants.HIGHLIGHTED_CHAR_SCALE_COEFFICIENT});
            }
            `}</style>
        </div>
    );
};

export { BannedCharacters };
