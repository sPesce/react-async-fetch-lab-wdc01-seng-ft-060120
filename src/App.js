import React from 'react'
import Person from './Person'
const URL =  'http://api.open-notify.org/astros.json';

class App extends React.Component
{
  state = {people: []}

  render()
  {
    return (
      <ul>
        {this.state.people.map(p => <Person person={p} /> )}
      </ul>
    )
    
  }
  componentDidMount()
  {
    fetch(URL)
    .then(r => r.json())
    .then(json => this.setState({people: json.people}));//
  }

}

export default App;