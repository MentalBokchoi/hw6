import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InsultGenerator = () => {
  const [insult, setInsult] = useState('');

  const fetchInsult = async () => {
    try {
      const response = await axios.get('https://evilinsult.com/generate_insult.php?lang=en&type=json');
      setInsult(response.data.insult);
    } catch (error) {
      console.error('Error fetching insult:', error);
      setInsult('Failed to fetch insult. Please try again.');
    }
  };

  useEffect(() => {
    fetchInsult();
  }, []);

  return (
    <div className="insult-generator">
      <h2>Evil Insult:</h2>
      <p>{insult}</p>
      <button onClick={fetchInsult}>Generate New Insult</button>
    </div>
  );
};

export default InsultGenerator;