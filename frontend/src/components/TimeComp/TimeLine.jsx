import React from "react";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

import WorkIcon from "@mui/icons-material/Work";

import "../../components/TimeComp/Time.css";
import { Typography } from "@mui/material";

const TimeLine = ({ title, icon, children }) => {
  return (
    <Timeline className={"timeline"}>
      {/*Item Header*/}
      <TimelineItem classname="timeline_firstItem">
        <TimelineSeparator>
          <TimelineDot classname="timeline_dot_header">
            {<WorkIcon />}
          </TimelineDot>

          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" className={"timeline_header"}>
            My Profile
          </Typography>
        </TimelineContent>
      </TimelineItem>

      {children}

      {/*Content Info*/}

      <TimelineItem>
        <CustomTimeLineSeparator />
        <TimelineContent>User Category: {"Animator"}</TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <CustomTimeLineSeparator />
        <TimelineContent>Email: {"Animator"}</TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <CustomTimeLineSeparator />
        <TimelineContent>Address: {"Mandaue City"}</TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <CustomTimeLineSeparator />
        <TimelineContent>Subsribers: {"100"}</TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <CustomTimeLineSeparator />
        <TimelineContent>Subsribed Users: {"100"}</TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export const CustomTimeLineSeparator = () => (
  <TimelineSeparator className={"separator_padding"}>
    <TimelineDot variant={"outlined"} className={"timeline_dot"} />
    <TimelineConnector />
  </TimelineSeparator>
);

export default TimeLine;
