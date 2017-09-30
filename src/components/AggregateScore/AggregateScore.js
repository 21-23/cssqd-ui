import { h } from 'preact';
import { holyWhite, superLightGreen, secondaryActionColor } from 'styles/colour-palette';
import { formatScoreTime } from 'common/formatters';

function generateEntries(score) {
    return score.map((entry, index) => {
        return (
            <div key={entry.participantId} className="score-entry">
                <div className="-position">{index + 1}</div>
                <div className="-name">{entry.displayName}</div>
                <div className="-time">{formatScoreTime(entry.aggregateScore)}</div>
                <style jsx>{`
                    .score-entry {
                        display: flex;
                        line-height: 3em;
                        color: ${holyWhite};
                        border-bottom: 1px solid ${superLightGreen};
                    }
                `}</style>
            </div>
        );
    });
}

const AggregateScore = ({ score }) => (
    <div className="aggregate-score">
        <div className="list-header">
            <div className="-position">#</div>
            <div className="-name">Name</div>
            <div className="-time">Time</div>
        </div>
        <div className="list-container">
            {generateEntries(score)}
        </div>

        <style jsx>{`
            .aggregate-score {
                display: flex;
                flex-direction: column;
            }
            .list-header {
                display: flex;
                border-bottom: 3px solid ${superLightGreen};
                padding: 1em 0;
                color: ${secondaryActionColor}
            }
            .-position {
                flex: 1 1 10%;
            }
            .-name {
                flex: 3 1 75%;
            }
            .-time {
                flex: 1 1 15%;
                text-align: right;
            }
            .list-container {
                flex: 1;
                overflow-y: auto;
            }
        `}</style>
    </div>
);


export { AggregateScore }
