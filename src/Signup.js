import React from 'react'
import { Link } from 'react-router-dom'
const Signup = () => {
  return (
    <>
    <div id="b2">
        <h2>PLEASE LOGIN</h2>
      <form action='' method=''>
      <input type="text" name="name" id="name"/><br/><br/>
      <input type="email" name="email" id="email"/><br/><br/>
      <input type="number" name="mobile" id="mobile"/><br/><br/>
      <input type="text" name="pass" id="pass"/><br/><br/>
      <input type="submit"  value="SIGN UP" className='btn btn-primary'/ >
        <Link to='/'>      <h4>hava an account please login</h4> </Link>
      </form>
      </div>
    </>
  )
}

export default Signup