import React from 'react';
import img7 from '../assets/image7.png';
import ic1 from '../assets/icon1.png';
import ic2 from '../assets/test.jpg';
import ic3 from '../assets/icon1.png';
function Maintwo() {
return (
    <div>
        <div className="flex justify-between h-screen">
            <div className=''>
            <img src={img7} alt='img7' 
                className="absolute w-1/2 h-full object-fill"
            />
            </div>
            <div className='bg-yellow-300'>
                <div className='flex items-center justify-start'>
                    <div>
                        <img src={ic2} alt="" 
                        className=''
                        />
                    </div>
                    <div>
                        njbdhf
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}
export default Maintwo;
