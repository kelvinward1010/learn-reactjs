import React, { useEffect, useState } from 'react';

const tabs = ['posts','comments','albums']

function EffectDom() {
    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')
    const [showGotoTop, setShowGoToTop] = useState(false)
    const [width, setWidth] = useState(window.innerWidth)

    // 3. useEffect(callback,[deps])
    // - Callback again when deps change 

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => {
                setPosts(posts)
            })
    },[type])

    useEffect(() => {
        const handleScoll = () => {
            if(window.scrollY >= 200){
                setShowGoToTop(true)
            }else{
                setShowGoToTop(false)
            }
        }
        window.addEventListener('scroll',handleScoll)
        console.log('mouent...')

        //Cleanup funtion

        return () => {
            window.removeEventListener('scroll',handleScoll)
            console.log('unmouent...')
        }
    },[])

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }

    },[])

    return (
        <>
            <div>
                <p>{width}</p>
            </div>
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
            <div>
                {showGotoTop && (
                    <button
                        style={{
                            position: 'fixed',
                            right: 20,
                            bottom: 20,
                        }}
                    >Go to Top</button>
                )}
            </div>
        </>
    )
}

export default EffectDom