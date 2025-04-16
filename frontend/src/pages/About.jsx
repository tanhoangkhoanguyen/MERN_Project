import { Link } from "react-router-dom"

export function About() {
    return (
        <>
            <p>This is a website where you can create your own blogs, pages.</p>
            <p>If you want more informaiton, navigate to this <Link to="/CreateBlog">Create Blog</Link> page.</p>
        </>
    )
}