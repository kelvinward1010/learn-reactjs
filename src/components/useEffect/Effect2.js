import React, { useEffect, useState } from 'react'

function Effect2() {

    const [posts, setPosts] = useState([])

    // 2. useEffect(callback,[])
    // - Just Callback 1 time when component mounted

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(posts => {
                setPosts(posts)
            })
    },[])

    return (
        <div>
             <ul>
                {posts.map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default Effect2