import React, { useRef, useState } from "react";
import { Typography, Box, Slider, Input, Button } from "@mui/material";
import { Mark } from "../types";
import useStyles from "../styles";
import { CustomMark } from "./CustomMark";

export const SliderWithCustomMarks = () => {
  const classes = useStyles();

  const inputRef = useRef();

  const initialMarks = [
    {
      label: "Bill & Ted's Excellent Adventure",
      value: 1990,
    },
    {
      label: "Point Break",
      value: 1991,
    },
    {
      label: "Matrix",
      value: 1999,
    },
  ];

  const [sliderValue, setSliderValue] = useState<number>(1985);
  const [inputValue, setInputValue] = useState<string>("");
  const [marks, setMarks] = useState<Mark[]>(initialMarks);

  const updateSliderValue = (e: Event, input: number | number[]): void => {
    const value = typeof input === "number" ? input : input[0];
    setSliderValue(value);
  };

  return (
    <>
      <Typography variant="h4" className={classes.container}>
        Keanu Reeves Movies
      </Typography>
      <Box className={classes.sliderContainer}>
        <Typography className={classes.sliderValue}>{sliderValue}</Typography>
        <Slider
          min={1985}
          max={2023}
          value={sliderValue}
          onChange={updateSliderValue}
          marks={marks}
          slots={{
            markLabel: CustomMark,
          }}
        />

        <Input
          placeholder="Keanu Reeves Movie..."
          inputRef={inputRef}
          value={inputValue}
          onChange={(
            event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
          ) => {
            setInputValue(event.target.value);
          }}
        />
        <Button
          sx={{
            alignContent: "end",
          }}
          onClick={() => {
            setMarks([...marks, { label: inputValue, value: sliderValue }]);
            setInputValue("");
          }}
        >
          Add Movie
        </Button>
      </Box>
    </>
  );
};
