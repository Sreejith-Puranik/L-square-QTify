import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "./Faqs.module.css";

export default function SimpleAccordion(props) {
  return (
    <div>
      <div className={styles.faqtitle}>{props.title}</div>
      <div className={styles.faqwrapper}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Is QTify free to use?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Yes! It is 100% free, and has 0% ads!</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Can I download and listen to songs offline?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Sorry, unfortunately we don't provide the service to download any
              songs.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
