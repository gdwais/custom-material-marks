import React, { useState } from "react";

import "./App.css";
import { Box, Typography, Slider } from "@mui/material";
import useStyles from "./styles";
import { BasicSlider } from "./BasicSlider";
import { BasicSliderWithMarks } from "./BasicSliderWithMarks";

function App() {
  const classes = useStyles();
  return (
    <Box className={classes.appContainer}>
      <BasicSlider />
      <BasicSliderWithMarks />
    </Box>
  );
}

export default App;
