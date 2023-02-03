import React from 'react';
import './style.css';

const Navbar = () => {
  return (
    <>
        <div className=' main-div '>
           {/* <div style={{backgroundColor:"blue",height:'100px',width:'670px'}}> */}
           <ul className=''>
                    <li><a href=''>Home</a></li>
                    <li><a href=''>Services</a></li>
                    <li><a href=''>Resources</a></li>
                    <li><a href=''>About</a></li>
                    <li><a href=''>Contact</a></li>

                </ul>
           {/* </div> */}
               
            
        </div>
        {/* <div style={{ backgroundColor: 'blue'}}>
        <nav>
                <ul style={{ dislay:'flex',backgroundColor: 'red'}}>
                    <li><a href=''>Home</a></li>
                    <li><a href=''>Services</a></li>
                    <li><a href=''>Resources</a></li>
                    <li><a href=''>About</a></li>
                    <li><a href=''>Contact</a></li>

                </ul>
            </nav>
        </div> */}


    </>
  )
}

export default Navbar;