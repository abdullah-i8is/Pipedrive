import React from 'react';
import './SideBar.css';
import { useNavigate } from 'react-router-dom';

const SideBar = ({ items, setItems, icons }) => {

    const navigate = useNavigate()

    return (
        <div className="custom-sidebar">
            {items.map((item, index) => (
                <div key={index} className={`sidebar-item ${item.isActive ? 'selected' : ''}`}
                    onClick={() => {
                        navigate(item.path)
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
                        setTimeout(() => {
                            window.location.reload()
                        }, 100);
                    }}>
                    {icons[index]}
                </div>
            ))}
        </div>
    );
};

export default SideBar;
