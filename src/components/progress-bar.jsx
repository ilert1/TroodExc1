import React from 'react'
import BarItem from './bar-item'
const Bar = ({ items, count, width, height }) => {
    console.log(items);
    let index = 0;

    return (
        <div className="progress" style={{ width: width + '%', height: height + 'px' }}>
            {items.map(
                item => <BarItem key={item.name} color={item.color} percent={count[index++]} />
            )}
        </div>
    )
}
export default Bar;