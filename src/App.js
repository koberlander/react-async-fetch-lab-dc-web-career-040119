import React, {Component} from 'react'

class App extends Component {
  state = {
      peopleInSpace: []
  }

  render() {
    return (
      <div>
        {this.state.peopleInSpace.map((person, id) => <h1 key={id}>{person.name}</h1>)}
      </div>
    )
  }

  componentDidMount(){
    fetch('http://api.open-notify.org/astros.json')
    .then(res => res.json())
    .then(spaceList => {
      this.setState({
        peopleInSpace: spaceList
      })
    })
  }
}


export default App
