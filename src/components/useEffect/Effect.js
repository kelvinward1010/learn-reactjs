import React, { useEffect, useState } from 'react'

function Effect() {

    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])

    // 1. useEffect(callback)
    // - Callback when component render again
    // - Callback when component add element in to DOM
    // useEffect(() => {
    //     document.title = title
    //     console.log('Mounted', title)
    // })

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(posts => {
                setPosts(posts)
            })
    })

    return (
        <div>
            <input
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            {/* {console.log('Render')} */}
            <ul>
                {posts.map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default Effect