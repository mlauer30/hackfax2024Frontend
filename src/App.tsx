import { CardTitle, CardDescription, CardContent, Card } from "@/components/ui/card"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { useRoutes } from "react-router-dom"
import { useState } from "react"
import "./App.css"
import ViewProfile from "./components/pages/ViewProfile"
import ViewJSON from "./components/pages/ViewJSON"

export default function App() {

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
      // const [user ,setUser] = useState([sample]);
    
  
  


  
  // const [count, setCount] = useState(0)
  const routes = useRoutes([
    /*
     * main page Home /
     * view page 
     * new page
     * edit page
    */
    { path: "/", element: <ViewProfile />},
    { path: "/view/:id", element: <>page</>},
    { path: "/new", element: <div>new</div> },
    { path: "/edit/:id", element: <div>edit</div>},
    { path: "*", element: <div>404 NOT FOUND</div> },

  ]);
  return (
   <>
   {/* <ViewProfile/> */}
   <ViewJSON/>
   </>
  )
}