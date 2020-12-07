require('dotenv').config();
const {SERVER_PORT, SESSION_SECRET} = process.env;
const express = require('express');
const session = require('express-session');
const ctrl = require('./controller');
const adminCtrl = require('./adminController');
const emailCtrl = require('./emailController');
const path = require('path');
const app = express();
app.use(express.json());

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {maxAge: 1000*60*60*24*365}
}));

//ENDPOINTS HERE:
// app.get('/api/experiences', ctrl.getAllExperiences)
// app.get('/api/coursework', ctrl.getAllCoursework)
// app.get('/api/exp/:id', ctrl.getExp)
// app.get('/api/course/:id', ctrl.getCourse)
// app.put('/api/exp/:id', ctrl.editExp)
// app.put('/api/course/:id', ctrl.editCourse)
// app.post('/api/exp', ctrl.newExp)
// app.post('/api/course', ctrl.newCourse)
// app.delete('/api/exp/:id', ctrl.deleteExp)
// app.delete('/api/course/:id', ctrl.deleteCourse)


// app.post('/auth/login', adminCtrl.login)
// app.post('/auth/register', adminCtrl.newAdmin);
// app.post('/auth/logout', adminCtrl.logout);

app.post('/api/email', emailCtrl.email);

app.use(express.static(__dirname + '/../build'))
app.get('*', (req, res) =>{
    res.sendFile(path.join(__dirname, '../build/index.html'))
})


app.listen(SERVER_PORT, () => console.log(`Server is running on ${SERVER_PORT}`));