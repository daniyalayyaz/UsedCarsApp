import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Layout/Header";
import Footer from "../../Components/Layout/Footer";
import SearchedResults from "./SearchResults";
import FindCars from "./FindCars";
import { GET } from "../../api/axios";

export default function SearchedResultsIndex() {
  return (
    <>
      <Navbar />
      <FindCars />
      <Footer />
    </>
  );
}
