import React from 'react'
import './Binary.css'

class Binary extends React.Component {
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
      binarySearch(array, value)
      function binarySearch(array, value, start, end) {
        var start = start === undefined ? 0 : start;
        var end = end === undefined ? array.length : end;
        
        counter ++
        if (start > end) {
            return -1;
        }
    
        const index = Math.floor((start + end) / 2);
        const item = array[index];
    
        console.log(start, end);
        if (item == value) {
            return index;
        }
        else if (item < value) {
            return binarySearch(array, value, index + 1, end);
        }
        else if (item > value) {
            return binarySearch(array, value, start, index - 1);
        }
      }
      return counter
    }

    let response = search(searchIn, searchFor)
    this.setState({
      tries: response
    })
  }

  render() {
    return(
      <div className='Binary'>
        <h1>Binary Search</h1>
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

export default Binary