import { h, Component } from 'preact';
import classNames from 'classnames';
import Icon from 'react-fontawesome';

class PearlThread extends Component {
    render({ items = [], activeIndex = 0, isClickable }) {
        const progressPercentage = (activeIndex / (items.length - 1)) * 100;

        return (
            <div className="pearl-thread">
                <div className="progress-bar" style={{ width: `${progressPercentage}%` }} ></div>

                <div className="puzzle-progress-container">
                    {items.map((item, index) => PuzzleProgressItem(item.caption, index, activeIndex, isClickable))}
                </div>


                <style jsx>{`
                    .pearl-thread {
                        min-height: 60px;
                        padding: 0 20px;
                    }

                    .puzzle-progress-container {
                        margin-top: 5px;
                        display: flex;
                        justify-content: space-between;
                    }

                    .progress-bar {
                        background-color: #fdd522;
                        width: 100%;
                        height: 3px;
                        transition: width 1s;
                    }
                `}</style>
            </div>
        );
    }
}

const PuzzleProgressItem = (caption, index, activeIndex, isClickable) => {
    let content;

    if (index < activeIndex) {
        content = <Icon name="check"/>;
    } else if (index === activeIndex) {
        content = caption;
    } else {
        content = index + 1;
    }

    const itemClass = classNames('puzzle-progress-item', {
        'solved': index < activeIndex,
        'current': index === activeIndex,
        'future': index > activeIndex,
        'clickable': isClickable,
    });

    return (<div className={itemClass}>
        { content }

        <style jsx>{`
            .puzzle-progress-item {
                width: 25px;
                height: 25px;
                line-height: 29px;
                text-align: center;
                color: #badece;
            }

            .puzzle-progress-item.solved {
                border: 2px solid #4c8580;
                border-radius: 50%;
            }

            .puzzle-progress-item.solved,
            .puzzle-progress-item.current {
                color: #f8d940;
            }

            .puzzle-progress-item.current {
                transform: translateX(-50%);
                white-space: nowrap;
            }

            .clickable {
                cursor: pointer;
            }
        `}</style>
    </div>);
};

export { PearlThread };
