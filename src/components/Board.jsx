import React from 'react'
import Square from './Square'

const styles = {
    height: '250px',
    width: '250px',
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)',
}

export default function Board({ squares, onClick }) {
    return (
        <div style={styles}>
            {
                squares.map((square, i) => {
                    return <Square key={i} value={square} onClick={() => onClick(i)} />
                })
            }
        </div>
    )
}
