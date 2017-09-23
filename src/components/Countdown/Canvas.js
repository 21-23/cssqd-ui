import { h, Component, cloneElement } from 'preact';

class Canvas extends Component {
    constructor(props) {
        super(props);

        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.children = new Set();

        // retina magic start
        // see https://www.html5rocks.com/en/tutorials/canvas/hidpi/

        const backingStoreRatio = this.ctx.webkitBackingStorePixelRatio || 1;
        const devicePixelRatio = window.devicePixelRatio || 1;

        this.ratio = devicePixelRatio / backingStoreRatio;
        this.canvas.style.transformOrigin = '0 0';
        this.canvas.style.transform = `scale(${1 / this.ratio}, ${1 / this.ratio})`;
        // retina magic end
    }

    render() {
        const children = this.props.children.map(child => {
            return cloneElement(child, {
                ctx: this.ctx,
                ref: c => {
                    if (child.attributes.ref) {
                        child.attributes.ref(c);
                    }

                    if (c) {
                        this.children.add(c)
                    } else {
                        this.children.delete(c);
                    }
                },
                size: this.props.size * this.ratio,
            });
        });

        return (
            <div
                ref={node => this.container = node}
                style={{
                    width: `${this.props.size}px`,
                    height: `${this.props.size}px`,
                }}
            >
                { children }
            </div>
        );
    }

    componentDidMount() {
        this.container.appendChild(this.canvas);
        this._render();
    }

    componentDidUpdate() {
        this._render();
    }

    _render() {
        this.size = this.props.size * this.ratio;

        this.canvas.width = this.size;
        this.canvas.height = this.size;

        this.children.forEach(child => {
            child.update();
            child.renderToCanvas();
        });
    }
}

export { Canvas };
