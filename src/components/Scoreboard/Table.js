import _ from 'lodash';
import { h } from 'preact';

import { TableRow } from './TableRow';
import { HeadingCell } from './HeadingCell';

export const Table = ({ columns, items, isActiveRow = _.constant(false) }) => {
    const titles = columns.map(HeadingCell);
    const rows = items.map((item, rowIndex) => (
        <TableRow
            columns={columns}
            item={item}
            rowIndex={rowIndex}
            isActive={isActiveRow(item)}
        />
    ));

    return (
        <table>
            <thead>
                <tr >
                    { titles }
                </tr>
            </thead>

            <tbody>
                { rows }
            </tbody>

            <style jsx>{`
                table {
                    width: 100%;
                    color: white;
                    border-collapse: collapse;
                }
            `}</style>
        </table>
    );
}
