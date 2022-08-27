import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Judul from "../../components/Judul Halaman/Judul";

function AboutMe() {
  return (
    <>
      <Navbar />
      <br />
      
      <br />
      <br />
      <div className="container">
        <div className="card mb-3">
          <div className="row g-0">
          <br />
                  
                <h2 className="card-title">ikbal Fitrayansyah</h2>
                <br />
                  <br /><br />
                  <br />
                <p className="card-text">Tempat Tanggal Lahir : Mapin Kebak kec. Alas barat </p>
                <p className="card-text">Lulusan : SMA Muhammadiyah Alas</p>
                <p className="card-text">
                  Alamat : RT 01 RW 01 Dusun Mapin Kebak kec. ALas Barat Kab. Sumbawa
                  <br />
                  <br />
                  
                </p>
              </div>
            </div>
          </div>
        
    </>
  );
}

export default AboutMe;
