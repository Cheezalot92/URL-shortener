import React, { useEffect, useState } from 'react';

export const ShowShortUrl = () => {
  const [shortUrl, setShortUrl] = useState('');

  useEffect(() => {
    fetch("http://localhost:8000/urls/", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('access_token')
      }
    })
      .then(response => response.json())
      .then(data => {
        setShortUrl(data.shortUrl);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div>
      <h1>Short URL:</h1>
      <p>{shortUrl}</p>
    </div>
  );
};

export default ShowShortUrl;