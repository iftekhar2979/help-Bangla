import axios from 'axios';

  function getData(url){
    return axios.get(url)
    .then(res=>res.data)
    .catch(err=>{console.log(err)
    return err
    })
  }
  
  export default getData;