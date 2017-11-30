import _ from 'lodash';
import { h } from 'preact';

export const ContentCell = ({ item, column, rowIndex }) => {
    const format = column.format || _.identity;
    const value = column.isIndex ? (rowIndex + 1) : format(item[column.key]);

    return (
        <td title={value}>
            { value }

            <style jsx>{`
                td {
                    padding: 10px;
                    border-bottom: 3px solid #3C8A82;
                    white-space: nowrap;
                }
            `}</style>
        </td>
    );
}
