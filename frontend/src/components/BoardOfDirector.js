import React from 'react'
import { Card, Image } from 'react-bootstrap'

const BoardOfDirector = ({ BoardOfDirectorItem }) => {
  return (
    <Card className='border-0 m-1'>
      <Image src={BoardOfDirectorItem.image} alt={BoardOfDirectorItem.name} />
      <Card.Body>
        <Card.Title as='h3'>{BoardOfDirectorItem.name}</Card.Title>
        <Card.Text as='h5'>
          <strong> Designation: </strong>
          {BoardOfDirectorItem.designation}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default BoardOfDirector
