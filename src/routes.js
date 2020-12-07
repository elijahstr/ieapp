import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Components/User/HomePage/Home';
import About from './Components/User/About';
import IE352 from './Components/User/Coursework/IE352';
import IE290 from './Components/User/Coursework/IE290';
import Contact from './Components/User/Contact/Contact'

export default (
    <Switch>
       <Route exact path = '/' component={Home}/> 
       <Route path = '/about' component={About}/>
       <Route path = '/contact' component={Contact}/>
       <Route path = '/coursework/352' component={IE352}/> 
       <Route path = '/coursework/290' component={IE290}/> 
    </Switch>
)