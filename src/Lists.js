import React, {Component} from 'react'
import Card from './Card'
import List from './List'
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

class Lists extends Component{
    renderList(color){
        var piece = null;
        if(this.props.cardPosition === color){
            piece = <Card />
        }
        return (
            <List color={color}>
                {piece}
            </List>
        )
    }

    render(){
        return(
            <div style={{
                width: '900px',
                height: '900px',
                display: 'flex'
            }}>
                {this.renderList('orange')}
                {this.renderList('green')}
                {this.renderList('blue')}
            </div>
        )
    }
}

export default DragDropContext(HTML5Backend)(Lists)