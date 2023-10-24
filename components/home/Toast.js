import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useSelector } from "react-redux";

import 'react-toastify/dist/ReactToastify.css'; 

export default function Toast(){

    const message = useSelector((state) => state.currentTabSlice.message);
  
    const notify = () => {
        if(message === true){
             
            toast("Success message!");
        } else {
            toast.warn("Warning message!");
        }
    }
  
    return (
        <div>
            <button onClick={notify} className='text-white'>Notify !</button>
            <ToastContainer />
        </div>
    );
}
