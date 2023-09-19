import { Route, Redirect, useLocation } from "react-router-dom";
import { useHistory } from "react-router";
import MainLayout from "layouts/MainLayout";
import LogoLoader from "common/Spinner/LogoLoader";


const PrivateRoute = ({
    component: Component,
	roles = [],
    isAuthenticated,
    layout: Layout = MainLayout,
    dependenciesLoaded,
    preload,
	...rest
}) => {
    const location = useLocation();
    const { push } = useHistory();

    const checkGroup = () => {
        return true
    }

    const redirectHome = () => {
        push({ pathname: '/', state: { from: location } })
    }

    
	return isAuthenticated ? (
		<Route
			{...rest}
            render={(props) =>
                checkGroup() ? (
                    <Layout>
                        {preload ? <Component {...props} /> : dependenciesLoaded ? <Component {...props} /> : <LogoLoader />} 
                    </Layout>
                ) : (
                    redirectHome()
                )
			}
		/>
	) : (
		<Redirect
			to={{
				pathname: "/login",
				state: { from: location },
			}}
		/>
	);
};


export default PrivateRoute;
