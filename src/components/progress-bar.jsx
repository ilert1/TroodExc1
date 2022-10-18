import React from 'react'
import BarItem from './bar-item'
const Bar = ({ items, count, width, height }) => {
    console.log(items);
    let index = 0;

    let el = [];

    for (let i = 0; i < items.length; i++) {
        el.push(<BarItem color={items[i].color} cnt={count[index++]} height={height} />)
    }
    return (
        <div className="progress align-items-center justify-content-between" style={{ width: width + '%', height: height + 'px' }}>
            {el}
        </div>
    )
}
export default Bar;