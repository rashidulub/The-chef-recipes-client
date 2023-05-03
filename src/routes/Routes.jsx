import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layoutes/Main";

import Category from "../pages/Home/Category/Category";
import VewRecipesLayoutes from "../layoutes/VewRecipesLayoutes";
import VewRecipe from "../pages/VewRecipe/VewRecipe/VewRecipe";
import LoginLayouts from "../layoutes/LoginLayouts";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";

const router = createBrowserRouter([
    {
        path:'/',
        element:<LoginLayouts></LoginLayouts>,
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
        ]

    },
    {
        path:'category',
        element:<Main></Main>,
        children:[
            
            {
                path:':id',
                element:<Category></Category>,
                loader: ({params})=> fetch(`http://localhost:5000/categories/${params.id}`)
            }
        ]
    },
    {
        path:'view',
        element:<VewRecipesLayoutes></VewRecipesLayoutes>,
        children:[
            {
                path:':id',
                element:<VewRecipe></VewRecipe>,
                loader:({params})=> fetch(`http://localhost:5000/chef/${params.id}`)


            }
        ]
    }
])


export default router;