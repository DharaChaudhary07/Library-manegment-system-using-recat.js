import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
    return(
        <>
            <h1>Library Management System</h1>

            <Link className="btn btn-dark" to="/add-data">AddForm</Link>
        </>
    )
}

export default HomePage