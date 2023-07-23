 import {useEffect, useState} from 'react'
import { getTasks } from '../server/tasks'
import TaskList from '../components/TaskList'
import Nabvar from '../components/Nabvar'
 
 const Homepage = () => {

  const [tasks, settasks] = useState([])

  useEffect(() => {
    const fetchTask = async () => {
      const { data } = await getTasks()
      settasks(data)
    }
    fetchTask()
  }, [])

   return (
    <>
      <TaskList tasks={tasks} />
    </>
     
   )
 }
 
 export default Homepage