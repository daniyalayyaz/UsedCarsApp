import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Layout/Header";
import Footer from "../../Components/Layout/Footer";
import DetailHeader from "./DetailHeader";
import PriceCard from "./PriceCard";
import { Container, Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import CarDetails from "./CarDetails";
import ContactSeller from "./ContactSeller";
import { GETID } from "../../api/axios";
import Loader from "../../Components/Loader";

export default function CarDetailIndex() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [imagesArray, setImagesArray] = useState([]);

  const fetchData = async () => {
    GETID(`/cars/${id}`).then((result) => {
      setData(result);
      if (result && typeof result.multipleimages === "string") {
        setIsLoading(false);
        const imageData = JSON.parse(result?.multipleimages || []);
        setImagesArray(Object.values(imageData));
      } else {
        setIsLoading(false);
        setImagesArray([]);
      }
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) return <Loader />;

  return (
    <div>
      <Navbar />
      {data ? (
        <>
          <DetailHeader name={data.name} />
          <Container>
            <Grid container my={4}>
              <Grid item md={8} xs={12}>
                <CarDetails data={data} imagesArray={imagesArray} />
              </Grid>
              <Grid item md={4} xs={12}>
                <PriceCard price={data.price} country={data.country} />
                <ContactSeller />
              </Grid>
            </Grid>
          </Container>
        </>
      ) : (
        <>
          <Typography>No Data Found</Typography>
        </>
      )}
      <Footer />
    </div>
  );
}
