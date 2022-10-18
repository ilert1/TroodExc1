import React from 'react'
import BarAboutItem from './bar-about-item'
export default function BarAbout({ items, percentage, width, height }) {
    let index = 0;
    return (
        <div className="d-flex justify-content-between" style={{ width: width + '%', height: height + 'px' }}>
            {items.map(
                item => <BarAboutItem key={item.name} item={item} percentage={percentage[index++]} />
            )}
        </div>
    )
}
