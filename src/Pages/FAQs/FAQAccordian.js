import React from "react";
import { FAQData } from "./FaqsUtils";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function FAQAccordian() {
  return (
    <Container sx={{ mx: 4, my: 6 }}>
      <Typography variant="h3" textAlign="center" mb={4}>
        FAQs
      </Typography>
      {FAQData.map((faq, index) => (
        <Accordion key={index} sx={{ my: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
}
