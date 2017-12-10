import _ from 'lodash';
import { h } from 'preact';
import VirtualList from 'preact-virtual-list';

const ROW_HEIHGT = 35;

const renderCells = (columns, item, rowIndex) => columns.map((column) => {
    const format = column.format || _.identity;
    const value = column.isIndex ? (rowIndex + 1) : format(item[column.key]);

    return <div className={`cell ${column.key}`}>{ value }</div>
});


function renderRow(columns, item, rowIndex, isActiveRow) {
    const cells = renderCells(columns, item, rowIndex);

    return (
        <div className={`row ${isActiveRow(item) ? '-active' : ''}`}>
            { cells }
        </div>
    );
}

export const Table = ({ columns, items, isActiveRow = _.constant(false) }) => {
    return (
        <div className="table-wrapper">
            <div className="row -heading">
                { columns.map(column => <div className={`cell ${column.key}`}>{ column.title}</div>)}
            </div>

            <VirtualList
                data={items}
                class="table"
                renderRow={(item) =>
                    renderRow(columns, item, items.indexOf(item), isActiveRow)
                }
                rowHeight={ROW_HEIHGT}
                overscanCount={10}
            />

            <style jsx global>{`
                .table-wrapper {
                    position: relative;
                    padding-top: ${ROW_HEIHGT}px;
                    height: 100%;
                    overflow: hidden;
                }

                .table {
                    height: 100%;
                    overflow: auto;
                }

                .row {
                    height: ${ROW_HEIHGT}px;
                    white-space: nowrap;
                    width: 100%;
                    color: white;
                }

                .row.-active {
                    color: #87C736;
                }

                .row.-heading {
                    position: absolute;
                    top: 0;
                }

                .row.-heading .cell {
                    border-bottom: 3px solid #3C8A82;
                }

                .cell {
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: inline-block;
                    box-sizing: border-box;
                    padding: 5px;
                    text-align: center;
                    border-bottom: 1px solid #3C8A82;
                }

                .cell:first-child {
                    text-align: left;
                }

                .cell:last-child {
                    text-align: right;
                }
            `}</style>
        </div>
    );
}
