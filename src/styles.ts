import { makeStyles } from "@mui/styles";

const styles = () => {
  return {
    appContainer: {
      marginTop: 100,
      width: 500,
      margin: "auto",
    },
    container: {
      marginTop: 100,
    },
    appHeader: {},
    sliderContainer: {},
    sliderValue: {},
  };
};

const useStyles = makeStyles(styles);
export default useStyles;
