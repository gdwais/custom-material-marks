import "./App.css";
import { Box } from "@mui/material";
import useStyles from "./styles";
import {
  BasicSlider,
  BasicSliderWithMarks,
  SliderWithInputSource,
  SliderWithCustomMarks,
} from "./components";

function App() {
  const classes = useStyles();
  return (
    <Box className={classes.appContainer}>
      <BasicSlider />
      <BasicSliderWithMarks />
      <SliderWithInputSource />
      <SliderWithCustomMarks />
    </Box>
  );
}

export default App;
