import { createBrowserRouter } from "react-router-dom";
import { PATHS } from "../constants/routes";
import HomePageIndex from "../Pages/Home/Index";
import AboutUsIndex from "../Pages/AboutUs/Index";
import ContactUsIndex from "../Pages/ContactUs/Index";
import FAQsIndex from "../Pages/FAQs/Index";
import CarsListingsIndex from "../Pages/CarsListings/Index";
import CarDetailIndex from "../Pages/CarDetails/Index";
import SearchedResultsIndex from "../Pages/SearchResults/Index";

export const router = createBrowserRouter([
  {
    path: PATHS.index,
    element: <HomePageIndex />,
  },
  {
    path: PATHS.about,
    element: <AboutUsIndex />,
  },
  {
    path: PATHS.contact,
    element: <ContactUsIndex />,
  },
  {
    path: PATHS.faqs,
    element: <FAQsIndex />,
  },
  {
    path: PATHS.carslistings,
    element: <CarsListingsIndex />,
  },
  {
    path: PATHS.cardetails,
    element: <CarDetailIndex />,
  },
  {
    path: PATHS.searchResults,
    element: <SearchedResultsIndex />,
  },
]);
