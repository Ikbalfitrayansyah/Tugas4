import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Judul from "../../components/Judul Halaman/Judul";

function Portofolio() {
  return (
    <>
      <Navbar />
      <br />
      
      <br />
      <br />
      <br />
      <div className="card-group">
        <div className="card">
          
          <div className="card-body">
            <br /><br />
            <h5 className="card-title">Tehnical Projeck Assesment 1</h5>
            <p className="card-text">WEB PERSONAL</p>
            
          </div>
        </div>
        <div className="card">
          
          <div className="card-body">
            <br /><br /><br /><br /><br />
            <h5 className="card-title">Tehnical Projeck Assesment 2</h5>
            <p className="card-text">BMI CALCULATE</p>
            <p className="card-text">
              <small className="text-muted">Week 3</small>
            </p>
          </div>
        </div>
        <div className="card">
          
          <div className="card-body">
            <br /><br />
            <h5 className="card-title">Tehnical Projeck Assesment 3</h5>
            <p className="card-text">APP Movie</p>
            <p className="card-text">
              <small className="text-muted">Week 5</small>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portofolio;
