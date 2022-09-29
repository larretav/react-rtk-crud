import { useState } from "react"
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasks/taskSlice";
import { v4 as uuid } from "uuid";


const TaskForm = () => {

  const [task, setTask] = useState({
    title: '',
    description: ''
  });

  const dispatch = useDispatch();

  const handleChange = ( e: React.ChangeEvent<any> ) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = ( e: React.FormEvent<HTMLFormElement> ) => {
    e.preventDefault();
    dispatch( addTask({
      ...task,
      id: uuid()
    }) );
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name='title' type="text" placeholder="title" onChange={handleChange}/>
      <textarea name="description" placeholder="Descripción" onChange={handleChange}></textarea>

      <input type="submit" value="Save" />
    </form>
  )
}
export default TaskForm