import React, {Component} from 'react'
import {DropTarget} from 'react-dnd'
import {moveCard} from './Game'

const listTarget = {
    drop: function (props, monitor){
        moveCard(props.color)
    }
}

function collect(connect, monitor){
    return{
        connectDropTarget: connect.dropTarget()
    }
}

class List extends Component{
    render(){
        const {connectDropTarget} = this.props
        return connectDropTarget(
            <div style={{
                backgroundColor: this.props.color,
                width: '300px',
                height: '600px'
            }}>
                {this.props.children}
            </div>
        )
    }
}

export default DropTarget('card', listTarget, collect)(List)