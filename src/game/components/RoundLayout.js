import { h } from 'preact';

const RoundLayout = ({ children }) => {
    const components = children.reduce((grouped, child) => {
        if (!child) {
            return grouped;
        }

        grouped[child.nodeName.name] = child;
        return grouped;
    }, {});

    return (
        <div className="app-root">
            { components.PearlThread }
            { components.PuzzleTitle }
            { components.BannedCharacters }
            <div className="panel">
                <div className="selector-input-container">
                    { components.SelectorInput }
                </div>
                { components.Countdown }
            </div>
            <div>
                { components.MarkupRenderer }
            </div>

            { components.RoundStartCountdown ?
                <div className="round-start-countdown-container">
                    { components.RoundStartCountdown }
                </div> :
                null
            }

            <style jsx>{`
                .app-root {
                    padding: 20px;
                    display: flex;
                    flex-direction: column;
                    flex: 1;
                }

                .panel {
                    display: flex;
                    align-items: center;
                    height: 100px;
                }

                .selector-input-container {
                    flex: 1;
                    margin-right: 20px;
                }

                .round-start-countdown-container {
                    display: flex;
                    flex: 1;
                    align-items: center;
                    justify-content: center;
                }
            `}
            </style>
        </div>
    )
};

export { RoundLayout };
