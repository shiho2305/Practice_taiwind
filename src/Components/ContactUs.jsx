import React from 'react';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md';
import {dataRestaurant} from '../data/dataRestaurant';
import {dataDescription} from '../data/dataDesription';

const ContactUs = () => {

    const slideLeft = () => {
        var slider = document.getElementById('slide')
        slider.scrollLeft = slider.scrollLeft - 500

    }

    const slideRight = () => {
        var slider = document.getElementById('slide')
        slider.scrollLeft = slider.scrollLeft + 500
    }

    return (
        <div className='max-w-[1640px] m-auto px-4 py-12'>
            <h1 className='text-orange-600 font-bold text-4xl text-center mb-8 drop-shadow-xl'>Top Rates Restaurant</h1>
        
            <div className='grid grid-cols-3 lg:grid-cols-3 gap-9 ml-6 mr-6'>
                {dataDescription.map((items) => (
                    <div key={items.id} className='mt-7'>
                        <div className='bg-gray-200 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl hover:scale-105 duration-300'>
                            <img className='w-full h-[300px] object-cover' src={items.img} alt={items.name} />
                            <div className='mt-5 mb-6'>
                                <h2 className='font-bold text-2xl text-slate-600'>{items.name}</h2>
                                <p className='text-slate-500 mt-3 h-36 overflow-hidden line-clamp-4'>{items.description}</p>
                            </div>                     
                        </div>
                    </div>
                ))}
            </div>


            <div className='mt-9 mb-9 bg-slate-600'>
                <div className='flex justify-evenly items-center gap-6 pt-6'>
                    <div className='flex justify-evenly items-center gap-6 text-slate-100'>
                        <h3 className='text-4xl text-slate-200' style={{fontFamily:'Brush Script MT'}}>Art Gallery</h3>
                        <div className='flex gap-2 text-sm hover:opacity-80'>
                            <svg className="w-5 h-5 text-slate-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="18" height="20" fill="none" viewBox="0 0 18 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 2h4a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h4m6 0v3H6V2m6 0a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1M5 5h8m-5 5h5m-8 0h.01M5 14h.01M8 14h5"/>
                            </svg>
                            <p>Foods & Drinks</p>
                        </div>
                        <div className='flex gap-2 text-sm hover:opacity-80'>
                            <svg class="w-5 h-5 text-yellow-400 text-sm" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5h9M5 9h5m8-8H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h4l3.5 4 3.5-4h5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"/>
                            </svg>
                            <p className='text-yellow-400'>Introduction</p>
                        </div>
                        <div className='flex gap-2 text-sm hover:opacity-80'>
                            <svg className="w-5 h-5 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 19">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 12 5.419 3.871A1 1 0 0 0 16 15.057V2.943a1 1 0 0 0-1.581-.814L9 6m0 6V6m0 6H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h7m-5 6h3v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-5Zm15-3a3 3 0 0 1-3 3V6a3 3 0 0 1 3 3Z"/>
                            </svg>
                            <p className='text-yellow-400 text-sm'>Contact us</p>
                        </div>
                    </div>
                    <div>
                        <button className='bg-white flex justify-evenly items-center gap-3 pt-2 pb-2 hover:opacity-80 '>
                            <svg className="animate-bounce w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                <path d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z"/>
                            </svg>
                            <span className='fw-bolder fs-2'>Description</span>
                        </button>
                    </div>
                </div>

                <div className='flex relative items-center m-3 p-5 pb-6'>
                    <MdChevronLeft className=' cursor-pointer text-slate-100' onClick={slideLeft} size={80}/>
                    <div id="slide" className='pb-5 overflow-y-hidden overflow-x-hidden scroll whitespace-nowrap scroll-smooth'>
                        {dataRestaurant.map((data) => (
                            <img key={data.id} className='w-[300px] h-[250px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300' src={data.image} alt="image error" />
                        ))}
                    </div>
                    <MdChevronRight className='cursor-pointer text-slate-100' onClick={slideRight} size={80}/>
                </div>

            </div>

            <div>

            </div>

        </div>
    );
}

export default ContactUs;
