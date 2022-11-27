import React from 'react'

import * as heroStyles from "./hero.module.css"
import { navigate } from "gatsby"

const Header = () => {
  return (
    <header className={heroStyles.hero} >
       <div>
       
       </div>
       <div className={heroStyles.heroContainer}>
        <div className={heroStyles.heroInfo}>
            <h1>Jeff C. Salter</h1>
            <p>Cybersecurity and Information Design</p>
            <button className='heroButton' onClick={()=>{navigate("/about")}}>How We Can Help</button>
        </div>
       </div>
     
    </header>
  )
}

export default Header