import React, { useState } from "react";
import { Typography, Box, Slider } from "@mui/material";
import { Mark } from "./types";
import useStyles from "./styles";

export const BasicSliderWithMarks = () => {
  const classes = useStyles();

  const initialMarks: Mark[] = [
    { label: "1", value: 15 },
    {
      label: "2",
      value: 45,
    },
    {
      label: "3",
      value: 85,
    },
  ];

  const [sliderValue, setSliderValue] = useState<number>(0);
  const [marks, setMarks] = useState<Mark[]>(initialMarks);

  const updateSliderValue = (e: Event, input: number | number[]): void => {
    const value = typeof input === "number" ? input : input[0];
    setSliderValue(value);
  };

  return (
    <>
      <Typography variant="h4" className={classes.container}>
        Basic Slider with Marks
      </Typography>
      <Box className={classes.sliderContainer}>
        <Typography className={classes.sliderValue}>{sliderValue}</Typography>
        <Slider
          className="mt-1"
          min={0}
          max={100}
          value={sliderValue}
          onChange={updateSliderValue}
          marks={marks}
        />
      </Box>
    </>
  );
};
