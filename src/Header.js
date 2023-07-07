import React from 'react'
import "./css/header.css"


function Header() {
  return (
    <>
    <div className="header">

       
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUUijkyR0-Q5xq3l6d-kI1eaYAtsHIdS9YUQ&usqp=CAU" className="header_logo" alt="amc"/>
         

        <div className="header_search">
             <input type="text" />
        </div>

        <div className="header_nav">
               <div className="header_option">
                    <span className="header_option1">ABC Power System </span>
                    <span className="header_option2">Sign In</span>
               </div>

               <div className="header_option">
                    <span className="header_option1">Response</span>
                    <span className="header_option2">& Controls</span>
               </div>

               <div className="header_option">
                    <span className="header_option1">your</span>
                    <span className="header_option2">World</span>
               </div>

              
        </div> 
    </div>

    
    </>
  )
}

export default Header
