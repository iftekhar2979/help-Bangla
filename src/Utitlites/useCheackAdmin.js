import axios from 'axios';
import { useEffect, useState } from 'react';

const useCheackAdmin = (email) => {
   const [isAdmin,setAdmin]=useState()
   const [isloading,setisLoading]=useState(false)
   const [error,setError]=useState()
   useEffect(()=>{
    setisLoading(true)
    axios.get(`http://localhost:8000/findAdmin?email=${email}`)
    .then(res=>{
        console.log(res.data.isAdmin)
        setAdmin(res.data.isAdmin)})
    .catch(error=>setError(error))
   },[email])
   return {isAdmin,error,isloading}
};

export default useCheackAdmin;