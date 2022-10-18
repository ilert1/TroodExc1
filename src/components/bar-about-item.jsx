import React from 'react'

export default function BarAboutItem({ item, percentage }) {

    const dotStyle = {
        height: 15,
        width: 15,
        backgroundColor: item.color,
        borderRadius: 50,
        display: 'inline-block'
    }

    return (
        <div>
            <span><span style={dotStyle}></span>{item.name}: {item.value} ({percentage}%)</span>
        </div>
    )
}
