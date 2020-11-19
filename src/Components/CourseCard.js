import React, {useState, useEffect} from 'react'
import { Button, Card, Container, Form } from 'react-bootstrap';
import axios from 'axios'

function CourseCard(props) {
    const [edit, setEdit] = useState(false),
    [title, setTitle] = useState(''),
    [desc, setDesc] = useState(''),
    [post, setPost] = useState({})

    useEffect(() => {
        let stopCall = false;
        if(!stopCall){
            axios.get(`/api/course/1`)
            //CHANGE 1 to PROPS WHEN DONE
            .then(res => {
                setPost(res.data[0]);
            });
        }
        return () => stopCall = true;
    });

    useEffect(()=>{
        setTitle(post.title)
        setDesc(post.description)
    }, [post.title, post.description])

    return (
        <div>
            {edit ?
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
                    <Button onClick={() => setEdit(false)}>Update</Button>
                    <Button>Delete</Button>
                </Form>
            </Container> 
            : 
            <Container>
              <Card>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{desc}</Card.Text>
                    <Button onClick={() => setEdit(true)}>Edit</Button>
                </Card.Body>
              </Card>
            </Container>}
        </div>
    )
}

export default CourseCard
