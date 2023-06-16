import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

// All Pages Layouts
import PagesLayout from './pages/PagesLayout';

// All Pages Routes
import Home from './pages/Home';
import PlayList from './pages/PlayList';
import Track from './pages/Track';


export default function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<PagesLayout />}>
        <Route index element={<Home />}/>
        <Route path='playlist' element={<PlayList />}/>
        <Route path='track' element={<Track />}/>
      </Route>
      {/* <Route path='/' element={<PagesLayout />}>
      </Route> */}
    </Routes>
    </BrowserRouter>
  )
}
ReactDOM.render(<App />, document.getElementById("root"));

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
