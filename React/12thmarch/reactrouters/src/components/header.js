import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <div>
           <h1>This is header component</h1>
           <Link to="/item">Item</Link><br/>
           <Link to="/item/2">Item two</Link><br/>
            <Link to="/category">category</Link>
        </div>
    )
}
