import React, {useState, useEffect} from 'react'
import { Container, Card, Button } from 'react-bootstrap'
import axios from 'axios'

function Dashboard() {
    const [exp, setExp] = useState([]),
    [course, setCourse] = useState([]);

    useEffect(() => {
        let stopCall = false;
        if(!stopCall){
            axios.get('/api/experiences')
            .then(res => {
                setExp(res.data)
            });
        }

        return () => stopCall = true;
    });

    useEffect(() => {
      let stopCall = false;
      if(!stopCall){
          axios.get('/api/coursework')
          .then(res => {
              setCourse(res.data)
          });
      }

      return () => stopCall = true;
  });

    const mappedExp = exp.map((data, i) => (
        <div key={i}>
            <Container>
              <Card>
                <Card.Body>
                    <Card.Title>{data.title}</Card.Title>
                    <Card.Text>{data.description}</Card.Text>
                </Card.Body>
              </Card>
            </Container>
        </div>
    ))

    const mappedCourse = course.map((data, i) => (
      <div key={i}>
          <Container>
            <Card>
              <Card.Body>
                <Card.Title>{data.title}</Card.Title>
                <Card.Text>{data.description}</Card.Text>
              </Card.Body>
            </Card>
          </Container>
      </div>
  ))
    return (
        <div>
            <Container className='text-center'>
                <h1>Welcome Admin</h1>
            </Container>
            <Container>
                {mappedExp}
                {mappedCourse}
            </Container>
        </div>
    )
}

export default Dashboard
