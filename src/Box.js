import * as React from 'react'

const styles = {
    border: '1px dashed gray',
    padding: '0.5rem 1rem',
    cursor: 'move',
}

export default class Box extends React.PureComponent {
    render() {
        const { title, yellow } = this.props
        const backgroundColor = yellow ? 'yellow' : 'white'

        return <div style={{ ...styles, backgroundColor }}>{title}</div>
    }
}
