import React from "react";
import "./styles/general.css";
import Hero from "./assets/hero.webp";

function App() {
  return (
    <div className="app">
      <div className="hero">
        <div className="hero-background">
          <div></div>
          <img src={Hero} alt="hero" />
        </div>
        <h1>
          WELCOME <br></br>TO <br></br> KAKASKASEN <br></br> SATU
        </h1>
        <button>Pelayanan Umum</button>
      </div>
      <div className="location">
        <h1>Lokasi Kelurahan Kakaskasen Satu</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d419.26103744073!2d124.8319135342309!3d1.3531641661571097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32876d243eb214cf%3A0xaa9d80b99f963888!2sKantor%20Lurah%20Kakaskasen%20Satu!5e0!3m2!1sen!2ssg!4v1680012450229!5m2!1sen!2ssg"
          style={{ border: "0" }}
          className="google-location"
          allowfullscreen="true"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default App;
