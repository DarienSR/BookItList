import axios from 'axios'
axios.defaults.baseURL = "http://127.0.0.1:8000/api/"

const fetchData = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch(error) {
    console.error("Error Fetching Data: ", error)
    return error;
  }
} 

const postData = async (url, data) => {
  try {
    const response = await axios.post(url, data)
    return response.data
  } catch(error) {
    console.error("Error Fetching Data: ", error)
    return error;
  }
}

export {
  fetchData,
  postData
}