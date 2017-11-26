import { h } from 'preact';

export function withGroupedChildren(Component) {
    return ({ children, ...props }) => {
        const components = children.reduce((grouped, child) => {
            if (!child) {
                return grouped;
            }

            grouped[child.nodeName.name] = child;
            return grouped;
        }, {});

        return <Component {...props} components={components}/>;
    }
}
