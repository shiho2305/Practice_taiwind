import React, { useEffect, useState } from 'react';

const Footer = () => {

    const [theme, setTheme] = useState('light');

    useEffect(() => {
        if(theme === 'dark'){
            document.documentElement.classList.add('dark');
        }
        else{
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    const handleThemeSwitch = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }

    return (
        <div className='max-w-[1640px] m-auto px-4 py-12'>
            <h1 className='text-orange-600 font-bold text-4xl text-center'>Advice For Healthy</h1>

            <div className="ml-9 mt-7">
                <button onClick={handleThemeSwitch} className='bg-slate-300 text-slate-500 dark:bg-slate-500 dark:text-white fw-light outline-none border-none shadow-lg pt-1 pb-1 rounded-full'>
                    <div className='inline-flex items-center justify-center p-2 bg-slate-200 dark:bg-slate-400 rounded-full shadow-lg'>
                        <span className="dark:order-2 inline-flex items-center justify-center p-2 bg-indigo-500  rounded-full shadow-lg">
                            <svg className="h-3 w-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            </svg>
                        </span>
                        &nbsp;&nbsp;<span className='dark:mr-3 text-slate-500 fw-extrabold dark:text-slate-100'>Dark Mode</span>
                    </div>
                </button>
            </div>
        
            <div className='mt-7 grid grid-cols-2 lg:grid-cols-2 gap-9 ml-9 mr-9'>
                <div className= "dark:bg-slate-600 bg-gray-200 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl hover:scale-105 duration-300">
                    <div className='flex justify-between'>
                        <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
                            <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            </svg>
                        </span>
                    </div>
                    <h3 className=" mt-5 text-base font-medium tracking-tight dark:text-white">Writes Upside-Down</h3>
                    <p className=" text-slate-400 mt-2 text-sm">
                        The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
                    </p>
                </div>
                <div className= "dark:bg-slate-600 bg-gray-200 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl hover:scale-105 duration-300">
                    <div className="flex justify-between">
                        <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
                            <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            </svg>
                        </span>
                    </div>
                    <h3 className=" mt-5 text-base font-medium tracking-tight dark:text-white">Writes Upside-Down</h3>
                    <p className=" text-slate-400 mt-2 text-sm">
                        The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
                    </p>
                </div>
                <div className= "dark:bg-slate-600 bg-gray-200 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl hover:scale-105 duration-300">
                    <div className="flex justify-between">
                        <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
                            <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            </svg>
                        </span>
                    </div>
                    <h3 className=" mt-5 text-base font-medium tracking-tight dark:text-white">Writes Upside-Down</h3>
                    <p className=" text-slate-400 mt-2 text-sm">
                        The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
                    </p>
                </div>
                <div className= "dark:bg-slate-600 bg-gray-200 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl hover:scale-105 duration-300">
                    <div className="flex justify-between">
                        <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
                            <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            </svg>
                        </span>
                    </div>
                    <h3 className=" mt-5 text-base font-medium tracking-tight dark:text-white">Writes Upside-Down</h3>
                    <p className=" text-slate-400 mt-2 text-sm">
                        The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
