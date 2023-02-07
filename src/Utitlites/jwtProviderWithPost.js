import axios from 'axios';
const jwtProvider = (user) => {
    
  axios
    .post('http://localhost:8000/jwt', { email: user?.email })
    .then((res) => {
      if (res.data) {
        localStorage.setItem('token', res.data.token);
      }
      return res.data;
    })
    .catch((err) => console.error(err));
};

export default jwtProvider