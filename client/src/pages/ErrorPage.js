import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <div>
        404 NOT FOUND
        <Link to='/'>Back</Link>
    </div>
  )
}

export default ErrorPage