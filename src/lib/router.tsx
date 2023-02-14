//Framework
import { Switch, Route } from "wouter";

//Pages
import PageHome from "../pages/home";

//Error Pages
import Error404 from "../pages/errors/error404";

/**
 * Routes go here
 */
const AppRoutes = () => (
        <Switch>
            <Route path="/" component={PageHome} />

            {/* 404 */}
            <Route path="/notfound" component={Error404} />
            <Route component={Error404} />
        </Switch>
    );
export default AppRoutes;