import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/ashford-volunteer-centre-logo.svg'


function AVCLogo({}) {
  return (
    <img src= {Logo}
    alt = "Ashford Volunteer Center"
    class = "site-logo"
    ></img>
  )
}

export default AVCLogo