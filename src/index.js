export const constrain = dragula => {

    if ( ! ('MutationObserver' in window)) {
        return;
    }

    dragula.on('cloned', function (clone) {
        this.constraint = observe(clone, this.containers[0]);
    });

    dragula.on('dragend', function () {
        this.constraint.disconnect();
    });

    return dragula;
};

const observe = (element, container) => {

    const observer = new MutationObserver(mutations => {

        if (mutations.filter(mutation => mutation.attributeName === 'style').length === 0) {
            return;
        }

        ensureElementStaysInContainer(element, container);
    });

    observer.observe(element, { attributes: true });

    return observer;
};

const ensureElementStaysInContainer = (domElement, domContainer) => {

    const element = elementBoundsAndDimensions(domElement);
    const container = containerBounds(domContainer);

    if (element.left < container.left) {
        domElement.style.left = `${container.left}px`;
    }

    if (element.right > container.right) {
        domElement.style.left = `${container.right - element.width}px`;
    }

    if (element.top < container.top) {
        domElement.style.top = `${container.top}px`;
    }

    if (element.bottom > container.bottom) {
        domElement.style.top = `${container.bottom - element.height}px`;
    }
};

const elementBoundsAndDimensions = element => {

    const top = parseInt(element.style.top);
    const left = parseInt(element.style.left);
    const height = element.clientHeight;
    const width = element.clientWidth;

    return {
        top, left, height, width,
        bottom: top + height,
        right: left + width,
    };
};

const containerBounds = container => container.getBoundingClientRect();

export default constrain;
