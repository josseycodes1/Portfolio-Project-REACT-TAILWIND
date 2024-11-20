import Project1Img from '../assets/project1.jpg'
import Project2Img from '../assets/project2.jpg'
import Project3Img from '../assets/project3.jpg'
import Project4Img from '../assets/project4.jpg'
import Project5Img from '../assets/project5.jpg'

export default function Project() {
  return (
     <>
            <div className='bg-blue-900 m-20 max-w-full'>
                <div className='grid justify-items-center m-10'>
                    <h1 className='text-3xl text-white mt-10 '>Projects</h1>
                </div>

                <div>
                    <div className='grid grid-cols-2 gap-4 p-5'>
                        <div className='max-w-md mx-auto bg-white rounded-xl
                            shadow-md overflow-hidden md:max-w-2xl 
                            hover:animate-pulse'>

                            <div className='md:flex'>
                                <div className='p-8'>
                                        <div className='uppercase tracking-wide text-sm to-blue-500
                                        font-semibold'>
                                            Hospital Management System
                                        </div>

                                        <a href="#">Subheading</a>
                                        <p className='mt-2 text-slate-500'>
                                        Lorem ipsum dolor <br /> sit amet, consectetur <br /> 
                                        adipiscing elit <br /> aliqua. 
                                        </p>
                                </div>

                                <div className='md:shrink-0 p-14'>
                                <img src={Project3Img} alt="Project1" width={150} height={150} />
                                </div>
                            </div>
                        </div>

                        <div className='max-w-md mx-auto bg-white rounded-xl
                            shadow-md overflow-hidden md:max-w-2xl 
                            hover:animate-pulse'>

                            <div className='md:flex'>
                            <div className='md:shrink-0 p-14'>
                                <img src={Project2Img} alt="Project1" width={150} height={150} />
                                </div>
                                <div className='p-8'>
                                        <div className='uppercase tracking-wide text-sm to-blue-500
                                        font-semibold'>
                                            Hospital Management System
                                        </div>

                                        <a href="#">Subheading</a>
                                        <p className='mt-2 text-slate-500'>
                                        Lorem ipsum dolor <br /> sit amet, consectetur <br /> 
                                        adipiscing elit <br /> aliqua. 
                                        </p>
                                </div>

                                
                            </div>
                        </div>
                    </div>

                    <hr />

                    <div className='grid grid-cols-2 gap-4 p-5'>
                        <div className='max-w-md mx-auto bg-white rounded-xl
                            shadow-md overflow-hidden md:max-w-2xl 
                            hover:animate-pulse'>

                            <div className='md:flex'>
                                <div className='p-8'>
                                        <div className='uppercase tracking-wide text-sm to-blue-500
                                        font-semibold'>
                                            Hospital Management System
                                        </div>

                                        <a href="#">Subheading</a>
                                        <p className='mt-2 text-slate-500'>
                                        Lorem ipsum dolor <br /> sit amet, consectetur <br /> 
                                        adipiscing elit <br /> aliqua. 
                                        </p>
                                </div>

                                <div className='md:shrink-0 p-14'>
                                <img src={Project5Img} alt="Project1" width={150} height={150} />
                                </div>
                            </div>
                        </div>

                        <div className='max-w-md mx-auto bg-white rounded-xl
                            shadow-md overflow-hidden md:max-w-2xl 
                            hover:animate-pulse'>

                            <div className='md:flex'>
                            <div className='md:shrink-0 p-14'>
                                <img src={Project4Img} alt="Project1" width={150} height={150} />
                                </div>
                                <div className='p-8'>
                                        <div className='uppercase tracking-wide text-sm to-blue-500
                                        font-semibold'>
                                            Hospital Management System
                                        </div>

                                        <a href="#">Subheading</a>
                                        <p className='mt-2 text-slate-500'>
                                        Lorem ipsum dolor <br /> sit amet, consectetur <br /> 
                                        adipiscing elit <br /> aliqua. 
                                        </p>
                                </div>

                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
     </> 
  )
}


