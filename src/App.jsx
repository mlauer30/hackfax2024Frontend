import { useState } from 'react'
import { useRoutes } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Profile from './components/Profile';

function App() {
  // JSON 
  
 const sample =
      [{
        "Name": "MARK",
        "CLASSES": [
          {
            "name": "MATH112",
            "partners": "MATTHEW",
            "time": [
              {"start": "13:00", "end": "15:00"}
            ]
          },
          {
            "name": "CS201",
            "partners": "",
            "time": [
              {"start": "10:00", "end": "12:00"},
              {"start": "14:00", "end": "16:00"}
            ]
          },
          {
            "name": "PY101",
            "partners": "",
            "time": [
              {"start": "9:00", "end": "11:00"},
              {"start": "15:00", "end": "17:00"}
            ]
          }
        ]
      }]
      const [user ,setUser] = useState([sample]);
    
  
  


  
  // const [count, setCount] = useState(0)
  const routes = useRoutes([
    /*
     * main page Home /
     * view page 
     * new page
     * edit page
    */
    { path: "/", element: <Profile data = {user}/>},
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
