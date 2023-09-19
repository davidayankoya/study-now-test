import  { lazy } from 'react'
import MainLayout from 'layouts/MainLayout';


const MyCourses = lazy(() => import("./pages/MyCourses/MyCourses"))

const routes = [
    {
        path: "/my-courses",
        component: MyCourses,
        exact: true,
        auth: false,
        layout: MainLayout,
    },
]

export default routes