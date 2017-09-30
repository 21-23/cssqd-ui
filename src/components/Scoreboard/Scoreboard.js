import { h, Component } from 'preact';
import { RoundScore } from "components/RoundScore/RoundScore";
import { AggregateScore } from "components/AggregateScore/AggregateScore";

const Scoreboard = ({ visibleScore, score }) => {
    return (
        <div className={`scores -${visibleScore}`}>
            <RoundScore score={score} />
            <AggregateScore score={score} />
            <style jsx>{`
                .scores {
                    flex: 1;
                    position: relative;
                    overflow: hidden;
                }
                .round-score, .aggregate-score {
                    transition: transform 300ms linear;
                    width: 100%;
                    height: 100%;
                }
                .round-score {
                    transform: translateX(0);
                }
                .aggregate-score {
                    top: 0;
                    position: absolute;
                    transform: translateX(100%);
                }
                .-aggregate .round-score {
                    transform: translateX(-100%);
                }
                .-aggregate .aggregate-score {
                    transform: translateX(0);
                }
            `}</style>
        </div>
    );
};

export { Scoreboard };
