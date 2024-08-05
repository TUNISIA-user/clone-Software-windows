import React, { useEffect, useState } from 'react';
import './HomeUser1.css';
import { Nahdi_Gayth } from '../context/GlobalContext';
import Card from './Card';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import BASKET_DATA from './BASKET_DATA';
import "./ConttainerPcFromMicrosft.css"
const HomeUser1 = () => {
  const  Nav = useNavigate()

 
  // const HandelFunctionWithReactLinkRouter =()=>{
   
 
  //     setTimeout(() => {
  //       Nav("/Home_user");
  //     }, 1000) 
   
  //       // work new spinner tomowwros
  // }



  const HandelOff = ()=>{
    Nav("/")
  }

  const [getDataFromInput, setGetDataFromInput] = useState("");
  const [getSearchData, setGetSearchData] = useState([]);
 
  const api = [
    { id: 1, nameProduct: "exel", imgUrlData: "images/exel.png" },
    { id: 2, nameProduct: "microsft", imgUrlData: "images/microsft.png" },
    { id: 3, nameProduct: "micrsoftStore", imgUrlData: "images/micrsoftStore.png" },
    { id: 4, nameProduct: "spotify", imgUrlData: "images/spotify.png" },
    { id: 5, nameProduct: "powerPoint", imgUrlData: "images/powerPoint.png" },
    { id: 6, nameProduct: "gmail", imgUrlData: "images/gmail.png" },
    { id: 7, nameProduct: "outlook", imgUrlData: "images/4375032_logo_outlook_icon.png" }
  ];

  useEffect(() => {
    const filteredData = api.filter(product =>
      product.nameProduct.includes(getDataFromInput)
    );
    
    setGetSearchData(filteredData);
  }, [getDataFromInput]);

 const Move = Nahdi_Gayth()
 const [isOpen, setIsOpen] = useState(() => localStorage.getItem('isOpen') || "none" )

 let   data   = new Date()
 
useEffect(() => {
  localStorage.setItem('isOpen', isOpen);
}, [isOpen]);

 
const handleToggle = () => {
  setIsOpen(prevState => prevState === "flex" ? "none" : "flex");
};

console.log(isOpen); 
 

 
  return (
    <>   
    <div className='Container-Screen-Shoot'>
     
      <div className='Screen'>  
        <div className='section-user-profile'>
          <img src={Move.img}/>
             Welcome  {Move.user?Move.user :"GUEST"}
        </div>
      
 
        <div className='banner-top' style={{ display: isOpen }}>


          <div className='banner-top-section1'>
            
            <div className='banner-top-section1-inner'>

               <div className='icon-section'>
                <img src='images/menu_63dp_FFFFFF_FILL0_wght400_GRAD0_opsz48.svg'/>
               </div>

               <div className='icon-section2'>
               <span class="material-symbols-outlined X">person</span>
               <span class="material-symbols-outlined X">image</span>
               <span class="material-symbols-outlined X">settings</span>
               <span class="material-symbols-outlined X" onClick={HandelOff}>power_settings_new</span>
               </div>
               

              </div>

          </div>





          <div className='banner-top-section2'>
            
            <h2 className='APP-banner-top-section'>APP</h2>
         
           {getSearchData.map((index)=><Card title ={index.nameProduct} img ={index.imgUrlData}/>)}
            
          </div>






          <div className='banner-top-section3'>
          <h2 className='pro'>Proudctivte</h2>


          
         <div className='container-basket-data'>

 
     {Move.Basket_Data.map(item=> <BASKET_DATA id = {item.id} title = {item.title} img ={item.img}/> ) }
        {console.log(Move.Basket_Data,"mtchrdin")}
         </div>
        


          </div>
        </div>

{/* <   Folder push */}


<div className='container-pc-from-MicrosftStore'>
  
<div className='Folder' >
  <Link to="/Folder">   <img src='/images/folder.png'/> </Link>  
</div>

<div className='Folder-install-microsft' >
  
  {
    Move.Basket_Data_to_desktop &&Move.Basket_Data_to_desktop.map((index)=> <img src={index.img}/>)
  }
</div>






</div>







{/* <   Folder push */}






        <div className='banner'  >
         <img src='/images/icons8-windows-8.svg' className='banner1' onClick={handleToggle}/>
      
         <input type='text' className='Search-icon' onChange={(e)=>{setGetDataFromInput(e.target.value)}} />
         
         <div className='web-app-appliaction'>

         <Link to="/store">
        <img src='images/micrsoftStore.png' className='web-app-app' alt='Microsoft Store' />
       </Link>

          <img src='images/chrome.png'  className='web-app-app' />
          <img src='images/discord.png' className='web-app-app'  />
         
        <a href='https://vscode.dev/'>   <img src='images/vscode.png'  className='web-app-app' /> </a>
         </div>



  <div className='web-app-appliaction'>

   <div className='Timer'>
    {data.getHours()}:{data.getSeconds()}
   </div>

</div>



        </div>
      </div>
    </div>
    </>
  );
};

export default HomeUser1;
