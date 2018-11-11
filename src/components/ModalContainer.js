import { h } from 'preact';

export const ModalContainer = ({ children }) => (
    <div className="modal-container">
        {children}
        <style jsx global>{`
            .modal-container {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: rgba(0, 0, 0, 0.3);
            }

            .modal-title {
                text-align: center;
                color: #f8d940;
                text-transform: uppercase;
            }

            .modal-text {
                margin: 2rem 0;
            }

            .modal-content {
                padding: 3rem;
                background: linear-gradient(to top, #183d3d 0%, #224b4b 35%, #2d5d59 70%, #43827f 100%) repeat-x #183d3d;
                color: white;
                border-radius: 10px;
                max-width: 400px;
                border: 1px solid #48847e;
            }

            .modal-footer {
                text-align: center;
            }
        `}</style>
    </div>
);
