import { createBrowserRouter } from "react-router-dom";
import Main from "../layoutes/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Category/Category";
import VewRecipesLayoutes from "../layoutes/VewRecipesLayoutes";
import VewRecipe from "../pages/VewRecipe/VewRecipe/VewRecipe";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/category/:id',
                element:<Category></Category>
            }
        ]
    },
    {
        path:'vew',
        element:<VewRecipesLayoutes></VewRecipesLayoutes>,
        children:[
            {
                path:':id',
                element:<VewRecipe></VewRecipe>


            }
        ]
    }
])


export default router;