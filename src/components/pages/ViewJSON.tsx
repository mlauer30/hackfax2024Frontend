import React, { useState, useEffect } from 'react';

const YourComponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
<<<<<<< HEAD
    const fetchData = () => {
        
          
          fetch("https://b969-129-174-182-89.ngrok-free.app/return", {
            method: "GET",
            redirect: "follow"
          
      }  )
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.error(error));
    };

    fetchData();
  }, []);// Empty dependency array to run the effect only once
=======
    const fetchData = async () => {
      try {
        const response = await fetch('https://localhost:5000/return'); // Replace with your API endpoint
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once
>>>>>>> 80418193d02277a4276bb969fcd186afb74205aa

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {/* Render your JSON data here */}
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

<<<<<<< HEAD
export default YourComponent;
=======
export default YourComponent;
>>>>>>> 80418193d02277a4276bb969fcd186afb74205aa
