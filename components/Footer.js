import React from 'react'

const styles = {
    display: "flex",
    flexDirection: "row",
    position: "fixed",
    bottom: "0"
}

export const Footer = () => {
    return (
        <div styles={styles}>
            <h3>Copyright (c) Chris Hong</h3>
        </div>
    )
}