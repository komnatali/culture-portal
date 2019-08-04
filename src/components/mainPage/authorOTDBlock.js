import React from "react"
import { Grid, Container, Button } from "@material-ui/core"

import AuthorOTDCard from './authorOTDCard'
import RenderRichText from '../../utils/RenderRichText'
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  rightAlignedWideBtn: {
    width: '56%',
    background: theme.palette.primary.light,
    position: 'relative',
    left: '44%',
    justifyContent: 'flex-start',
    paddingLeft: '20px',
    color: '#ffffff',
    '&:hover': {
      background: theme.palette.primary.main,
      color: '#ffffff',
    }
  }
}));

const AuthorOTDBlock = ({ data }) => {
  let authorOTDdata = data;
  let classes = useStyles();

  return (
    <>
      <Container maxWidth={false} style={{ position: 'relative', zIndex: '-1', paddingTop: '5%', paddingBottom: '7%', background: '#ECF5FF' }}>
        <Container maxWidth='lg' style={{ paddingLeft: '10%' }}>
          {RenderRichText(authorOTDdata.desc.json)}
        </Container>
      </Container>
      <Container maxWidth='lg' style={{ marginTop: '-5%' }}>
        <Grid container
          direction="row"
          justify="center"
          alignItems="center">
          <AuthorOTDCard
            key={authorOTDdata.authorOfTheDay.initials}
            data={authorOTDdata.authorOfTheDay}
            slug={authorOTDdata.authorOfTheDay.slug}>
          </AuthorOTDCard>
        </Grid>
      </Container>
      <Button href='/photographers-list/' className={classes.rightAlignedWideBtn} style={{ margin: '2% 0' }}>
        {(function () {
          switch (authorOTDdata.locale) {
            case ('ru'): return 'Показать всех';
            case ('en-US'): return 'See all';
            default: throw Error('Indefined locale')
          }
        }())}</Button>
    </>
  )
}

export default AuthorOTDBlock;