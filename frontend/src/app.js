import React, {useState, useEffect} from 'react'
import "./app.scss"
import { FaCheck, FaPlus, FaTimes } from "react-icons/fa";
import Books from "./books/Books.tsx"
import axios from 'axios'


const App = () => {
    const [taskList, setTaskList] = useState([])
    const [newTask, setNewTask] = useState({
        'description' : "",
        'completed' : false
    })

    const [bookList, setBookList] = useState([])

    const [selectedTask, setSelectedTask] = useState(null)

    axios.defaults.baseURL = "http://127.0.0.1:8000/api/"

    // Fetch all data
    const fetchData = async () => {
        try {
            const response = await axios.get('todos/');
            const books = await axios.get('books/')
            console.log(books)
            setTaskList(response.data)
            // console.log(response)
        } catch (error) {
            console.error('Error Encountered: ', error)
        }
    }

    useEffect( () => {
        fetchData();
    },[])

    // Fetch Filtered Data
    const fetchFilteredData = async (value) => {
        try {
            const response = await axios.get(`/todos/${value}/filter`);
            setTaskList(response.data)
            // console.log(response)
        } catch (error) {
            console.error('Error Encountered: ', error)
        }
    }

    const handleInputChange = (e) => {
        setNewTask({... newTask, [e.target.name]: e.target.value})
    }

    const handleInputSelectChange = (e) => {
        setSelectedTask({... selectedTask, [e.target.name]: e.target.value})
    }

    // add new item
    const addNewItem = async () => {
        if (newTask.description === ''){
            console.log("Empty Description")
            return;
        }

        try {
            await axios.post('/books/', {'title': '1q84', 'author': 'murakami', 'isbn': '123124'});
            fetchData();
            setNewTask({
                    'description' : "",
                    'completed' : false
                })
                
        } catch (error) {
            console.error('Error Encountered: ', error)
        }
    }

    const updateItem = async () => {
        try {
            await axios.put(`/todos/${selectedTask.id}/`, selectedTask)
            fetchData();
            setSelectedTask(null)
        } catch (error) {
            console.error('Error Encountered: ', error)
        }
    }

    const toggleCompleted = async (id) => {
        try {
            await axios.patch(`/todos/${id}/toggle/`)
            fetchData();
        } catch (error) {
            console.error('Error Encountered: ', error)
        }
    }

    const deleteItem = async (id) => {
        try {
            await axios.delete(`/todos/${id}`);
            fetchData();
        } catch (error) {
            console.error('Error Encountered: ', error)
        }
    }

  return (
    <Books />
  )
}

export default App