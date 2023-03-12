import axios from 'axios';
const jwtProvider = (user) => {
    
  axios
    .post('https://help-bangla-server.vercel.app/jwt', { email: user?.email })
    .then((res) => {
      if (res.data) {
        localStorage.setItem('token', res.data.token);
      }
      return res.data;
    })
    .catch((err) => console.error(err));
};

export default jwtProvider