import _ from 'lodash';
import { h, Component } from 'preact';
import classNames from 'classnames';
import Icon from 'react-fontawesome';
import { Colors } from './pearl-thread-style-constants';

const FuturePearl = ({ index }) => (
    <span>
        {index}
        <style jsx>{`
            span {
                color: rgba(255, 255, 255, 0.5);
                padding: 5px;
                cursor: pointer;
                margin-left: -5px;
            }
        `}</style>
    </span>
);

const PastPearl = () => (
    <span className="pearl">
        <Icon name="check" />

        <style jsx>{`
            .pearl {
                padding: 2px;
                border-radius: 50%;
                width: 25px;
                height: 25px;
                box-sizing: border-box;
                border: 2px solid rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                cursor: pointer;
            }
        `}</style>
    </span>
);

const TitlePearl = ({ isFirst, isLast, title }) => {
    const style = {};

    if (!isFirst && !isLast) {
        style.transform = 'translateX(-50%)';
    }

    if (isLast) {
        style.transform = 'translateX(-100%)';
    }

    return (
        <span className="title" style={style}>
            {title}

            <style jsx>{`
                .title {
                    position: absolute;
                    text-align: center;
                    cursor: pointer;
                }
            `}</style>
        </span>
    );
};

const Pearl = ({ isPast, index, title, isFirst, isLast, onClick = _.noop }) => {
    let content = <FuturePearl index={index + 1} />;

    if (isPast) {
        content = <PastPearl />;
    }

    if (title) {
        content = <TitlePearl isFirst={isFirst} isLast={isLast} title={title} />;
    }

    return (
        <div className="pearl-container">
            <span onClick={() => onClick(index)}>{content}</span>

            <style jsx>{`
                .pearl-container {
                    position: relative;
                    margin-top: 10px;
                    width: 0;
                    height: 0;
                    color: #f8d940;
                }
            `}</style>
        </div>
    );
};

const PearlThread = ({ itemsCount, activeIndex = 0, activeTitle, onPearlClick }) => {
    const progressPercentage = (activeIndex / (itemsCount - 1)) * 100;
    const safeProgressPercentage = Math.min(progressPercentage, 100);

    return (
        <div className="pearl-thread">
            <div className="progress-bar" style={{ width: `${safeProgressPercentage}%` }} />
            <div className="pearls-container">
                {new Array(itemsCount).fill(0).map((_, index) => (
                    <Pearl
                        isPast={index < activeIndex}
                        title={activeIndex === index ? activeTitle : null}
                        index={index}
                        isFirst={index === 0}
                        isLast={index === itemsCount - 1}
                        onClick={onPearlClick}
                    />
                ))}
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

                .pearls-container {
                    display: flex;
                    justify-content: space-between;
                }
            `}</style>
        </div>
    );
};

export { PearlThread };
