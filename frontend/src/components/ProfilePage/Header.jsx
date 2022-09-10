import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import styled from "styled-components";

export default function ColorTabs() {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const Container = styled.div`
    margin: 20px;
  `;

  return (
    <Container>
      <Box sx={{ width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
        >
          <Tab value="HOME" label="HOME" />
          <Tab value="VIDEOS" label="VIDEOS" />
          <Tab value="ABOUT" label="ABOUT" />
        </Tabs>
      </Box>
    </Container>
  );
}
