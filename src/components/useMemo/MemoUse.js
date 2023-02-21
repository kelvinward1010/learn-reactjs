import React, { useMemo, useRef, useState } from 'react'

function MemoUse() {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [products, setProducts] = useState([])

    const nameRef = useRef()

    const handleSubmit = () => {
        setProducts([...products, {
            name,
            price: +price
        }])
        setName('')
        setPrice('')

        nameRef.current.focus()
    }
    
    // const Total = products?.reduce((result, prod) =>{
    //     console.log('Tinh lai ...')
    //     return result + prod.price
    // },0)
    const total = useMemo(() => {
        const result = products?.reduce((result, prod) => {
            console.log('tinh toan lai...')
            return result + prod.price
        },0)

        return result
    },[products])

    return (
        <div style={{padding:'10px 30px'}}>
            <input
                ref={nameRef}
                value={name}
                placeholder='Enter name...'
                onChange={e => setName(e.target.value)}
            />
            <br/>
            <input
                value={price}
                placeholder='Enter price...'
                onChange={e => setPrice(e.target.value)}
            />
            <br />
            <button onClick={handleSubmit}>ADD</button>
            <br />
            Total: {total}
            <ul>
                {products.map((product,index) => (
                    <li key={index}>{product.name} - {product.price}</li>
                ))}
            </ul>
        </div>
    )
}

export default MemoUse