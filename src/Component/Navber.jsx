import React, { use } from 'react';
import { NavLink } from 'react-router';
import image from '../assets/image/logo.png'
import { AuthContext } from '../Contexts/AuthContext/Authcontext';
import Swal from 'sweetalert2';


const Navbaer = () => {
const {user, logOut} =use(AuthContext);


const handleLogOut = () => {
  Swal.fire({
    title: 'Are you sure?',
    text: "You will be logged out!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',  // "Yes" button
    cancelButtonColor: '#d33',      // "No" button
    confirmButtonText: 'Yes, log out',
    cancelButtonText: 'No, stay logged in'
  }).then((result) => {
    if (result.isConfirmed) {
      logOut()
        .then(() => {
          console.log('Signed out successfully');
          Swal.fire('Logged out!', 'You have been signed out.', 'success');
        })
        .catch(error => {
          console.log(error);
          Swal.fire('Error', 'Something went wrong during logout.', 'error');
        });
    }
  });
};


const link = <>
 
 <NavLink to='/' className='hover:text-orange-500 hover:underline' >Home</NavLink>
 <NavLink to='/about' className='hover:text-orange-500 hover:underline' >About</NavLink>


</>

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm gap-5 dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
         {link}
      </ul>
    </div>
    <div className='flex gap-2'>
        <img src={image} className='bg-orange-600 h-10 w-10 m-2 p-2 rounded-full' alt="" />
        <a className=" text-2xl  font-bold ">FoodBuddy</a>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-5">
     {link}
         </ul>
  </div>
  <div className="navbar-end gap-5">
   {
    user ? <button type='button' onClick={handleLogOut} className='px-6 p-2 text-xl   rounded-md text-white bg-orange-400 hover:bg-orange-500 '>Log Out</button>
    :
    <>
     <NavLink to='/login' > <button type="button" className='px-6 p-2 text-xl   rounded-md text-white bg-orange-400 hover:bg-orange-500 '>Log In</button> </NavLink>
        <NavLink to='/register' > <button type="button" className='px-6 p-2 text-xl  rounded-md text-white bg-orange-400 hover:bg-orange-500'>Sing Up</button> </NavLink>

    </>
   }
</div>

  {/* <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
         */}
</div>
    </div>
  );
};

export default Navbaer;   