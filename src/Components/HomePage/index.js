import React from 'react';
import './style.css';
import Image1 from '../../Images/Ellipse1.png';
import Image2 from '../../Images/Polygon3.png';
import Image3 from '../../Images/Ellipse2.png';
import Image4 from '../../Images/Ellipse3.png';
import Image5 from '../../Images/Rectangle1.png';
import Image6 from '../../Images/Polygon1.png';


const HomePage = () => {
  return (
    <>
        <div className='image-div'>
            <div className='image-1'>
            <img src={Image1}  
            />
            </div>
            <div className='image-2'>
            <img src={Image2}  
            />
            </div>
            <div className='image-3'>
            <img src={Image3}  
            />
            </div>
            <div className='image-4'>
            <img src={Image4}  
            />
            </div>
            
           
        </div>
        
        <div className='text'>
            <div className='designer'>
            <h1 style={{textAlign:"start"}}>Adeem.</h1>
            <h5 className='designer2'>a Designer</h5>
            </div>
        </div>
        
       <div className='content'>
       <div className='image-5'>
            <img src={Image5}  
            />
            </div>
        <div style={{color:"rgba(30, 30, 30, 0.6)"}}>

            <h4>Let's Desin Together!</h4>
        </div>
        <div className='image-6'>
            <img src={Image6}  
            />
            </div>
       </div>
    </>
  )
}

export default HomePage;