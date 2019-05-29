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
    }
  }

  componentDidMount() {
    const time = new Date()
    this.setState({ timeStamp: time })
  }

  createExercise = () => {
    this.setState({
      exercise: {
        exerciseName: this.state.exerciseName,
        exerciseType: this.state.exerciseType,
        set: 0,
        reps: 0,
        weight: 0,
        duration: 0
      },
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
  }

  timerStop = () => {
  clearInterval(this.intervalId)
  }


  toggleForm = () => {
    this.setState({ showForm: true })
  }


  render() {
    console.log(this.state.timeStamp)
    // const day = this.state.timeStamp.getDay()
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
        <button onClick={() => this.timerStop()} >Stop</button>
        <div className='timer-box' >
        {this.state.timer}
        </div>


      </div>
    );
  }
}


export default App;
