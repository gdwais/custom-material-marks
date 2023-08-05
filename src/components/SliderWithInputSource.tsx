import React, { useRef, useState } from "react";
import { Typography, Box, Slider, Input, Button } from "@mui/material";
import { Mark } from "../types";
import useStyles from "../styles";

export const SliderWithInputSource = () => {
  const classes = useStyles();

  const inputRef = useRef();

  const initialMarks = [
    {
      label: "Parenthood",
      value: 1989,
    },
    {
      label: "Bill & Ted's Excellent Adventure",
      value: 1990,
    },
    {
      label: "Point Break",
      value: 1991,
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
        Slider With Input
      </Typography>
      <Box className={classes.sliderContainer}>
        <Typography className={classes.sliderValue}>{sliderValue}</Typography>
        <Slider
          min={1985}
          max={2023}
          value={sliderValue}
          onChange={updateSliderValue}
          marks={marks}
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
