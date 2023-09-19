import { Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Loader from "common/Spinner/Loader";


const PublicRoutes = ({ 
    component: Component,
    isAuthenticated,
    layout: Layout = MainLayout,
    dependenciesLoaded,
    preload,
    redirect,
    ...rest 
}) => {

    return (
        <Route
            {...rest}
            render={(props) =>
                <Layout>
                    {preload ? <Component {...props} /> : dependenciesLoaded ? <Component {...props} /> : <Loader />} 
                </Layout> 
            }
        />
    )
}

export default PublicRoutes