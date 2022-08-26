import "../Home/Home.css";
import React from "react";
import Navbar from "../../components/Navbar/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <br />
      <div className="row">
        <div className="col-lg-12">
          <div className="container-sm">
            <header className="masthead">
              <div className="container-fluid-halaman">
                <div className="masthead-subheading">Welcome to My Website <br />Fitrayansyah</div>
             
              </div>
              
            </header>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
