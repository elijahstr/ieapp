import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Components/User/Home';
import About from './Components/User/About';
import IE352 from './Components/User/Coursework/IE352';
import IE290 from './Components/User/Coursework/IE290';
import Fahr from './Components/User/Experiences/Fahr';
import Admin from './Components/Admin/Admin';
import Dashboard from './Components/Admin/Dashboard';
import CourseCard from './Components/CourseCard'
import Contact from './Components/User/Contact'
import EmailForm from './Components/User/EmailForm'

export default (
    <Switch>
       <Route exact path = '/' component={Home}/> 
       <Route path = '/about' component={About}/>
       <Route path = '/contact' component={Contact}/>
       {/* <Route path = '/email' component={EmailForm}/> */}
       <Route path = '/coursework/352' component={IE352}/> 
       <Route path = '/coursework/290' component={IE290}/> 
       <Route path = '/experiences/fahr' component={Fahr}/>
       <Route exact path = '/admin' component={Admin}/> 
       <Route path = '/admin/dashboard' component={Dashboard}/>
       <Route path = '/admin/coursecard' component={CourseCard}/>
    </Switch>
)