import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import React, { useMemo, Suspense } from "react"
import routes from "./routes";
import PublicRoute from "./public";
import PrivateRoute from "./private";
import MainLayout from "../layouts/MainLayout";
import MyCourses from "modules/web/pages/MyCourses/MyCourses";
import ErrorPage from "modules/web/pages/ErrorPage/ErrorPage";
import ErrorHandler from "common/ErrorHandler/ErrorHandler";
import Loader from "common/Spinner/Loader";
import LayoutUtilities from "layouts/utilities/LayoutUtilities";


function Routes () {

    const renderRoutes = useMemo(() =>
        routes.map((route, index) =>
            route.redirect ? (
                <Redirect
                    key={index}
                    from={route.path}
                    to={route.redirect}
                    {...route}
                />
            ) : route.auth ? (
                <PrivateRoute
                    key={index}
                    isAuthenticated={true}
                    dependenciesLoaded={true}
                    preload={false}
                    {...route}
                />
            ) : (
                <PublicRoute
                    key={index}
                    isAuthenticated={true}
                    dependenciesLoaded={true}
                    preload={true}
                    {...route}
                />
            )
        ), []
    )


    return(
        <Router>
            <ErrorHandler>
                <Suspense fallback={<Loader />}>
                    <LayoutUtilities/>
                    <Switch>
                        <PublicRoute
                            layout={MainLayout}
                            path="/"
                            exact
                            component={MyCourses}
                            preload
                        />
                        <PublicRoute
                            layout={MainLayout}
                            path="/index"
                            exact
                            component={MyCourses}
                            preload
                        />
                        {renderRoutes}
                        <PublicRoute
                            layout={MainLayout}
                            path="*"
                            component={ErrorPage}
                            preload
                        />  
                    </Switch>
                </Suspense>
            </ErrorHandler>
		</Router>
    )
}

export default Routes