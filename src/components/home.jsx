import React from 'react';
import { Link } from "react-router-dom";



const Home = (props) => {



    return (
        <div className='d-flex justify-content-center'>
            <Link className="btn btn-info button mr-4 mt-2" to="/weather">
          Get Weather 
            </Link>
        </div>)

    

};


export default Home;