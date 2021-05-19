// import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'


const Header = (props) => {
    const onClick = () =>{
        console.log('Click1')
    }
    return (
        <header className='header'>
          {/* <h1 style = {headingStyle}>{props.title}</h1>   */}
          <h1>{props.title}</h1>  
          {/* <button className='btn'>Add</button> */}
          <Button color = 'green' text ='Add' onClick ={onClick} />
          {/* <Button color = 'blue' text ='Add1'/>
          <Button color = 'red' text ='Add2'/> */}
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// css in js
// const headingStyle = {
//     color: 'red', 
//     backgroundColor: 'black'
// }

export default Header

