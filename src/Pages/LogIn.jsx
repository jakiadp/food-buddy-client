import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Contexts/AuthContext/Authcontext';
import Swal from 'sweetalert2';

const LogIn = () => {
const {logInUser} = use(AuthContext);
const location = useLocation();
const navigate = useNavigate();
const from = location.state || '/' ;



const handleLogIn = e => {
  e.preventDefault();
  const form = e.target;

  const email = form.email.value;
  const password = form.password.value;

  console.log(email, password);

  // signIn
  logInUser(email, password)
    .then(result => {
      console.log(result.user);
      navigate(from);

      // Show success alert
      Swal.fire({
        title: 'Login Successful!',
        text: `Welcome back, ${result.user.email}`,
        icon: 'success',
        confirmButtonText: 'OK'
      });

      // Optionally reset form or redirect user here
      form.reset();
    })
    .catch(error => {
      console.log(error);

      // Show error alert
      Swal.fire({
        title: 'Login Failed',
        text: error.message,
        icon: 'error',
        confirmButtonText: 'Try Again'
      });
    });
};



    return (
                <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10  bg-gray-50  text-gray-800">
	<div className="mb-8 text-center">
		<h1 className="my-3 text-4xl font-bold">Log in</h1>
		<p className="text-sm  text-gray-600">Sign in to access your account</p>
	</div>
	<form onSubmit={handleLogIn} noValidate="" action="" className="space-y-12">
		<div className="space-y-4">
			<div>
				<label htmlFor="email" className="block mb-2 text-sm text-start">Email address</label>
				<input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md  border-gray-300  bg-gray-50  text-gray-800" />
			</div>
			<div>
				<div className="flex justify-between mb-2">
					<label htmlFor="password" className="text-sm">Password</label>
					<a rel="noopener noreferrer" href="#" className="text-xs hover:underline  text-gray-600">Forgot password?</a>
				</div>
				<input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md  border-gray-300  bg-gray-50  text-gray-800" />
			</div>
		</div>
		<div className="space-y-2">
			<div>
				<button  type="submit"
				className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-200">
					Sign in</button>
			</div>
			

				<p className="px-6 text-sm text-center text-gray-600">
  Don't have an account yet?{' '}
  <Link to='/register' className='text-blue-500 hover:underline'>
    Register
  </Link>.
</p>
.
		
		</div>
	</form>
</div>
    </div>
    );
};

export default LogIn;