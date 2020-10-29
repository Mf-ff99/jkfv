import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home/home'

export default function Main() {
    return (
        <Switch>
            <Route path='/' component={Home} />
            
        </Switch>   
    )
}