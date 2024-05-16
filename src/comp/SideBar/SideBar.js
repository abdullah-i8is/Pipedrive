import React from 'react';
import './SideBar.css';

const SideBar = ({ items, setItems, icons }) => {
    return (
        <div className="custom-sidebar">
            {items.map((item, index) => (
                <div key={index} className={`sidebar-item ${item.isActive ? 'selected' : ''}`}
                    onClick={() => {
                        setItems((prevItems) => {
                            return prevItems.map((item, ind) => {
                                if (index === ind) {
                                    return {
                                        ...item,
                                        isActive: true
                                    }
                                } else {
                                    return {
                                        ...item,
                                        isActive: false
                                    }
                                }
                            })
                        })
                    }}>
                    {icons[index]}
                </div>
            ))}
        </div>
    );
};

export default SideBar;
