import React from "react";
import Navbar from "../../Components/Layout/Header";
import Footer from "../../Components/Layout/Footer";
import ContactCardDetail from "./ContactCardDetail";
import MapContainer from "./Map";

export default function ContactUsIndex() {
  return (
    <>
      <Navbar />
      <MapContainer zipcode={"01906"} />
      <ContactCardDetail />
      <Footer />
    </>
  );
}
