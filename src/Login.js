
import React from 'react'
import {Link} from 'react-router-dom'
import './Style.css'
const Login = () => {
  return (
    <>
    <div id="b1">
        <h2>PLEASE LOGIN</h2>
      <form action='' method='get'>
      <label for="uname">USERNAME    </label>
      <input type="text" name="uname" id="uname"/><br/><br/>
      <label for="pass">PASSWORD     </label>
      <input type="text" name="pass" id="pass"/><br/><br/>
      <input type="submit"  value="LOG IN" className='btn btn-primary'/ > &nbsp; &nbsp; &nbsp;
      <Link to='/signup'> <input type="submit"  value="SIGN UP" className='btn btn-primary'/> </Link>
     
      </form>
      </div>
    </>
  )
}

export default Login