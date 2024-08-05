import React from 'react'
import "./ContainerHeaderStore.css"
import { Link } from 'react-router-dom'
const HeaderStore = () => {
  return (
    <div className='container-headerStore'>
        

     
       <div className='section1'>
        <div className='logo-section1'>
          
        <Link to="/Home_user1" style={{textDecoration:"none",color:"white"}}>       <img src='/images/micrsoftStore.png'/>  </Link>
     </div>
     
 

<h3 className='microsftNet'>Microsoft Store</h3>
       </div>

       <div className='section2'><input type='text' /></div>

       <div className='section3'>
        <div className='icon-NG'></div>
        <div className='icon-remove'>
        <span class="material-symbols-outlined">Remove</span>
        <span class="material-symbols-outlined">open_in_full</span>
        <span class="material-symbols-outlined">close</span>
        </div>
       </div>
       


       
    </div>




  )
}

export default HeaderStore