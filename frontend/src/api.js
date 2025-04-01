import axios from "axios";

const URL = "http://localhost:3000"

export async function getPosts() {
    // "http://localhost:3000/posts"
    const response = await axios.get(`${URL}/posts`)

    if (response.status === 200) {
        return response.data
    } else {
        return
    }
}

export async function getPost(id) {
    // "http://localhost:3000/67e0d71c091220bf5666a4ce"
    const response = await axios.get(`${URL}/posts/${id}`)

    if (response.status === 200) {
        return response.data
    } else {
        return
    }
}

export async function createPost(post) {
    // "http://localhost:3000/posts"
    const response = await axios.post(`${URL}/posts`, post)
    return response
}

export async function updatePost(id, post) {
    // "http://localhost:3000/posts/67e0d71c091220bf5666a4ce"
    const response = await axios.put(`${URL}/posts/${id}`, post)
    return response
}

export async function deletePost(id) {
    // "http://localhost:3000/67e0d71c091220bf5666a4ce"
    const response = await axios.delete(`${URL}/posts/${id}`)
    return response
}