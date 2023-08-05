import { makeStyles } from "@mui/styles";

const styles = () => {
  return {
    appContainer: {
      marginTop: 100,
      width: 500,
      margin: "auto",
    },
    container: {},
    appHeader: {},
    sliderContainer: {
      marginTop: 40,
      marginBottom: 40,
      borderRadius: 8,
    },
    sliderValue: {},
  };
};

const useStyles = makeStyles(styles);
export default useStyles;
