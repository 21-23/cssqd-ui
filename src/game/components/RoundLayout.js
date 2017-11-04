import { h } from 'preact';

const RoundLayout = ({ children }) => {
    const components = children.reduce((grouped, child) => {
        grouped[child.nodeName.name] = child;
        return grouped;
    }, {});

    return (
        <div className="app-root">
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

            <style jsx>{`
                .app-root {
                    padding: 20px;
                }

                .panel {
                    display: flex;
                    align-items: center;
                }

                .selector-input-container {
                    flex: 1;
                    margin-right: 20px;
                }
            `}
            </style>
        </div>
    )
};

export { RoundLayout };
