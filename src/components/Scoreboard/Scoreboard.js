import { h, Component } from 'preact';
import { RoundScore } from "components/RoundScore/RoundScore";
import { AggregateScore } from "components/AggregateScore/AggregateScore";
import Icon from 'react-fontawesome';
import { winningGreen, superLightGreen } from 'styles/colour-palette'


const Scoreboard = ({ visibleScore, roundScore, aggregateScore, toggleVisibleScoreType }) => (
    <div>
        <div className={`scores -${visibleScore}`}>
            <div className="round-score-wrap">
                <RoundScore score={roundScore} />
            </div>
            <div className="aggregate-score-wrap">
                <AggregateScore score={aggregateScore} />
            </div>
        </div>
        <button className="score-view-switcher" onClick={() => toggleVisibleScoreType()}>
            <Icon name={visibleScore === 'aggregate' ? 'angle-right' : 'angle-left'} />
        </button>
        <style jsx>{`
            .scores {
                overflow: hidden;
                position: relative;
            }
            .round-score-wrap, .aggregate-score-wrap {
                transition: transform 300ms linear;
                width: 100%;
                height: 100%;
            }
            .round-score-wrap {
                transform: translateX(0);
            }
            .aggregate-score-wrap {
                top: 0;
                position: absolute;
                transform: translateX(100%);
            }
            .-aggregate .round-score-wrap {
                transform: translateX(-100%);
            }
            .-aggregate .aggregate-score-wrap {
                transform: translateX(0);
            }
            .score-view-switcher {
                color: ${winningGreen};
                border: 2px solid ${superLightGreen};
                border-radius: 1em;
                line-height: 100%;
                background: transparent;
                position: absolute;
                outline: none;
                right: 0;
                padding: 0;
                width: 1.7em;
                height: 3.7em;
                top: 50vh;
            }
            .score-view-switcher:hover {
                cursor: pointer;
                background: rgba(110,207,255,.26);
            }
        `}</style>
    </div>
);

export { Scoreboard };
