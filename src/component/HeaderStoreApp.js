import React from 'react'
import "./HeaderStoreApp.css"
import Card2 from './Card2'
import XCard from './XCard'

const HeaderStoreApp = ({api}) => {
  return (
    <div className='HeaderStoreApp1'>


           <main>
       <swiper-container slides-per-view="1" space-between="20" scrollbar-clickable="true" mousewheel-invert="true">
           
            {api.map((index)=> <swiper-slide>{  <Card2 id  ={index.id} title ={index.nameProduct} img ={index.imgUrlData}/>}</swiper-slide>)}
           
        </swiper-container>

        
    </main>
    




   <hr/>
<div className='topjeux'>  
<div className='class1'>  
<h2>Top Game Free </h2>
<span class="material-symbols-outlined">chevron_right</span>
</div>


<div className='topJeuxcard'>
   
   {api.map((index)=>  <XCard title = {index.nameProduct} img = {index.imgUrlData} id ={index.id}/>)}
           
</div>

<hr/>








</div>





    </div>
  )
}

export default HeaderStoreApp