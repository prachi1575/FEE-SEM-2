import React from 'react'

const Header = ({heading,link}) => {
  return (
    <div>
        {heading}
        <br/>
        {link}
    </div>
  )
}

export default Header