import { h, Component } from 'preact';
import classNames from 'classnames';
import Icon from 'react-fontawesome';
import { Colors } from './pearl-thread-style-constants';

function onPearlThreadClick(onPearlClick, event) {
    let target = event.target;

    while (target) {
        const pearlIndex = target.dataset && target.dataset.pearlIndex;

        if (pearlIndex) {
            onPearlClick(+pearlIndex);
        }

        target = target.parentNode;
    }
}

const PearlThread = ({ items = [], activeIndex = 0, onPearlClick }) => {
    const progressPercentage = (activeIndex / (items.length - 1)) * 100;
    const safeProgressPercentage = Math.min(progressPercentage, 100);
    const isClickable = typeof onPearlClick === 'function';
    const onContainerClick = isClickable ? onPearlThreadClick.bind(null, onPearlClick) : null;

    return (
        <div className="pearl-thread">
            <div className="progress-bar" style={{ width: `${safeProgressPercentage}%` }} ></div>

            <div className="puzzle-progress-container"
                onClick={onContainerClick}>
                {items.map((item, index) => Pearl({
                    caption: item.caption,
                    index,
                    activeIndex,
                    isClickable,
                    onPearlClick,
                }))}
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
                    background-color: ${Colors.PROGRESS_BAR_COLOR};
                    width: 100%;
                    height: 3px;
                    transition: width 1s;
                }
            `}</style>
        </div>
    );
}

const Pearl = ({ caption, index, activeIndex, isClickable }) => {
    let content;

    if (index < activeIndex) {
        content = <Icon name="check"/>;
    } else if (index === activeIndex) {
        content = caption;
    } else {
        content = index + 1;
    }

    const itemClass = classNames('pearl', {
        'solved': index < activeIndex,
        'current': index === activeIndex,
        'future': index > activeIndex,
        'clickable': isClickable,
    });

    return (
        <div className={itemClass} data-pearl-index={index}>

            { content }

            <style jsx>{`
                .pearl {
                    box-sizing: border-box;
                    width: 25px;
                    height: 25px;
                    line-height: 25px;
                    text-align: center;
                    color: ${Colors.UNSOLVED_PEARL_COLOR};
                }

                .pearl.solved {
                    border: 2px solid #4c8580;
                    border-radius: 50%;
                }

                .pearl.solved,
                .pearl.current {
                    color: ${Colors.SOLVED_PEARL_COLOR};
                }

                .pearl.current {
                    width: auto;
                    min-width: 25px;
                    white-space: nowrap;
                }

                .clickable {
                    cursor: pointer;
                }
            `}</style>
        </div>
    );
};

export { PearlThread };
