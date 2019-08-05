import React from "react";
import { connect } from 'react-redux';
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";
import { Typography, Container } from '@material-ui/core';

const BiographyTimeline = ({isEnMode, biographyList }) => {
  const colorsOfDates = ["#ABBEEA", "#6577A0"]
  let title = isEnMode ? 'Biography' : 'Биография';
  
  const timelineItems = biographyList.map((bioItem, index) => {
    const firstLetter = bioItem.search(/[a-zа-я]/i)
    const dateText = bioItem.slice(0, firstLetter - 2)
    const bioText = bioItem.slice(firstLetter)[0].toUpperCase() + bioItem.slice(firstLetter + 1)

    const colorOfDate = colorsOfDates[index % colorsOfDates.length]

    return (
      <TimelineItem
        dateText={dateText}
        key={index.toString()}
        dateInnerStyle={{ background: colorOfDate, color: 'black' }}
      >
        {bioText}
      </TimelineItem>
    )
  })

  return (
    <Container>
      <Typography variant='h4' align="center">
        {title}
      </Typography>
      <Timeline lineColor={"#ddd"}>{timelineItems}</Timeline>
    </Container>
  )

}

export default connect(state => ({
  isEnMode:  state.app.isEnMode
}), null)(BiographyTimeline);