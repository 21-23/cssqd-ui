import { h } from 'preact';
import { connect } from 'preact-redux';
import { createStructuredSelector } from 'reselect';

import { hasScore, totalTime, playerPosition, playersCount } from '../selectors/player-score-selectors';

import { puzzlesCount } from '../../shared/selectors/puzzle-selectors';
import { AuthButton } from '../../components/AuthButton/AuthButton';
import { ModalContainer } from '../../components/ModalContainer';

function buildTweetText(totalTime, playerPosition, playersCount, puzzlesCount) {
    let message = `Today I've spent ${totalTime} seconds to solve ${puzzlesCount} puzzles in #cssqd by 2123.io`;

    if (playerPosition <= 10) {
        if (playerPosition > 2) {
            return message + `\nThere were only ${playerPosition - 1} people faster than me – out of ${playersCount}!`;
        }

        if (playerPosition > 1) {
            return message + `\nThere was only single person faster than me – out of ${playersCount}!`;
        }

        return message + `\nI'm the fastest of ${playersCount} people!`;
    }

    return message;
}

const PureSocialSharingContainer = ({ hasScore, totalTime, playerPosition, playersCount, puzzlesCount }) =>
    hasScore ? (
        <ModalContainer>
            <div className="modal-content">
                <div className="modal-title">Congratulations!</div>
                <div className="modal-text">
                    <p>Thanks for playing #CSSQD</p>
                    <p>
                        You've spent {totalTime} seconds to solve {puzzlesCount} tasks
                    </p>
                    <p>
                        You're {playerPosition} of {playersCount}
                    </p>
                    <p>{playerPosition <= 10 ? 'Wow, so fast!' : 'Good job!'}</p>
                </div>
                <div className="modal-footer">
                    <AuthButton
                        path={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                            buildTweetText(totalTime, playerPosition, playersCount, puzzlesCount)
                        )}`}
                        target="_blank"
                        icon="twitter"
                        size={5}
                    >
                        <span>Tweet</span>
                    </AuthButton>
                </div>
            </div>
            <style jsx>{`
                p {
                    margin: 0.3rem 0;
                    text-align: center;
                }

                span {
                    font-size: 2vh;
                    margin-left: 1vh;
                    vertical-align: middle;
                }
            `}</style>
        </ModalContainer>
    ) : null;

const SocialSharingContainer = connect(
    createStructuredSelector({
        hasScore,
        puzzlesCount,
        totalTime,
        playerPosition,
        playersCount,
    })
)(PureSocialSharingContainer);

export { SocialSharingContainer };
