import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Header from './Header'
import Container from './Container'

const Routes = () => {
    return(
        <BrowserRouter>
            <Header />
            <Switch>  
                <Route exact path='/' component={Container} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;