import { h } from 'preact';
import classNames from 'classnames';
import { DisplayConstants, Colors } from './banned-characters-style-constants';

const BannedCharacters = ({ bannedCharacters = [], highlightedCharacters = [] }) => {
    if (bannedCharacters.length) {
        return (<div class="banned-characters">
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
                    font-size: ${DisplayConstants.FONT_SIZE}px;
                    margin-right: 3px;
                    color: ${Colors.LABEL};
                    display: inline-block
                }

                .banned-character {
                    display: inline-block;
                    font-family: monospace;
                    font-weight: 600;
                    font-size: ${DisplayConstants.FONT_SIZE}px;
                    color: ${Colors.CHARACTER};
                    margin: 0 3px;
                    background-color: ${Colors.CHARACTER_BACKGROUND};
                    width: 23px;
                    height: 23px;
                    border-radius: 4px;
                    text-align: center;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .highlighted {
                    background-color: ${Colors.HIGHLIGHTED_CHARACTER_BACKGROUND};
                    border: 2px solid ${Colors.HIGHLIGHTED_CHARACTER_BORDER};
                    transform: scale(${DisplayConstants.HIGHLIGHTED_CHAR_SCALE_COEFFICIENT});
                    margin: 0 7px;
                }
            `}</style>
        </div>)
    }

    return null;
};

const BannedCharactrer = (char, isHighlighted) => {
    const bannedCharacterClasses = classNames('banned-character', {
        'highlighted': isHighlighted,
    });

    return (<div className={bannedCharacterClasses}>
        { char }
    </div>);
};

export { BannedCharacters };
