import { SliderMarkLabel } from "@mui/material";
import { Mark } from "../types";

export const BasicMark = (props: any) => {
  const index = props["data-index"] as number;
  const mark = props.ownerState.marks[index] as Mark;

  return (
    <SliderMarkLabel {...props}>
      <span>{mark.label}</span>
    </SliderMarkLabel>
  );
};
