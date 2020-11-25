import React, {useState, useEffect} from 'react'
import { Container, Card, Button, Form } from 'react-bootstrap'
import axios from 'axios'
import {getAdmin, clearAdmin} from '../../redux/reducer';
import {connect} from 'react-redux';

function Dashboard(props) {
    const [exp, setExp] = useState([]),
    [course, setCourse] = useState([]),
    [newCourse, setNewCourse] = useState(false),
    [newExp, setNewExp] = useState(false),
    [title, setTitle] = useState(''),
    [desc, setDesc] = useState('');

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

  const createCourse = () => {
    axios.post('/api/course', {title, desc})
    setNewCourse(false);
  };

  const logout = () => {
    axios.post('/auth/logout')
    .then(()=>{
        clearAdmin();
        props.history.push('/admin');
    })
    };

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
            {newCourse?
            <Container>
             <Form>
             <Form.Group>
                 <Form.Label>Course Title</Form.Label>
                 <Form.Control 
                 value={title}
                 onChange={e=>setTitle(e.target.value)}
                 type='text'
                 />
             </Form.Group>
             <Form.Group>
                 <Form.Label>Description</Form.Label>
                 <Form.Control as='textarea' rows='5' 
                 value={desc}
                 onChange={e=>setDesc(e.target.value)}
                 type='text'
                 />
             </Form.Group>
             <Button onClick={() => createCourse()}>Add</Button>
             </Form>
             </Container> 
            :
            <> 
            <Container>
                <Button onClick={()=>setNewCourse(true)}>New Course</Button>
            </Container>
            <Container>
            <Button onClick={()=>setNewExp(true)}>New Experience</Button>
            </Container>
            </>}
            <Button onClick={()=>logout()}>Logout</Button>
            
        </div>
    )
}

const mapStateToProps = reduxState => reduxState;
export default connect(mapStateToProps, {getAdmin})(Dashboard);
