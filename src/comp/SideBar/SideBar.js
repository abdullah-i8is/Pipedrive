import React, { useState } from 'react';
import './SideBar.css';
import { useNavigate } from 'react-router-dom';
import threeDotsIcon from '../../assets/three-dots.png.png';
import automationIcon from '../../assets/Automation.png'; // Replace with your actual icon paths
import assignmentIcon from '../../assets/Automatic_Assignment.png';
import documentsIcon from '../../assets/Document.png';
import importIcon from '../../assets/Import_Data.png';  // Add your three-dot icon
const SideBar = ({ items, setItems, icons }) => {
    const navigate = useNavigate();
    const [isExtraSidebarVisible, setIsExtraSidebarVisible] = useState(false);
    const [hoveredItem, setHoveredItem] = useState(null);

    const toggleExtraSidebar = () => {
        setIsExtraSidebarVisible(!isExtraSidebarVisible);
    };

    return (
        <div className="sidebar-container">
            <div className="custom-sidebar">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={`sidebar-item ${item.isActive ? 'selected' : ''}`}
                        onClick={() => {
                            if (item.path === "/home") {
                                window.location.href = "https://infiniti-suit.vercel.app/"
                            }
                            else {
                                navigate(item.path);
                            }
                            setItems(prevItems => prevItems.map((it, ind) => index === ind ? { ...it, isActive: true } : { ...it, isActive: false }));
                            setTimeout(() => {
                                window.location.reload();
                            }, 100);
                        }}
                        onMouseEnter={() => setHoveredItem(index)}
                        onMouseLeave={() => setHoveredItem(null)}
                    >
                        {icons[index]}
                        {hoveredItem === index && (
                            <div className="sidebar-tooltip">
                                {item.path.substring(1)} {/* Display text based on path */}
                            </div>
                        )}
                    </div>
                ))}
                <div className="sidebar-item three-dots" onClick={toggleExtraSidebar}>
                    <img width={30} src={threeDotsIcon} alt="More" />
                </div>
            </div>
            {isExtraSidebarVisible && (
                <div className={`extra-sidebar ${isExtraSidebarVisible ? 'slide-in' : ''}`}>
                    <div className="option" onClick={() => navigate('/automations')}>
                        <img src={automationIcon} alt="Automations" className="option-icon" />
                        Automations
                    </div>
                    <div className="option" onClick={() => navigate('/automatic-assignment')}>
                        <img src={assignmentIcon} alt="Automatic Assignment" className="option-icon" />
                        Automatic Assignment
                    </div>
                    <div className="option" onClick={() => navigate('/documents')}>
                        <img src={documentsIcon} alt="Documents" className="option-icon" />
                        Documents
                    </div>
                    <div className="option" onClick={() => navigate('/import-data')}>
                        <img src={importIcon} alt="Import Data" className="option-icon" />
                        Import Data
                    </div>
                </div>
            )}
        </div>
    );
};

export default SideBar;
