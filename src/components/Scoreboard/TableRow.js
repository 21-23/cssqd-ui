import { h } from 'preact';

import { ContentCell } from './ContentCell';

export const TableRow = ({ columns, item, rowIndex, isActive }) => {
    const content = columns.map((column) => (
        <ContentCell
            item={item}
            column={column}
            rowIndex={rowIndex}
        />
    ));

    return (
        <tr key={rowIndex} className={isActive ? '-active' : ''}>
            { content }

            <style jsx>{`
                .-active {
                    color: #87C736;
                }
            `}</style>
        </tr>
    );
};
