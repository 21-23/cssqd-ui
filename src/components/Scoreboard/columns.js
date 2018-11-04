import { formatScoreTime } from '../../shared/formatters';

export const ColumnsMap = {
    NAME: {
        key: 'displayName',
        title: 'Name',
    },

    ROUND_TIME: {
        key: 'time',
        title: 'Time',
        format: formatScoreTime,
    },

    AGGREGATE_TIME: {
        key: 'aggregateScore',
        title: 'Time',
        format: formatScoreTime,
    },

    SELECTOR: {
        key: 'code',
        title: 'Selector',
    },

    RANK: {
        key: 'rank',
        title: '#',
        isIndex: true,
    },
};
