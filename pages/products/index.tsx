import {useState} from 'react'
import Link from 'next/link';


export default function Products() {
    const [products, setProducts] = useState(['1', '2', '3'])
    return <div style={{padding: 40, textAlign: 'center'}}>
        <div>Products</div>
        <ul>
            {products.map((product) => (
                <li key={product}>
                    <h3><Link href={`/products/${product}`}>{product}</Link></h3>
                </li>
            ))}
        </ul>
        <button onClick={() => setProducts(arr => [...arr, String(+new Date())])}>Add</button>
    </div>
}
