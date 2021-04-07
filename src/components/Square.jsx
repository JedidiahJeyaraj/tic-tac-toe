import React from 'react'

const styles = {

}

export default function Square({ value, onClick }) {
    return (
        <button style={styles} onClick={onClick}>
            {value}
        </button>
    )
}
