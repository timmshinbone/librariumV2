
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { indexCopies } from '../../api/copies'

class CopyIndex extends Component {
  constructor (props) {
    super(props)

    this.state = {
      copies: null
    }
  }

  componentDidMount () {
    const { user, msgAlert } = this.props
    indexCopies(user)
      .then((res) => this.setState({ copies: res.data.copies }))
      .then(() =>
        msgAlert({
          heading: 'Index success',
          message: 'Here\'s the copies',
          variant: 'success'
        })
      )
      .catch((err) =>
        msgAlert({
          heading: 'Index failed :(',
          message: 'Something went wrong: ' + err.message,
          variant: 'danger'
        })
      )
  }

  render () {
    const { copies } = this.state
    console.log('this is copies', copies)

    if (copies === null) {
      return 'Loading...'
    }

    let copiesJsx
    if (copies.length === 0) {
      copiesJsx = 'No copies, go add some'
    } else {
      copiesJsx = copies.map((copy) => (
        <li key={copy.id}>
          <Link to={`/copies/${copy.id}`}>{copy.book.title}</Link>
        </li>
      ))
    }

    return (
      <div>

        <h6>All Copies</h6>
        {copiesJsx}
      </div>
    )
  }
}

export default CopyIndex
