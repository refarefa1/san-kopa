import * as React from "react";
import PropTypes from "prop-types";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: "block", alignItems: "center" }}>
      <Box sx={{ width: "100%" }}>
        <LinearProgress variant="determinate" {...props} sx={{ width: "100%", height: 12, mr: 1, borderRadius: 20, overflow: 'hidden' }}/>
      </Box>
      <Box sx={{ minWidth: 35 }}></Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

export const ProgressBar = ({progressBarDataHandler}) => {
  const [progress, setProgress] = React.useState(0);

  const onProgressTriggered = (currProgress) => {    
    setProgress(currProgress)
  }

  progressBarDataHandler(onProgressTriggered)
  return (
    <>
    {progress > 0 && <Box sx={{ width: "100%" }}>
      <LinearProgressWithLabel value={progress} />
    </Box>}
    </>
  );
};
