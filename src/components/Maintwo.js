import React from 'react';
import icon1 from '../assets/icon1.png';
import icon4 from '../assets/icon4.png';
import icon3 from '../assets/icon3.png';
import icon2 from '../assets/icon2.png';
function Maintwo() {
    const image = [
        { id: 1, src: icon1, text: 'Quality Products' },
        { id: 2, src: icon2, text: 'Multiple Options' },
        { id: 3, src: icon3, text: 'Expertise and Supports Products' },
        { id: 4, src: icon4, text: 'Durability Assurance' }
    ];
    return (
        <div className='flex w-full bg-gray-400'>
            <div className='bg-hero-bg bg-contain bg-no-repeat h-screen w-1/2' />
            <div className="w-auto mt-20 mb-20">
                <h1 className='text-3xl font-extrabold'>Why us?</h1>
                <div className='mt-20 space-y-7'>
                    {
                        image.map((items) => {
                            return (
                                <div key={items.id} className='flex space-x-4 items-center'>
                                    <img src={items.src} id={items.id} alt='/' className='h-20 w-20 object-contain'/>
                                    <p><span className=''>{items.text}</span></p>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Maintwo;
