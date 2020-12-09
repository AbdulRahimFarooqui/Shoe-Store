import React from 'react';
import './../App.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <h1>Welcome To The AR's Shoe Store!</h1>
      <img src={"https://media1.giphy.com/media/Z0qrajAVaSJcK87b9X/giphy.webp?cid=ecf05e477038ae7488f6eba00c1e196273c3287583f39851&rid=giphy.webp"} alt="" width={300} />
      <h3>Visit The <text> </text>
      <Link to="/products">
          Products
      </Link>
      <text> </text> Page To Check Our Products!</h3>
    </div>
    
  );
}

export default Home;