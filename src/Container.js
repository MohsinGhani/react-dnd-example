import * as React from 'react'
import {
    DropTarget,
    ConnectDropTarget,
    DropTargetMonitor,
    DropTargetConnector,
} from 'react-dnd'
import DraggableBox from './DraggableBox'
import snapToGrid from './snapToGrid'
const update = require('immutability-helper')

const styles = {
    width: 300,
    height: 300,
    border: '1px solid black',
    position: 'relative',
}

const boxTarget = {
    drop(
        props,
        monitor,
        component,
    ) {
        if (!component) {
            return
        }
        const delta = monitor.getDifferenceFromInitialOffset()
        const item = monitor.getItem()

        let left = Math.round(item.left + delta.x)
        let top = Math.round(item.top + delta.y)
        if (props.snapToGrid) {
            ;[left, top] = snapToGrid(left, top)
        }

        component.moveBox(item.id, left, top)
    },
}


class Container extends React.PureComponent {
    state = {
        boxes: {
            a: { top: 20, left: 80, title: 'Drag me around' },
            b: { top: 180, left: 20, title: 'Drag me too' },
        },
    }

    render() {
        const { connectDropTarget } = this.props
        const { boxes } = this.state

        return connectDropTarget(
            <div style={styles}>
                {Object.keys(boxes).map(key => this.renderBox(boxes[key], key))}
            </div>,
        )
    }

    moveBox(id, left, top) {
        this.setState(
            update(this.state, {
                boxes: {
                    [id]: {
                        $merge: { left, top },
                    },
                },
            }),
        )
    }

    renderBox(item, key) {
        return <DraggableBox key={key} id={key} {...item} />
    }
}

export default DropTarget(
    'box',
    boxTarget,
    (connect) => ({
        connectDropTarget: connect.dropTarget(),
    }),
)(Container)
