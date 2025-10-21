import { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Contexts/AuthContext/Authcontext";


const Register = () => {
  
const {createUser} = use(AuthContext)

const handleRegister = e =>{
  e.preventDefault() ;
  const form = e.target;
  const name = form.name.value;
  const email = form.email.value;
  const photo = form.photo.value;
  const password = form.password.value;
  console.log(name, email, password, photo);

// createuser

createUser(email, password)
.then(result =>{
  console(result.user)
})
  .catch((error) => {
    console.log(error)
    // ..
  });

}

    return (
         <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

        <form onSubmit={handleRegister}  className="space-y-4">
          <div>
            <label className="block text-start text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Your name"
             
              required
            />
          </div>

          <div>
            <label className="text-start block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="you@example.com"
              
              required
            />
          </div>

          <div>
            <label className=" text-start block text-sm font-medium text-gray-700">Photo URL</label>
            <input
              type="text"
              name="photo"
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="https://your-photo.com/img.jpg"
             
              required
            />
          </div>

          <div>
            <label className="text-start block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Password"
              
              
              required
            />
          </div>

          

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-200"
          >
            Register
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          Already have an account?
          <Link to="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
    );
};

export default Register;