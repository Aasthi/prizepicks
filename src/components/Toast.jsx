import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch, useSelector } from "react-redux";
import { tabAction } from '../app/slices/currentTabSlice';

import 'react-toastify/dist/ReactToastify.css'; 

export default function App(){

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
