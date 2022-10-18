import React from 'react';

export default function barItem({ color, cnt, height }) {
    const itemStyle = {
        backgroundColor: color,
        marginLeft: 1 + 'px',
        border: 1 + 'px solid',
        width: 10 + 'px',
        height: height + 'px',
        borderRadius: 25 + '%',
    }

    function createMyELem(key) {
        return <div key={key} style={itemStyle}></div>
    }
    const myItems = [];
    for (let i = 0; i < cnt; i++) {
        myItems.push(createMyELem(i));
    }
    return (
        <> {myItems} </>
    )
};

// "width " + { percent } + '%'