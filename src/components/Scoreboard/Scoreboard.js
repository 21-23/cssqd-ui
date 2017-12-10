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

const scoreTypeColumnsMap = {
    round: [
        ColumnsMap.NAME,
        ColumnsMap.ROUND_TIME,
        ColumnsMap.SELECTOR
    ],

    aggregate: [
        ColumnsMap.RANK,
        ColumnsMap.NAME,
        ColumnsMap.AGGREGATE_TIME,
    ]
}

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
        <div className={`score-table-wrapper -${visibleScore}`}>
            <Table
                columns={scoreTypeColumnsMap[visibleScore]}
                items={visibleScore === 'round' ? roundScore : aggregateScore}
                isActiveRow={visibleScore === 'round' ?
                    item => item.correct === CORRECT_SOLUTION :
                    undefined
                }
            />
        </div>
        <button className="score-view-switcher" onClick={() => toggleVisibleScoreType()}>
            <Icon name={visibleScore === 'aggregate' ? 'angle-right' : 'angle-left'} />
        </button>
        <style jsx>{`
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

            .heading {
                color: white;
                display: flex;
                flex: 0 0 auto;
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

            .scoreboard-wrapper {
                height: 100%;
                display: flex;
                flex-direction: column;
            }

            .score-table-wrapper {
                flex: 1;
                overflow: hidden;
            }
        `}</style>

        <style jsx global>{`
            .cell.displayName {
                width: 45%;
            }

            .-aggregate .cell.displayName {
                width: 70%;
            }

            .cell.time, .cell.aggregateScore {
                width: 20%;
            }

            .cell.code {
                width: 35%;
            }

            .cell.rank {
                width: 10%;
            }
        `}</style>
    </div>
);

export { Scoreboard };
