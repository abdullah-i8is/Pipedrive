import React, { useState } from 'react';
import { Outlet, Route, Router, Routes } from 'react-router-dom';
import NavBar from './comp/Navbar/Header';
import SideBar from './comp/SideBar/SideBar';
import icon1 from './assets/icon1.png';
import icon2 from './assets/icon2.png';
import icon3 from './assets/icon3.png';
import icon4 from './assets/icon4.png';
import icon5 from './assets/icon5.png';
import icon6 from './assets/calender-icon.png';

const Layout = () => {

    const [items, setItems] = useState([
        { path: '/gmail', isActive: false },
        { path: '/docs', isActive: false },
        { path: '/ss-track', isActive: false },
        { path: '/verde-books', isActive: false },
        { path: '/click-HR', isActive: false },
        { path: '/calender', isActive: false },
    ]);

    const icons = [
        <img width={30} src={icon3} alt="" />,
        <img width={30} src={icon5} alt="" />,
        <img width={30} src={icon1} alt="" />,
        <img width={30} src={icon4} alt="" />,
        <img width={30} src={icon2} alt="" />,
        <img width={30} src={icon6} alt="" />,
    ];

    const [selectedItem, setSelectedItem] = useState('');

    const handleSelect = (item) => {
        setSelectedItem(item);
    };

    return (
        <div>
            <NavBar />
            <SideBar items={items} setItems={setItems} icons={icons} onSelect={handleSelect} selectedItem={selectedItem} />
            <div className='content'>
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;
