import { useEffect, useState } from 'react';
import NavBar from './comp/Navbar/Header';
import { AiOutlineHome, AiOutlineRedEnvelope, AiOutlineUser, AiOutlineDollar, AiOutlineProject } from "react-icons/ai";
import SideBar from './comp/SideBar/SideBar';
import Gmail from './comp/Gmail';
import Verdebooks from './comp/Verdebooks';
import './App.css';
import Docs from './comp/Docs';
import SSTrack from './comp/SS-track';
import ClickHR from './comp/ClickHR';

function App() {

  const [items, setItems] = useState([
    { path: 'Home', isActive: true },
    { path: 'About', isActive: false },
    { path: 'Services', isActive: false },
    { path: 'Contact', isActive: false },
    { path: 'Blog', isActive: false },
  ]);
  const icons = [<AiOutlineHome size={20} />, <AiOutlineRedEnvelope size={20} />, <AiOutlineDollar size={20} />, <AiOutlineUser size={20} />, <AiOutlineProject size={20} />];
  const [selectedItem, setSelectedItem] = useState('');
  const handleSelect = (item) => {
    setSelectedItem(item);
  };

  console.log(items);

  return (
    <div className="App">
      <NavBar />
      <SideBar items={items} setItems={setItems} icons={icons} onSelect={handleSelect} selectedItem={selectedItem} />
      <div className='content'>
        {items[0].isActive && <Gmail />}
        {items[1].isActive && <Docs />}
        {items[2].isActive && <SSTrack />}
        {items[3].isActive && <Verdebooks />}
        {items[4].isActive && <ClickHR />}
      </div>
    </div>
  );
}

export default App;
