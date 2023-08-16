
const token = localStorage.getItem('token');

axios.interceptors.response.use(function (response) {
  // Do something with response data
  if(response.status == 401){
    localStorage.clear();
    window.location.replace('app-login.html')
  }
  return response;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});
var api = axios.create({
  baseURL: 'https://app.tejarra.ly/delivery_api/',
  headers: {'Authorization': 'Bearer ' + token },
})



export default api