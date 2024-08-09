import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <div>
        <h3>404 NOT FOUND</h3>

        <Link to='/'>Back</Link>
    </div>
  )
}

export default ErrorPage