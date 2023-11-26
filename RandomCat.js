import React, { useState, useEffect } from 'react';

const RandomCat = () => {
  const [catImage, setCatImage] = useState('');
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    const fetchCat = async () => {
      try {
        const response = await fetch('https://http.cat/random');
        if (!response.ok) {
          throw new Error('Failed to fetch cat image');
        }
        // Assuming the response is an image URL
        setCatImage(response.url);
        setIsDataLoaded(true);
      } catch (error) {
        console.error('Error fetching cat image:', error);
        setIsDataLoaded(true); 
      }
    };

    fetchCat();
  }, []);

  if (!isDataLoaded) {
    return (
      <div>
        <h1>Please wait, cat photo is still loading</h1>
      </div>
    );
  }

  return (
    <div className="RandomCat">
      <h1>Fetch Random Cat Photo</h1>
      <img src={catImage} alt="Random Cat" style={{ width: '300px', height: '200px', margin: '10px' }} />
    </div>
  );
};

export default RandomCat;