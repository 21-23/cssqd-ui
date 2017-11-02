import { h } from 'preact';
import { formatScoreTime } from 'shared/formatters';
import cn from 'classnames';
import Icon from 'react-fontawesome';
import { holyWhite, winningGreen, superLightGreen, secondaryActionColor } from 'styles/colour-palette'

const CORRECT_SOLUTION = 'correct';

function generateEntries(score) {
    return score.map((entry) => {
        const rootClasses = {
            'score-entry': true,
            '-solved': entry.correct === CORRECT_SOLUTION
        };
        return (
            <div key={entry.participantId} className={cn(rootClasses)}>
                <div className="-name">{entry.displayName}</div>
                <div className="-time">{formatScoreTime(entry.time)}</div>
                <div className="-selector">{entry.code}</div>
                <style jsx>{`
                    .score-entry {
                        display: flex;
                        line-height: 3em;
                        color: ${holyWhite};
                        border-bottom: 1px solid ${superLightGreen};
                    }
                    .score-entry:hover {
                        background: ${secondaryActionColor};
                        cursor: pointer;
                    }
                    .-name {
                        flex: 1 1 33.3%;
                    }
                    .-time {
                        flex: 1 1 33.3%;
                        text-align: center;
                    }
                    .-selector {
                        flex: 1 1 33.3%;
                        text-align: right;
                    }
                `}</style>
            </div>
        );
    });
}

function getSolvedCount(score) {
    return score.filter(s => s.correct === CORRECT_SOLUTION).length;
}

const RoundScore = ({ score }) => (
    <div className="round-score">
        <div className="header">
            <div className="stats">
                <div className="-joined">
                    <div className="value">{score.length}</div>
                    <div className="meta">
                        <Icon name="users" className="icon" />
                        <div className="text">Joined</div>
                    </div>
                </div>
                <div className="separator" />
                <div className="-solved">
                    <div className="value">{getSolvedCount(score)}</div>
                    <div className="meta">
                        <Icon name="users" className="icon" />
                        <div className="text">Solved</div>
                    </div>
                </div>

            </div>
            <div className="list-header">
                <div className="-name">Name</div>
                <div className="-time">Time</div>
                <div className="-selector">Selector</div>
            </div>
        </div>
        <div className="list-container">
            {generateEntries(score)}
        </div>
        <style jsx>{`
            .round-score {
                display: flex;
                flex-direction: column;
            }
            .header .stats {
                display: flex;
            }
            .-joined, .-solved {
                flex: 1;
                display: flex;
            }
            .separator {
                width: .15vw;
                background-color: ${superLightGreen};
            }
            .value {
                flex: 1;
                font-size: 3em;
                text-align: right;
            }
            .meta {
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-left: .5em;
            }
            .icon {
                padding-bottom: .2em;
            }
            .-joined {
                color: ${holyWhite}
            }
            .-solved {
                color: ${winningGreen};
            }
            .list-header {
                display: flex;
                border-bottom: 3px solid ${superLightGreen};
                padding: 1em 0;
                color: ${secondaryActionColor}
            }
            .-name {
                flex: 1 1 33.3%;
            }
            .-time {
                flex: 1 1 33.3%;
                text-align: center;
            }
            .-selector {
                flex: 1 1 33.3%;
                text-align: right;
            }
            .list-container {
                flex: 1;
                overflow-y: auto;
            }
        `}</style>
    </div>
);

export { RoundScore };
