import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layoutes/Main";

import Category from "../pages/Home/Category/Category";
import VewRecipesLayoutes from "../layoutes/VewRecipesLayoutes";
import VewRecipe from "../pages/VewRecipe/VewRecipe/VewRecipe";
import LoginLayouts from "../layoutes/LoginLayouts";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Blog from "../pages/Blog/Blog";

const router = createBrowserRouter([
    {
        path:'/',
        element:<LoginLayouts></LoginLayouts>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Navigate to='/category/0'></Navigate>

            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'register',
                element:<Register></Register>
            }
            ,{
                path:'/error',
                element:<ErrorPage></ErrorPage>

            },
            {
                path:'/blog',
                element:<Blog></Blog>
            }

        ]

    },
    {
        path:'category',
        element:<Main></Main>,
        
        children:[
            
            {
                path:':id',
                element:<Category></Category>,
                loader: ({params})=> fetch(`https://the-chef-recipes-server-rashidulub.vercel.app/categories/${params.id}`)
            }
        ]
    },
    {
        path:'view',
        element:<PrivateRoutes><VewRecipesLayoutes></VewRecipesLayoutes></PrivateRoutes>,
        children:[
            {
                path:':id',
                element:<VewRecipe></VewRecipe>,
                loader:({params})=> fetch(`https://the-chef-recipes-server-rashidulub.vercel.app/chef/${params.id}`)


            }
        ]
    }
])


export default router;