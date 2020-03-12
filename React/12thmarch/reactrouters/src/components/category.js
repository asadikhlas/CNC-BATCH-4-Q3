import React from 'react'
import {Link} from 'react-router-dom'

export default function Category() {
    return (
        <div>
            <h1>Category</h1>
            <Link to="/item">Item</Link><br/>
            <Link to="/">Back</Link>
        </div>
    )
}
