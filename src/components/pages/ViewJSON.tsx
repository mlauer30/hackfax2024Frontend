import React, { useState, useEffect } from 'react';

const YourComponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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

export default YourComponent;
