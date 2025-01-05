import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../components/Home";
import ProjectDetails from "../components/ProjectDetails";
import Project2Details from "../components/Project2Details";
import Project3Details from "../components/Project3Details";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/projectDetails',
                element: <ProjectDetails></ProjectDetails>
            },
            {
                path: '/project2Details',
                element: <Project2Details></Project2Details>
            },
            {
                path: '/project3Details',
                element: <Project3Details></Project3Details>
            },
            
        ]
    }
])

export default router;