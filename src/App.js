import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from "./routes/Home";

function App(){
    return (
    <Router>
        <Switch path="/movie">
            <Route>
                <Detail />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    </Router>)
} 
export default App;





