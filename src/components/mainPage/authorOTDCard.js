import React from 'react'
import { Link } from "gatsby"
import { Container, Card, CardMedia, CardActionArea, CardContent, Grid, Typography, Box } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import RenderImage from '../../utils/RenderImage'
import RenderRichText from '../../utils/RenderRichText'


const useStyles = makeStyles(theme => ({
  root: {
    width: '90%',
    margin: '0 7%',
    maxHeight: '450px',
    '& a': {
      textDecoration: 'inherit',
      color: 'inherit'
    },
    [theme.breakpoints.down('md')]: {
      '& h3': {
        fontSize: '1.2rem'
      },
      '& .MuiGrid-container': {

        flexDirection: 'column',

      },
      '& p': {
        overflow: 'hidden',
        display: '-webkit-box',
        '-webkit-line-clamp': 3,
        '-webkit-box-orient': 'vertical',
        marginBottom: '20px',
        marginLeft: '0 !important',
        width: '100% !important'
      }
    }
  },
  CardImage: {
    objectFit: 'cover',
    height: '100%',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  highlight: {
    backgroundColor: theme.palette.primary.light,
    paddingLeft: '20px',
    padding: '10px',
    marginBottom: '30px',
    color: '#ECF5FF',
    '& strong': {
      fontSize: '120%',
      color: '#ffffff'
    },
    [theme.breakpoints.down('md')]: {
      width: '120%'
    }
  }
}))

const AuthorOTDCard = (props) => {
  let classes = useStyles()

  let authorOTDdata = props.data;

  let initialsRegExp = /^([а-яА-Яa-zA-Z-]*), ([а-яА-Яa-zA-Z-]*) ([а-яА-Яa-zA-Z-]*)/

  return (
    <Container maxWidth='lg' className={classes.root}>
      <Card>
        <CardActionArea>
          <Link to={props.slug}>
            <Grid container
              direction="row"
              justify="flex-start"
              alignItems="center"
              spacing={3}
            >
              <Grid item xs={3}>
                <CardMedia className={classes.CardImage}
                  component="img"
                  alt={authorOTDdata.photo.resolutions.title}
                  image={authorOTDdata.photo.resolutions.src}>
                </CardMedia>
              </Grid>
              <Grid item xs={9}>
                <Typography className={classes.highlight} variant='h4' component='h3'>
                  <Box fontWeight="fontWeightMedium" component='strong'>
                    {authorOTDdata.initials.replace(initialsRegExp, '$1')}
                  </Box>
                  <br />
                  {authorOTDdata.initials.replace(initialsRegExp, '$2 $3')}
                </Typography>
                <Typography variant='body1' style={{ marginLeft: '20px', width: '90%' }}>
                  {authorOTDdata.biography.internal.content}
                </Typography>
              </Grid>
            </Grid>
          </Link>
        </CardActionArea>
      </Card>
    </Container>
  )
}

export default AuthorOTDCard;