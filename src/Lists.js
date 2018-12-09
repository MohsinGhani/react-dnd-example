import * as React from 'react'
import Container from './Container'
import CustomDragLayer from './CustomDragLayer'
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

class Lists extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            snapToGridAfterDrop: false,
            snapToGridWhileDragging: false,
        }
    }

    render() {
        const { snapToGridAfterDrop, snapToGridWhileDragging } = this.state

        return (
            <div>
                <Container snapToGrid={snapToGridAfterDrop} />
                <CustomDragLayer snapToGrid={snapToGridWhileDragging} />
                <p>
                    <label htmlFor="snapToGridWhileDragging">
                        <input
                            id="snapToGridWhileDragging"
                            type="checkbox"
                            checked={snapToGridWhileDragging}
                            onChange={this.handleSnapToGridWhileDraggingChange}
                        />
                        <small>Snap to grid while dragging</small>
                    </label>
                    <br />
                    <label htmlFor="snapToGridAfterDrop">
                        <input
                            id="snapToGridAfterDrop"
                            type="checkbox"
                            checked={snapToGridAfterDrop}
                            onChange={this.handleSnapToGridAfterDropChange}
                        />
                        <small>Snap to grid after drop</small>
                    </label>
                </p>
            </div>
        )
    }

    handleSnapToGridAfterDropChange = () => {
        this.setState({
            snapToGridAfterDrop: !this.state.snapToGridAfterDrop,
        })
    }

    handleSnapToGridWhileDraggingChange = () => {
        this.setState({
            snapToGridWhileDragging: !this.state.snapToGridWhileDragging,
        })
    }
}

export default DragDropContext(HTML5Backend)(Lists)
