import React from 'react'

function Footer() {
  return (
    // col 1
    <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600'>
        {/* col 1 */}
        <div className=' space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'> ABOUT</h5>
            <p>How Airbnb works</p>
            <p>Newsroom</p>
            <p>Investors</p>
            <p>Airbnb Plus</p>
            <p>Airbnb Luxe</p>
        </div>

        {/* col 2 */}
        <div className=' space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'> COMMUNITY</h5>
            <p>Accessibility</p>
            <p>Forum</p>
            <p>Isn't this clone website good?</p>
            <p>Tell a friend to tell a friend</p>
            <p>Airbnb Community</p>
        </div>

        {/* col 3 */}
        <div className=' space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'> HOST</h5>
            <p>Become a Host</p>
            <p>Host Reviews</p>
            <p>Join Now</p>
            <p>List Host property </p>
            <p>Tenant Reviews</p>
        </div>

        {/* col 5 */}
        <div className=' space-y-4 text-xs text-gray-800'> 
            <h5 className='font-bold'> SUPPORT</h5>
            <p>Technical Support</p>
            <p>Contact US</p>
            <p>Help</p>
            <p>Troubleshooting</p>
            <p>FAQ</p>
            </div>

    </div>
    
  )
}

export default Footer