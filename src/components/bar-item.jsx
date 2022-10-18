import React from 'react';

export default function barItem({ color, percent }) {
    const itemStyle = {
        width: percent + '%',
        backgroundColor: color,
    }

    console.log(color, percent);

    return (

        <div className="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="30"
            style={itemStyle} ></div>
    )
};

// "width " + { percent } + '%'