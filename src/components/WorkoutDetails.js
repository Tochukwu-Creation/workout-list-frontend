import { useWorkoutsContext } from "../hooks/useWorkoutContext"

//date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const WorkoutDetails = ({workout}) => {
  const { dispatch } = useWorkoutsContext()

  const handleClick = async () => {
    const reponse = await fetch('/api/workouts/' + workout._id, {
      method: 'DELETE'
    })
    const json = await reponse.json()
    //console.log(workout._id);
    if (reponse.ok) {
      dispatch({type: 'DELETE_WORKOUT', payload: json})
    }
  }
  return (
    <div className="workout-details">
        <h4>{workout.title}</h4>
        <p><strong>Load (kg): </strong>{workout.load}</p>
        <p><strong>Reps: </strong>{workout.reps}</p>
        <p>{formatDistanceToNow(new Date(workout.createdAt), {addSuffix: true})}</p>
        <span className="material-symbols-outlined" onClick={handleClick}>Delete</span>
    </div>
  )
}

export default WorkoutDetails