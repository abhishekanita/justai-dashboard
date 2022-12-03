import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Login from 'pages/Login';
import Home from 'pages/Home';
import Finetune from 'pages/Finetune';
import Playground from 'pages/Playground';
// import { StoreProvider } from './store';

function App() {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path = "/" component={Login}/>
                    <Route exact path = "/app" component={Home}/>
                    <Route exact path = "/playground" component={Playground}/>
                    <Route exact path = "/finetune" component={Finetune}/>
                </Switch>
            </Router>
            <div id = 'click-outside'></div>
            <Toaster />
        </>
    );
}

export default App;
