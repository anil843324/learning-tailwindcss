import React from 'react'

import terminal from '../assets/terminal.png'
const Developer = () => {
  return (
    <div className='w-full text-white bg-black'>
    
    
     <div className='max-w-[1240px] px-4 py-16  md:flex md:m-auto  '>

         
       <div className='left '>
            <h1 className='   '>Superpowers for DEFI developers.</h1>
            <p>
            Checkout the <span className="text-[#00d8ff]">documentation</span>, the <span className="text-[#00d8ff]">quick start</span>  or a guide below to
            integrate your project with thousands of tokens and billions of
            liquidity.
          </p>
       </div>
       <div className='right flex justify-center w-full py-16 '>
             <img src={terminal} className="max-w-[250px]  shadow-lg shadow-cyan-500/50 " alt="/" />
       </div>



     </div>
    
    
    
    
    
    
    
    
    
    
    
    </div>
  )
}

export default Developer