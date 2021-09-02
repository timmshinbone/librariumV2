
import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import { indexCopies } from '../../api/copies'
import CopyCard from './CopyCard'

class CopyIndex extends Component {
  constructor (props) {
    super(props)

    this.state = {
      copies: null
    }
  }

    cardContainerLayout = {
      display: 'flex',
      justifyContent: 'center',
      flexFlow: 'row wrap'
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

      let copyCards
      if (copies.length === 0) {
        copyCards = <p>No copies, go add some</p>
      } else {
        copyCards = copies.map((copy) => (
        // <li key={copy.id}>
        //   <Link to={`/copies/${copy.id}`}>{copy.book.title}</Link>
        // </li>
          <CopyCard key={copy.id} user={this.props.user} copy={copy}/>
        ))
      }

      return (
        <div style={ this.cardContainerLayout }>
          { copyCards }
        </div>
      )
    }
}

export default CopyIndex
