import { createRoot } from "react-dom/client";
import "./styles/Main.css"
import App from "./pages/App.jsx";
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'
import HomePage from "./pages/HomePage.jsx";
import Postulaciones from "./pages/Postulaciones.jsx";
import Linkendin from "./pages/Linkendin.jsx";
import Indeead from "./pages/Indeead.jsx";
import Curriculums from "./pages/Curriculums.jsx";
import PostulacionesYovanna from "./pages/PostulacionesYovanna.jsx";


const router =createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<App/>}>
        <Route path="home" element={<HomePage/>}/>
        <Route path="postulaciones" element={<Postulaciones/>}/>
        <Route path="linkendin" element={<Linkendin/>}/>
        <Route path="indead" element={<Indeead/>}/>
        <Route path="curriculums" element={<Curriculums/>}/>
        <Route path="postulaciones-yovanna" element={<PostulacionesYovanna/>}/>


    </Route>
))
createRoot(document.getElementById("root")).render(<RouterProvider router={router}/>);
