import { useSelector } from "react-redux"
import { RootState } from "../app/store"

const TaskList = () => {

  const tasks = useSelector( (state: RootState) => state.tasks );
  
  return (
    <div>
      {
        tasks.map( task => (
          <div key={task.id}>
            <h2>{ task.title }</h2>
            <p>{ task.description }</p>
          </div>
        ))
      }
    </div>
  )
}
export default TaskList