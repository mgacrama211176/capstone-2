import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

//MUI TIMELINE
import Timeline from "@mui/lab/Timeline";

// import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

// MUI ICONS
// import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
// import LocationCityIcon from "@mui/icons-material/LocationCity";
// import ContactMailIcon from "@mui/icons-material/ContactMail";
// import GroupsIcon from "@mui/icons-material/Groups";
// import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";

//MUI Components
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";

// import Typography from "@mui/material/Typography";

const TimelineItem = styled.div`
  display: flex;
`;

const CustomTimeLine = () => {
  const currentUser = useSelector((state) => state.username.currentUser);
  console.log(currentUser);
  return (
    <Timeline>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          User Category: <p>{currentUser.userCategory}</p>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          Email: <p>{currentUser.email}</p>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>
          Address: <p>{currentUser.address}</p>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          Subscribers: <p>{currentUser.subscribers}</p>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          Subscribed Users: <p>{currentUser.subscribedUsers.length}</p>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export default CustomTimeLine;
