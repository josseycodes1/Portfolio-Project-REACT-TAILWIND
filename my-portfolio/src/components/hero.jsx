import {BsFacebook, BsTwitter, BsInstagram, BsPinterest} from 'react-icons/bs';
import HeroPic from '../assets/mine1.jpg';

const hero = () => {
  return (
    <section className='flex justify-around items-center p-10 
    space-x-10 lg:flex-row ssm:flex-col 
    ssm:space-y-10 text-white'>

        <div className='lg:w-1/3 ssm:w-fit'>
        <p className='text-4xl mb-5 text-slate-300'>I'm</p>
        <h1 className='text-6xl'>Adewumi Josephine</h1>
        <hr />
        <p className='mt-10 text-slate-300 font-sans'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna 
        aliqua. 
        </p>
        </div>

        <div className='w-1/3 items-center ssm:w-fit'>
            <img src={HeroPic} alt="" width={250} height={250}
            className='rounded-full width-full border-4 border-white' />
        </div>

        <div className='w-1/3 ssm:w-fit'>
          <p className='text-4xl mb-4'>About Me</p>
          <p className='text-slate-300'>
            Lets build quality in programing and designs with our services
          </p>
          <button className='bg-white text-blue-700 px-10 py-2 my-3
          rounded-full hover:bg-blue-700 hover:text-white'>
            Show More...
          </button>
          <div className='flex mt-5 space-x-4 cursor-pointer'>
            <BsFacebook size={40} className='border-4 hover:border-blue-950
            rounded-full'/>
            <BsTwitter size={40} className='border-4 hover:border-blue-950
            rounded-full'/>
            <BsInstagram size={40} className='border-4 hover:border-blue-950
            rounded-full'/>
            <BsPinterest size={40} className='border-4 hover:border-blue-950
            rounded-full'/>
          </div>
        </div>
    </section>
  )
}

export default hero