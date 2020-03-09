import React from 'react'
import './Linear.css'

class Linear extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tries: null
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    let searchFor = e.target.searchFor.value
    let searchIn = e.target.searchIn.value

    searchIn = searchIn.split(' ')

    searchIn = searchIn.sort()

    function search(array, value) {
      let counter = 0
      indexOf(array, value)
      function indexOf(array, value) {
        for (let i = 0; i < array.length; i++) {
          counter ++
            if (array[i] == value) {
                return i;
            }
        }
        return -1;
    };
      return counter
    }

    let response = search(searchIn, searchFor)
    this.setState({
      tries: response
    })
  }

  render() {
    return(
      <div className='Linear'>
        <h1>Linear Search</h1>
        <form onSubmit={e => this.handleSubmit(e)}>
          <p>Search for:</p>
          <input type='text' id='serchFor' name='searchFor' />
          <p>Search in:</p>
          <textarea id='searchIn' name='searchIn' /><br />
          <button type='submit'>Search!</button>
        </form>
        {this.state.tries ? <p>This search took {this.state.tries} tries.</p> : null}
      </div>
    )
  }
}

export default Linear