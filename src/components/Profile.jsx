import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Class from './Class';
function Profile({data}){
  /*
  *
   * user
   * top matches
   * search users
  */
  const initialData = {
    "users": [
      {
        "Name": "MARK",
        "Major":"Computer Science",
        "classes": [
          {
            "name": "MATH112",
            "partners": ["MATTHEW"],
            "time": [
              {"start": "13:00", "end": "15:00"}
            ]
          },
          {
            "name": "CS201",
            "partners": [],
            "time": [
              {"start": "10:00", "end": "12:00"},
              {"start": "14:00", "end": "16:00"}
            ]
          },
          {
            "name": "PY101",
            "partners": ["SARA", "JOHN"],
            "time": [
              {"start": "9:00", "end": "11:00"},
              {"start": "15:00", "end": "17:00"}
            ]
          }
        ]
      },
      {
        "Name": "JENNY",
        "Major":"Mathematics",
        "classes": [
          {
            "name": "MATH112",
            "partners": ["EMMA"],
            "time": [
              {"start": "13:00", "end": "15:00"}
            ]
          },
          {
            "name": "CS201",
            "partners": ["SAM"],
            "time": [
              {"start": "10:00", "end": "12:00"},
              {"start": "14:00", "end": "16:00"}
            ]
          },
          {
            "name": "PY101",
            "partners": ["SARA"],
            "time": [
              {"start": "9:00", "end": "11:00"},
              {"start": "15:00", "end": "17:00"}
            ]
          }
        ]
      }
    ]
  };
  
  
  const [processedData] = useState(() => {
    return initialData.users.map(user => {
      const userName = user.Name;
      const userMajor = user.Major;
      const classes = user.classes.map(classItem => {
        const className = classItem.name;
        const partners = classItem.partners.join(', ');
        const timeSlots = classItem.time.map((session, index) => (
          <span key={index}>{session.start} - {session.end}<br /></span>
        ));

        return (
          <div key={className}>
            <h3>Name:{className}</h3>
            <p><strong>Partners:</strong> {partners}</p>
            <p><strong>Time:</strong><br /> {timeSlots}</p>
          </div>
        );
      });

      return (
        <div key={userName}>
          <h2>{userName}</h2>
          <h4>Major: {userMajor}</h4>
          {classes}
        </div>
      );
    });
  });

  return (
    <div>
      {processedData}
    </div>
  );
}
export default Profile  
