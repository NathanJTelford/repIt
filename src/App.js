import React from 'react';
import './App.css';

class App extends React.Component {
  intervalId = 0
  constructor(props) {
    super(props)
    this.state = {
      timeStamp: 0,
      timer: 0,
      showForm: false,
      exerciseName: '',
      exerciseType: '',
      exercise: [],
      sessionInfo: [],
      timerRunning:true,
      toggleClear:false,
    }
  }

  componentDidMount() {
    const time = new Date()
    this.setState({ timeStamp: time })
  }

  createExercise = async () => {
    const type = await { 
      exerciseName: this.state.exerciseName,
      exerciseType: this.state.exerciseType,
      set: 0,
      reps: 0,
      weight: 0,
      duration: 0
    }
     const newObj = await [...this.state.exercise,type]
    this.setState({exercise:newObj,
      showForm:false
    })
  }

  timer = () => {
    let startTime = Date.now();
    this.intervalId = setInterval(() => {
      let newTime =  Date.now() - startTime
      newTime.toFixed(3)
      this.setState({ timer: newTime/1000})
    }, 100);
    this.setState({toggleClear:false})
  }

  timerStop = () => {
  clearInterval(this.intervalId)
  this.setState({toggleClear:true})
  }

  toggleClear = ()=>{
    this.setState({})
  }


  toggleForm = () => {
    this.setState({ showForm: true })
  }


  render() {
    let gymPlan = this.state.exercise.map((exercise,i)=>{
      return<div key={i}>
        <p>{exercise.exerciseName}</p>
        <p>{exercise.exerciseType}</p>
        <p>Set: {exercise.set} Reps: {exercise.reps}</p>
        <p>Weight: {exercise.weight} Duration: {exercise.duration}</p>

      </div>
    })
    return (
      <div className='wrapper'>
        <h1>Welcome!</h1>
        {/* {day} */}
        <div>
          <button onClick={() => this.toggleForm()} >Add Exercise</button>
        </div>
        {
          this.state.showForm ?
            <div>
              <label htmlFor='exercise-name' >Name:</label>
              <input name='exercise-name' type='text' onChange={(e) => this.setState({ exerciseName: e.target.value })} />
              <label htmlFor='exercise-type' >Type:</label>
              <select name='exercise-type' onChange={(e) => this.setState({ exerciseType: e.target.value })}>
                <option value='null'>Please select type</option>
                <option value='dumbbell'>Dumbbell</option>
                <option value='barbell'>Barbell</option>
                <option value='bodyweight'>BodyWeight</option>
                <option value='machine'>Machine</option>
                <option value='assisted'>Assisted</option>
                <option value='cable'>Cable</option>
              </select>
              <button onClick={() => this.createExercise()}>Next</button>
            </div> :
            null
        }

        <button onClick={() => this.timer()} >Start</button>
        {
          this.state.toggleClear ?
          <button onClick={()=>this.setState({timer:0})} >Clear</button>
          :
          <button onClick={() => this.timerStop()} >Stop</button>
        }
        <div className='timer-box' >
        {this.state.timer}
        </div>
        <div>{gymPlan}</div>

      </div>
    );
  }
}


export default App;
