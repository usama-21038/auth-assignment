import { createBrowserRouter } from "react-router";
import Root from "./Root/Root";
import Home from "../components/Pages/Home";
import Bills from "../components/Pages/Bills";
import Profile from "../components/Pages/Profile";
import BillDetails from '../BillDetails';

const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[
        {index:true , element:<Home></Home>},
        {path:"/bills" , element: <Bills></Bills>,
            loader:async()=>{
                const response=await fetch("/public/data.json");
                return response.json();
            }
        },
        {path:"/profile" , element: <Profile></Profile>},
        {path:"/bills/:id", element: <BillDetails />,
            loader: async ({ params }) => {
                const response = await fetch("/public/data.json");
                const data = await response.json();
                return data.find(bill => bill.id === parseInt(params.id));
            }
        },
    ]
  },
    {
    path: "/auth",
    element: <div>Authentication</div>,
  },
  {
    path:"/*",
    element: <h1>Error404</h1>
  }
]);

export default router;