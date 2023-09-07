import React from "react";

const FooterWeb = () => {
  return (
    // footer version 1
    // <footer
    //   className="bg-slate-100 rounded-lg drop-shadow-md p-11"
    //   style={{ boxShadow: "5px 0px 4px 4px rgba(0, 0, 0, 0.2)" }}
    // >
    //   <div className="flex justify-evenly items-center">
    //     <div>
    //       <span>
    //         <img
    //           src="https://image.myanimelist.net/ui/bfln5jRa_L37ziNWm-xNvLMzHwAtE6x1JqwQeL5sRWk_KKbjmciOkd_BlbgwFuk7Hj3poa0EZ4gqIMGSJKZjfsMy-BfXYzStsnw34BZN0hA"
    //           alt="image error"
    //         />
    //       </span>
    //     </div>

    //     <div>
    //       <ul>
    //         <li className="text-lg font-semibold">Contact us</li>
    //         <li>
    //           <i className="fa-brands fa-facebook"></i> &nbsp; Facebook
    //         </li>
    //         <li>
    //           <i className="fa-brands fa-instagram"></i> &nbsp; Instagram
    //         </li>
    //         <li>
    //           <i className="fa-brands fa-twitter"></i> &nbsp;Twitter
    //         </li>
    //         <li>
    //           <i className="fa-brands fa-github" ></i> &nbsp; Github
    //         </li>
    //       </ul>
    //     </div>

    //     <div>
    //       <ul>
    //         <li className='text-lg font-semibold'><i className='fa fa-file'></i> &nbsp; Resources</li>
    //         <li className='font-normal'><i className='fa-sharp fa-regular fa-headset'></i>HTML</li>
    //         <li className='font-normal'><i className='fa-sharp fa-regular fa-headset'></i>CSS</li>
    //         <li className='font-normal'><i className='fa-sharp fa-regular fa-headset'></i>Javascript</li>
    //         <li className='font-normal'><i className='fa-sharp fa-regular fa-headset'></i>Framework: Tailwind css</li>
    //       </ul>
    //     </div>
    //   </div>
    // </footer>


    // footer version 2
    <footer className='flex justify-around items-center xs:grid-cols-1 text-slate-400 bg-slate-700 p-8 mt-10'>
       <div>
          <img width='200' height='200' src="https://s.tmimgcdn.com/scr/800x500/212900/spoon-and-fork-restaurant-logo_212966-original.png" alt="image error" />
          <p>
            We are a young company always       
            <br/>looking for new and creative ideas 
            <br/>to help you with our products in
            <br/>your everyday work.  
          </p>
          <p className='text-green-400 pt-4'>Our Team</p>
       </div>
       <div className='leading-10'>
         <h3 className ='italic text-2xl pb-3 text-slate-100 font-bold'>Contact</h3>
         <p className="hover:cursor-pointer hover:text-white hover:animate-bounce"><i className='fa fa-location-dot'></i> &nbsp;Via Rossini 10, 10136 Turin Italy</p>
         <p className="hover:cursor-pointer hover:text-white hover:animate-bounce"><i className='fa fa-phone'></i> &nbsp;Phone: (0039) 333 12 68 347</p>
         <p className="hover:cursor-pointer hover:text-white hover:animate-bounce"><i className="fa fa-envelope"></i> &nbsp;Email: <span className="text-green-500">hello@domain.com</span></p>
         <p className="hover:cursor-pointer hover:text-white hover:animate-bounce"><i className='fa-brands fa-skype'></i> &nbsp;Skype: you_online</p>
       </div>
       <div className='leading-10'>
          <h3 className='italic text-2xl pb-3 text-slate-100 font-bold'>Links</h3>
          <p className="hover:cursor-pointer hover:text-white">Home</p>
          <p className="hover:cursor-pointer hover:text-white">Features</p>
          <p className="hover:cursor-pointer hover:text-white">How it works</p>
          <p className="hover:cursor-pointer hover:text-white">Our clients</p>
       </div>
       <div className='leading-10'>
          <h3></h3>
          <p className="hover:cursor-pointer hover:text-white">Plans & Pricing</p>
          <p className="hover:cursor-pointer hover:text-white">Affiliates</p>
          <p className="hover:cursor-pointer hover:text-white">Terms</p>
       </div>
    </footer>
  );
};

export default FooterWeb;
