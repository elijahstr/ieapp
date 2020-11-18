import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Components/User/Home';
import About from './Components/User/About';
import IE352 from './Components/User/Coursework/IE352';
import IE290 from './Components/User/Coursework/IE290';
import Fahr from './Components/User/Experiences/Fahr';
import Admin from './Components/Admin/Admin';
import Dashboard from './Components/Admin/Dashboard';

export default (
    <Switch>
       <Route exact path = '/' component={Home}/> 
       <Route path = '/about' component={About}/>
       <Route path = '/coursework/352' component={IE352}/> 
       <Route path = '/coursework/290' component={IE290}/> 
       <Route path = '/experiences/fahr' component={Fahr}/>
       <Route exact path = '/admin' component={Admin}/> 
       <Route path = '/admin/dashboard' component={Dashboard}/>
    </Switch>
)