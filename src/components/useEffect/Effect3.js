import React, { useEffect, useState } from 'react';

const tabs = ['posts','comments','albums']

function Effect3() {

    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')

    // 3. useEffect(callback,[deps])
    // - Callback again when deps change 

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => {
                setPosts(posts)
            })
    },[type])

    console.log(type)

    return (
        <>
            <div>
                {tabs.map(tab => (
                    <button
                        key={tab}
                        onClick={() =>setType(tab)}
                        style={type === tab ?{
                            color: '#fff',
                            backgroundColor:'black'
                        }: {}}
                    >
                        {tab}
                    </button>
                ))}
                <input
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
            </div>
            <div>
                <ul>
                    {posts.map((item) => (
                        <li key={item.id}>{item.title || item.name}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Effect3