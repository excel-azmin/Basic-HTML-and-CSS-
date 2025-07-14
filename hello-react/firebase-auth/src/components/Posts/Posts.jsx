
import React, { useEffect } from 'react'
import Post from '../Post/Post'

export default function Posts() {

    const [posts, setPosts] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    useEffect( () => {
        try {
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                setPosts(data)
                setLoading(false)
            })
            .catch(error => {
                console.error("Error fetching posts:", error)
                setLoading(false)
            })
        }
        catch (error) {
            console.error("Error fetching posts:", error)
        }
    },[])
        
  return (
    <div>
        {
            loading && <div className="skeleton h-32 w-full"></div>
        }
        {
            posts.map(post => {
               return <Post key={post.id} post={post} />
            })
        }
      
    </div>
  )
}
