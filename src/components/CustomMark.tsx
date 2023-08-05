import { SliderMarkLabel, Tooltip } from "@mui/material";

import { Mark } from "../types";

export const CustomMark = (props: any) => {
  const index = props["data-index"] as number;
  const mark = props.ownerState.marks[index] as Mark;

  const isTop = index % 2 !== 0;

  const baseStyles = {
    backgroundColor: "#0050C9",
    height: "24px",
    boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
    borderRadius: 8,
    color: "white",
  };
  const topRowStyles = {
    ...baseStyles,
    ...{
      top: "-24px",
    },
  };

  const customMarkStyles = isTop ? topRowStyles : baseStyles;

  return (
    <Tooltip title={mark.label} placement={isTop ? "top" : "bottom"} arrow>
      <SliderMarkLabel
        {...props}
        style={{
          ...props.style,
          ...customMarkStyles,
        }}
      >
        <div
          style={{
            marginLeft: 8,
            marginTop: 2,
            marginRight: 8,
          }}
        >
          <span className="text-white">{mark.value}</span>
        </div>
      </SliderMarkLabel>
    </Tooltip>
  );
};
