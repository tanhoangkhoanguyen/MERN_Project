import { useState, useEffect } from 'react'
import { getPosts, getPost, createPost, updatePost, deletePost } from './api';
import './App.css'
import {HashRouter as Router, Routes, Route} from "react-router-dom"
import { Landing } from '../pages/Landing'
import { About } from '../pages/ABout'
import { Contact } from '../pages/Contact'
import { CreateBlog } from '../pages/CreateBlog'
import { Home } from '../pages/Home'
import { Profile } from '../pages/Profile'
import { ReadBlog } from '../pages/ReadBlog'
import { Navbar } from '../components/Navbar';
import { Layout } from '../components/Layout';

function App() {

  // Pages

  // Landing page
  // Home page (filtered by cecency)
  // ReadBlog
  // CreateBlog
  // Profile
  // Contact

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route element={<Layout/>}>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/createblog/:id" element={<CreateBlog/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/readblog" element={<ReadBlog/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App