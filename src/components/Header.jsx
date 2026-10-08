
import Image from 'next/image';

import logo from '../assets/logo-icon.png'
import { Button } from '@heroui/react';
import Navlink from './Navlink';
import Marquee from './Marquee';



const Header = () => {
    const date = new Date().toLocaleDateString("bn-Bd" , {

        dateStyle : 'full'

    })

    console.log(date);
    
    
    return (
      <div>
         
            <div className='flex justify-around'>
            <div className='flex items-center gap-3'>
              <div className='bg-green-600 px-3 py-3 rounded-2xl'>  <Image src={logo} alt='logo'/></div>
               <div>
                 <h1 className='font-bold text-2xl'>বাজার দর</h1>
                <p>{date}</p>
                
               </div>

            </div>
            <div >
                <Button className='bg-white text-black'>সাইন ইন</Button>
                <Button className='bg-green-600'>সাইন আপ</Button>

            </div>
           


          
        </div>
     <div >   <Navlink></Navlink>
     
     </div>


      </div>
        
        
    );
};

export default Header;