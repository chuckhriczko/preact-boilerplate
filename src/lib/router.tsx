//Framework
import { Switch, Route } from "wouter";

//Pages
import PageHome from "../pages/home";

//Error Pages
import Error404 from "../pages/errors/error404";
import PageNotHome from '../pages/notHome';

/**
 * Routes go here
 */
const AppRoutes = () => (
        <Switch>
            <Route path="/" component={PageHome} />
            <Route path="/notHome" component={PageNotHome} />

            {/* 404 */}
            <Route path="/notfound" component={Error404} />
            <Route component={Error404} />
        </Switch>
    );
export default AppRoutes;