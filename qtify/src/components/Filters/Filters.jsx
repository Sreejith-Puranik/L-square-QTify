import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
// import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styles from "./Filters.module.css";

// interface TabPanelProps {
//   children?: React.ReactNode;
//   index: number;
//   value: number;
// }

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Filters(props) {
  console.log(props.data);
  // const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    // console.log(newValue);

    props.setSelectedFilterIndex(newValue);
  };

  console.log(props.data, "data from filter");
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          className={styles.tabstyle}
          value={props.selectedFilterIndex}
          onChange={handleChange}
          aria-label="basic tabs example"
          TabIndicatorProps={{
            style: {
              backgroundColor: "var(--color-primary)",
            },
          }}
        >
          {props.data.map((ele) => (
            <Tab
              label={ele.label}
              {...a11yProps(0)}
              className={styles.tabcolor}
            />
          ))}
        </Tabs>
      </Box>
    </Box>
  );
}

export default Filters;

// {
//   filters.map((ele) => <div className={styles.filters}>{ele.label}</div>);
// }
