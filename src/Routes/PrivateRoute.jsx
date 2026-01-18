import { use } from "react";
import { AuthContext } from "../Contexts/AuthContext/Authcontext";
import { Navigate } from "react-router";


const PrivateRoute = ({children}) => {
     
    const {user}  = use(AuthContext);

    if(!user){
        <Navigate to={"/signIn"}>

        </Navigate>
    }

    return children;
};

export default PrivateRoute;