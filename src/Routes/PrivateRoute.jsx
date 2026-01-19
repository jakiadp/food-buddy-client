import { use } from "react";
import { AuthContext } from "../Contexts/AuthContext/Authcontext";
import { Navigate, useLocation } from "react-router";


const PrivateRoute = ({children}) => {

     
    const {user,loading}  = use(AuthContext);
    const Location = useLocation();


    if(loading){
        return <span className="loading loading-spinner loading-xl"></span>
    }

    if(!user){
       return<Navigate to="/login" state={location.pathname} ></Navigate>
    }

    return children;
};

export default PrivateRoute;