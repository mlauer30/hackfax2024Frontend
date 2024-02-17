import { useState } from 'react'
import { useRoutes } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Profile from './components/Profile';

function App() {
  // const [count, setCount] = useState(0)
  const routes = useRoutes([
    /*
     * main page Home /
     * view page 
     * new page
     * edit page
    */
    { path: "/", element: <Profile/>},
    { path: "/view/:id", element: <>page</>},
    { path: "/new", element: <div>new</div> },
    { path: "/edit/:id", element: <div>edit</div>},
    { path: "*", element: <div>404 NOT FOUND</div> },
  ]);
  return (
    <>
    {routes}
    </>
  )
}

export default App
