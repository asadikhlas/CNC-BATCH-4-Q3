import React from 'react'
import {Link} from 'react-router-dom'

export default function Items() {
    return (
        <div>
           <h1>This is Item component</h1>
            <Link to="/">Back</Link><br/>
           <Link to="/category">category</Link>
        </div>
    )
}
