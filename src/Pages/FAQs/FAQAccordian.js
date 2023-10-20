import React from "react";
import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const FAQData = [
  {
    question: "Why buy from us?",
    answer: [
      "• <strong>Quality Japanese vehicles</strong> - We only offer quality used Japanese cars that are well-maintained and have comprehensive service histories. You can trust the vehicles we sell.",
      "• <strong>Direct import model</strong> - By directly importing our vehicles from Japan ourselves, we eliminate middlemen costs. This allows us to pass savings on to you.",
      "• <strong>Competitive pricing</strong> - Because of our direct sourcing model and smaller operation, we don't have the overhead of larger dealers. This means we can offer very competitive prices.",
      "• <strong>Special requests available</strong> - Need a specific make/model that's not currently in stock? We can source hard-to-find vehicles directly from our partners in Japan. Just ask!",
      "• We hope these reasons help explain why Bavi Motors is the best choice for quality used Japanese vehicles in the UK. Please let us know if you need anything else.",
    ],
  },
  {
    question: "Reasons to go for a Japanese made vehicle",
    answer: [
      "• <strong>Reliability</strong> - Japanese vehicles are renowned for their reliability and durability. On average, they will have fewer mechanical issues and last longer than vehicles from other countries.",
      "• <strong>Quality control</strong> - Japanese auto manufacturers like Toyota, Honda, etc. are famous for their strict quality control standards. You can be assured of a well-made vehicle.",
      "• <strong>Fuel efficiency</strong> - Many Japanese models prioritize fuel economy and minimizing emissions. So, you'll save on fuel costs over the life of the vehicle compared to other options.",
      "• <strong>Technology</strong> - Japanese automakers are often leaders in incorporating the latest safety and driver assistance technologies into their vehicles.",
      "• <strong>Lower maintenance costs</strong> - With reputations for reliability, Japanese cars generally have lower repair rates and maintenance costs long-term versus some domestic or European brands.",
      "• <strong>Lower mileage</strong> - Imported used Japanese vehicles often have lower mileages compared to equivalent aged used vehicles from the UK market. This means more life left in the vehicle.",
    ],
  },
  {
    question: "Multiple ways we can deliver vehicles",
    answer: [
      "• <strong>Purchase from our UK stock</strong> - Choose from our selection of high-quality Japanese vehicles already in our UK inventory.",
      "• <strong>Purchase from our Japan stock</strong> - If you don't find what you want in the UK, browse extended inventory options currently in Japan that can be shipped overseas.",
      "• <strong>Custom/special order vehicle</strong> - Let us know the exact make/model/year/specifications you desire, and we can source it directly from our trusted partners in Japan.",
    ],
  },
  {
    question: "Timeline for import and registration",
    answer: [
      "• <strong>Place your order</strong> - It takes 1-2 business days to process your request and select the exact vehicle.",
      "• <strong>Sourcing in Japan</strong> - It may take up to 1 week to source and inspect the vehicle if it's not already in our Japan stockyard.",
      "• <strong>Shipment to the UK by sea freight</strong> - Standard transit time is 40 days from the point of loading in Japan to arrival at a UK port.",
      "• <strong>UK customs clearance</strong> - This process usually takes 3 business days upon arrival in the UK.",
      "• <strong>You can purchase the vehicle</strong> - Once it clears UK customs, usually before it lands in our UK warehouse/inspection facility.",
      "• <strong>Vehicle arrives in our UK warehouse for inspection</strong> - Takes 2-3 days for inspection and reconditioning if needed.",
      "• <strong>Registration process with DVLA</strong> - For a vehicle over 10 years old, this takes around 1 month. If it's more than 10 years, it takes 2 weeks for its registration.",
      "• Please note this is an estimated timeline. Shipping times may vary, and during busy periods, some steps could take longer. We're happy to discuss specifics and answer any other questions regarding ordering a Japanese import.",
    ],
  },
];

function FAQAccordion() {
  return (
    <Container sx={{ my: 6 }}>
      <Typography variant="h3" textAlign="center" mb={4}>
        FAQs
      </Typography>
      {FAQData.map((faq, index) => (
        <Accordion key={index} sx={{ my: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6" fontWeight="bold">
              {faq.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              {faq.answer.map((item, itemIndex) => (
                <ListItem key={itemIndex}>
                  <ListItemText
                    primary={<div dangerouslySetInnerHTML={{ __html: item }} />}
                  />
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
}

export default FAQAccordion;
