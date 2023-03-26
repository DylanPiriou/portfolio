import React from 'react';
import { Routes, Route} from "react-router-dom";
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import ProjectDetails from './Pages/ProjectDetails/ProjectDetails';
import Projects from './Pages/Projects/Projects';

export default function Router() {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/project/:id" element={<ProjectDetails/>}/>
        <Route path="/*" element={<NotFound/>}/>
    </Routes>
  )
}
