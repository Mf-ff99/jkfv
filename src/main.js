import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home/home'
import About from './components/about/about'
import Contact from './components/contact/contact'

export default function Main() {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
        </Switch>   
    )
}