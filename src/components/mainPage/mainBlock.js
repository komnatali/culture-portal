import React from "react"
import { Container, Paper, Typography, Box } from "@material-ui/core"

import RenderRichText from '../../utils/RenderRichText'

const MainBlock = ({ data }) => {
  let MainBlockdata = data
  return (
    <Paper>
      <Container maxWidth={false} style={{ padding: '11% 0', background: `center / cover url(${MainBlockdata.picture.resolutions.src})` }}>
        <Container maxWidth='lg'>
          <Typography variant='h1' color='primary'> <Box fontWeight="fontWeightMedium" component='strong'>{MainBlockdata.title}</Box></Typography>
          <Container style={{ marginTop: '30px', marginLeft: '-2%', maxWidth: '98vw' }}>
            {RenderRichText(MainBlockdata.desc.json)}
          </Container>
        </Container>
      </Container>
    </Paper>
  )
}

export default MainBlock;