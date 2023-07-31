import React, { useState } from "react";
import { Typography, Box, Slider } from "@mui/material";
import useStyles from "./styles";

export const BasicSlider = () => {
  const classes = useStyles();

  const [sliderValue, setSliderValue] = useState<number>(0);

  const updateSliderValue = (e: Event, input: number | number[]): void => {
    const value = typeof input === "number" ? input : input[0];
    setSliderValue(value);
  };

  return (
    <>
      <Typography variant="h4" className={classes.container}>
        Basic Slider
      </Typography>
      <Box className={classes.sliderContainer}>
        <Typography className={classes.sliderValue}>{sliderValue}</Typography>
        <Slider
          className="mt-1"
          min={0}
          max={100}
          value={sliderValue}
          onChange={updateSliderValue}
        />
      </Box>
    </>
  );
};
