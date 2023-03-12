import axios from 'axios';

  function getData(url){
    return axios.post(url)
    .then(res=>res.data)
    .catch(err=>{console.log(err)
    return err
    })
  }
  
  export default getData;