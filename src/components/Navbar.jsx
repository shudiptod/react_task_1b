import React from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../authContext';
import logoutIcon from '../media/icon_logout.png';
const Navbar = () => {
    const { dispatch } = React.useContext(AuthContext);
    const navigate = useNavigate();
    const logOut = () => {
        dispatch({
            type: "LOGOUT"
        });
        navigate("/admin/login");
    };
    return (
        <div className="w-3/4 flex justify-between items-center mb-16 mt-5">
            <h1 className="text-white font-bold" >APP</h1>
            <button onClick={logOut}
                className="px-5 py-2 bg-lime-400 text-lg text-black border font-thin rounded-full 
            flex justify-between items-center">
                <img src={logoutIcon} alt="logout" className="w-5 h-5 mt-1" />
                Logout</button>
        </div>
    );
};

export default Navbar;