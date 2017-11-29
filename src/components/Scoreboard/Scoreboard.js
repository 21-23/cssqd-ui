import _ from 'lodash';
import { h, Component } from 'preact';
import Icon from 'react-fontawesome';

import { winningGreen, superLightGreen } from '../../styles/color-palette'
import { UsersCounter } from '../UsersCounter/UsersCounter';
import { Table } from './Table';
import { ColumnsMap } from './columns';


const CORRECT_SOLUTION = 'correct';

const isCorrectSolution = s => s.correct === CORRECT_SOLUTION;
const getSolvedCount = items => items.filter(isCorrectSolution).length;

const Scoreboard = ({ visibleScore, roundScore, aggregateScore, toggleVisibleScoreType }) => (
    <div className="scoreboard-wrapper">
        <div className="heading">
            <div className="counter-wrapper -joined">
                <UsersCounter
                    count={roundScore.length}
                    label="Joined"
                />
            </div>

            <div className="counter-wrapper -solved">
                <UsersCounter
                    count={getSolvedCount(roundScore)}
                    label="Solved"
                />
            </div>
        </div>
        <div className={`scores -${visibleScore}`}>
            <div className="table-container round-score-wrap">
                <Table
                    columns={[
                        ColumnsMap.NAME,
                        ColumnsMap.ROUND_TIME,
                        ColumnsMap.SELECTOR
                    ]}
                    items={roundScore}
                    isActiveRow={item => item.correct === CORRECT_SOLUTION}
                />
            </div>
            <div className="table-container aggregate-score-wrap">
                <Table
                    columns={[
                        ColumnsMap.RANK,
                        ColumnsMap.NAME,
                        ColumnsMap.AGGREGATE_TIME,
                    ]}
                    items={aggregateScore}
                />
            </div>
        </div>
        <button className="score-view-switcher" onClick={() => toggleVisibleScoreType()}>
            <Icon name={visibleScore === 'aggregate' ? 'angle-right' : 'angle-left'} />
        </button>
        <style jsx>{`
            .scores {
                overflow: auto;
                position: relative;
                flex: 1;
            }

            .table-container {
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

            .scoreboard-wrapper {
                max-height: 100%;
                display: flex;
                flex-direction: column;
            }

            .heading {
                color: white;
                display: flex;
                flex: 1 0 auto;
            }

            .counter-wrapper {
                display: flex;
                flex: 1;
                justify-content: center;
            }

            .counter-wrapper:first-child {
                border-right: 1px solid #3C8A82;
            }

            .counter-wrapper.-solved {
                color: #87C736;
            }

            .table-container {
                height: 100%;
                max-height: 100%;
                overflow: auto;
            }
        `}</style>
    </div>
);

export { Scoreboard };
