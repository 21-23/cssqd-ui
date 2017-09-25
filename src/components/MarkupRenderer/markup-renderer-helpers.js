import { voidElements } from './void-elements';

export const indentString = (level, size) => new Array(level)
    .fill(' '.repeat(size))
    .join('');

export function transform(node, indentLevel, closing = false) {
    const tagName = node.tagName.toLowerCase();

    return {
        tagName,
        empty: node.children.length === 0,
        closing,
        indentLevel,
        selfClosing: voidElements.indexOf(tagName) !== -1,
        qdId: node.dataset.qdid,
        attributes: Array.from(node.attributes)
            .map(({ name, value }) => ({ name, value }))
            .filter(({ name }) => name !== 'data-qdid'),
    };
}

export function* traverse(node, indentLevel = 0) {
    const transformedNode = transform(node, indentLevel);
    yield transformedNode;

    for (let i = 0; i < node.children.length; i++) {
        const child = node.children[i];
        yield* traverse(child, indentLevel + 1);
    }

    if (!transformedNode.empty) {
        yield transform(node, indentLevel, true);
    }
}
