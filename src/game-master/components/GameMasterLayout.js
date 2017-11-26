import { h } from 'preact';
import { withGroupedChildren } from '../../components/with-grouped-children-hoc';

const PureGameMasterLayout = ({ components }) => (
    <div className="game-master">
        { components.PearlThread }

        <div className="game-master-content">
            <div className="content-container">
                <div className="content-header">
                    <div className="puzzle-attributes">
                        { components.PuzzleTitle }
                        { components.RoundPhaseButton }
                        <p>
                            { components.BannedCharacters }
                        </p>
                    </div>
                    <div className="countdown-container">
                        { components.Countdown }
                    </div>
                </div>

                <div className="content">
                    { components.MarkupRenderer }
                    { components.RoundStartCountdown }
                </div>
            </div>

            <div className="scoreboard-container">
                { components.Scoreboard }
            </div>
        </div>

        <style jsx>{`
            .game-master {
                padding: 0 40px;
                flex: 1;
                display: flex;
                flex-direction: column;
            }

            .game-master-content {
                flex: 1;
                display: flex;
                flex-direction: row;
            }

            .content-container, .scoreboard-container {
                display: flex;
            }

            .content-container {
                flex: 3;
                flex-direction: column;
                margin-right: 40px;
            }

            .content-header {
                display: flex;
                flex-direction: row;
            }

            .puzzle-attributes {
                display: flex;
                flex: 1;
                flex-direction: column;
                align-items: flex-start;
            }

            .countdonw-container {
                flex: 0;
                width: 200px;
                height: 200px;
            }

            .scoreboard-container {
                flex: 2;
                flex-direction: column;
            }

            .content {
                flex: 1;
            }
        `}</style>
    </div>
);

const GameMasterLayout = withGroupedChildren(PureGameMasterLayout);

export { GameMasterLayout };
