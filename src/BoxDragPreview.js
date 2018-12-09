import * as React from 'react'
import Box from './Box'

const styles = {
    display: 'inline-block',
    transform: 'rotate(-7deg)',
    WebkitTransform: 'rotate(-7deg)',
}

export default class BoxDragPreview extends React.PureComponent {
    state = {
        tickTock: false,
        interval: ''
    }

    componentDidMount() {
        this.state.interval = setInterval(this.tick, 500)
    }

    componentWillUnmount() {
        clearInterval(this.state.interval)
    }

    render() {
        const { title } = this.props
        const { tickTock } = this.state

        return (
            <div style={styles}>
                <Box title={title} yellow={tickTock} />
            </div>
        )
    }

    tick = () => {
        this.setState({
            tickTock: !this.state.tickTock,
        })
    }
}
