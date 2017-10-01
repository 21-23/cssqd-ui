import { voidElements } from './void-elements';

export const indentString = (level, size) => new Array(level)
    .fill(' '.repeat(size))
    .join('');

export function serialize(node, indentLevel, closing = false) {
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
        text: node.childNodes.length === 1 && node.children.length === 0 ? node.innerText : null,
    };
}

export function* traverse(node, indentLevel = 0) {
    const serializedNode = serialize(node, indentLevel);
    yield serializedNode;

    for (let i = 0; i < node.children.length; i++) {
        const child = node.children[i];
        yield* traverse(child, indentLevel + 1);
    }

    if (!serializedNode.empty) {
        yield serialize(node, indentLevel, true);
    }
}
