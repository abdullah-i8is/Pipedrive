import React from 'react';
import { Route, Router, Routes, useParams, useSearchParams } from 'react-router-dom';
import Layout from './layout';
import Gmail from './comp/Gmail';
import Docs from './comp/Docs';
import SSTrack from './comp/SS-track';
import Verdebooks from './comp/Verdebooks';
import ClickHR from './comp/ClickHR';
import CalendarComponent from './comp/GoogleCalender';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Gmail />} />
          <Route path='/:token' element={<Gmail />} />
          <Route path='/docs' element={<Docs />} />
          <Route path='/ss-track' element={<SSTrack />} />
          <Route path='/verde-books' element={<Verdebooks />} />
          <Route path='/click-HR' element={<ClickHR />} />
          <Route path='/calender' element={<CalendarComponent />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;