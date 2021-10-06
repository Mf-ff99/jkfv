import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home/home'
import About from './components/about/about'
import Contact from './components/contact/contact'
import Work from './components/work/work'
import Tools from './components/tools/tools'
import ScrollToTop  from './components/Utils/ScrollToTop'
import NotFound from './components/404NotFoundPage/NotFound'
import JordyKlein from './components/JordyKlein/JordyKlein'
import Stream from './components/VimeoStream/stream'

export default function Main() {
    return (
        <>
            <ScrollToTop />
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/work' component={Work} />
            <Route path='/jordy-klein' component={JordyKlein} />
            <Route path='/tools' component={Tools} />
            <Route path='/stream' component={Stream} />
            <Route component={NotFound} />
        </Switch>   
        </>
    )
}