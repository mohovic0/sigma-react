import React from 'react'
import { Link } from 'react-router-dom'
import './Titre.css'

export default function Titre(props) {

  return (
    <div className='box container'>
        <p>
            <h1>{props.niveau}</h1>
            <h4><Link to='/'>Home</Link>/ <Link to={props.pth}>{props.niveau}</Link></h4>
        </p>
       
        
    </div>
  )
}