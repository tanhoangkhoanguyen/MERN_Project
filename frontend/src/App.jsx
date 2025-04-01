import { useState, useEffect } from 'react'
import { getPosts, getPost, createPost, updatePost, deletePost } from './api';
import './App.css'

function App() {

  const [posts, setPosts] = useState();

  function makePost() {
    let postObject = {
      title: "Nguyen Thi Yen Nhi",
      description: "Matcha",
      content: "My crush",
      author: "tanhoangkhoanguyen",
      dateCreated: new Date()
    }

    createPost(postObject)
  } 

  useEffect(() => {
    async function loadAllPosts() {
      let data = await getPosts()
      if (data) {
        setPosts(data)
      }
    }

    loadAllPosts()
  }, []) 

  return (
    <>
      <button onClick={makePost}>
        Create Post
      </button>
    </>
  )
}

export default App