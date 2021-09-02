import React from 'react'
// import { Link } from 'react-router-dom'
// import { indexCopies } from '../../api/copies'
import { Card } from 'react-bootstrap'
// import { showCopy } from '../../api/copies'

const CopyCard = props => {
//   const [copy, setCopy] = useState(props.copy)
  const { copy } = props

  if (!copy) {
    return <h5>Loading...</h5>
  }

  return (
    <Card key={copy.id} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={copy.book.image}/>
      <Card.Body>
        <Card.Title>{copy.book.title}</Card.Title>
        <Card.Text>{copy.book.author}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default CopyCard
