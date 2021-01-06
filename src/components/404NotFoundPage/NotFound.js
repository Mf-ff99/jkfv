import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound.css'
const NotFound = () => {
    return (
        <>
            <div className='not-found' style={{height: '100vh', minHeight: '800px'}}>
            <h2>404 Error!</h2>
            <h2>There's nothing here! <Link to='/'>Navigate to our home page </Link></h2>
            </div>

        </>
    )
}

export default NotFound