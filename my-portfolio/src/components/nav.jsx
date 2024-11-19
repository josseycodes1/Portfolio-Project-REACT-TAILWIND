import {CgNametag} from 'react-icons/cg';
import {AiFillUnlock, AiOutlineClose} from 'react-icons/ai';
import {HiMenuAlt1} from 'react-icons/hi';
import { useState } from 'react';

const nav = () => {

  const [toggle, setToggle] = useState(false);

    function openMenu(){
      setToggle(true);
    }

    function closeMenu(){
      setToggle(false);
    }

  return (
    <>
      <div className="flex items-centre justify-between p-10 lg:flex-row text-white">
          <div> 
            <a href="#" className="font-extrabold text-3xl hover:bg-blue-900 rounded-full px-5 py-2
            font-mono tracking-wider flex items-center"><CgNametag/>JOSSEYCODES</a>
          </div>
          
          <div className="space-x-4">
            <div className='ssm:hidden lg:block space-x-2'>
                <a href="#" className=" hover:bg-blue-900 rounded-full px-5 py-2 text-xl">Skills</a>
                <a href="#" className=" hover:bg-blue-900 rounded-full px-5 py-2 text-xl">About</a>
                <a href="#" className=" hover:bg-blue-900 rounded-full px-5 py-2 text-xl">Portfolio</a>
                <a href="#" className=" hover:bg-blue-900 rounded-full px-5 py-2 text-xl">Testimonials</a>
                <a href="#" className=" hover:bg-blue-900 rounded-full px-5 py-2 text-xl">Contact</a>
            </div>
            <div className='ssm:block lg:hidden'>
              {toggle ? (
                  <AiOutlineClose onClick={closeMenu} size={30} className='text-white cursor-pointer'/>
              ):(<HiMenuAlt1 onClick={openMenu} size={30} className='text-white'/>

              )}
            
            </div>
          </div> 
      </div>
      <div>
         
         <div className='ssm:block lg:hidden'>
         {toggle ? (
              <div className='flex justify-between ml-10'>
              <ul>
                  <li className='text-white text-xl mb-2 cursor-pointer'>Skills</li>
                  <li className='text-white text-xl mb-2 cursor-pointer'>About</li>
                  <li className='text-white text-xl mb-2 cursor-pointer'>Portfolio</li>
                  <li className='text-white text-xl mb-2 cursor-pointer'>Testimonials</li>
                  <li className='text-white text-xl mb-2 cursor-pointer'>Contact</li>
              </ul>
           </div>     
            ):(
                <div></div>
              )}
         </div>
         
         
      </div>


    </>
  )
}

export default nav

