import React from 'react';
import hero from '../assets/icon0.jpg';
function Footer() {
return (
    <div className='bg-black h-96 flex justify-between text-white p-20'>
        <div className='flex flex-col space-y-6 text-xl'>
            <div><h1 className='font-thin text-xl'>Best Solution From</h1></div>
            <div>
            <img src={hero} alt=""
                    className='h-20 w-44 rounded-md'
            />
            </div>
        </div>
        <div className='font-thin text-md space-y-5'>
            <h1>DOL Max Overlaminate Films</h1>
            <h1>Why us</h1>
            <h1>Enquire now</h1>
        </div>
        <div className='font-thin text-md space-y-2'>
            <h1>Avery Dennison Overlaminate</h1>
            <h1>Avery Dennison Overlaminate Films</h1>
            <h1>Avery Dennison Digital Overlaminate Films</h1>
            <h1>Avery Dennison DOL Max</h1>
        </div>
    </div>
)
}
export default Footer;
