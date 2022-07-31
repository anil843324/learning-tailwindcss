import React from 'react'

const Subscribe = () => {
  return (
    <div className='w-full px-4 py-16 bg-black text-center text-white '>
    
    
        <h1>Join Our DeFi Community</h1>
    
    
    
          <div className='py-4'>
            <input type="email" className='p-3 rounded-3xl mr-4 text-black' placeholder='Enter your email' />
                
              <button>Sign Up</button>
          </div>
  
         <div className='flex items-center justify-center py-2 ' >
           <input type="checkbox" className='mr-2 ' />
              <p className=' md:text-xl text-[13px]  ' >Yes, I agree to receive eamil communication from Defi</p>
         </div>
    
    
    
    
    
    
    
    
    </div>
  )
}

export default Subscribe