import { h } from 'preact';
import { formatScoreTime } from 'common/formatters';
import cn from 'classnames';
import Icon from 'react-fontawesome';
import { holyWhite, winningGreen, superLightGreen, secondaryActionColor, partialCheater } from 'styles/colour-palette'

const Solution = {
    CORRECT: 'correct',
    PARTIAL: 'partial'
};

function generateEntries(score) {
    return score.map((entry) => {
        const rootClasses = {
            'score-entry': true,
            '-solved': entry.correct === Solution.CORRECT,
            '-partial': entry.correct === Solution.PARTIAL,
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
                `}</style>
            </div>
        );
    });
}

function getSolvedCount(score) {
    return score.filter(s => s.correct === Solution.CORRECT).length;
}

const RoundScore = ({ score }) => (
    <div className="round-score">
        <style jsx>{`
            .round-score {
                display: flex;
                flex-direction: column;
            }
        `}</style>
        <div className="header">
            <div className="stats">
                <style jsx>{`
                    .header .stats {
                        display: flex;
                    }
                `}</style>
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
                <style jsx>{`
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
                    .-partial {
                        color: ${partialCheater};
                    }
                `}</style>
            </div>
            <div className="list-header">
                <div className="-name">Name</div>
                <div className="-time">Time</div>
                <div className="-selector">Selector</div>
            </div>
            <style jsx>{`
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
            `}</style>
        </div>
        <div className="list-container">
            <style jsx>{`
                .list-container {
                    flex: 1;
                    overflow-y: auto;
                }
            `}</style>

            {generateEntries(score)}
        </div>
    </div>
);

export { RoundScore };
