import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" style={{ textAlign: 'center' }}>
      {'Built with love by the '}
      <a
        color="inherit"
        href="https://rs.school/"
        style={{ textDecoration: 'none', fontWeight: 'bold', color: '#3f51b5' }}
        target='_blank'
        rel="noopener noreferrer"
      >
        RSSstudents
      </a>
      {' team.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  footer: {
    padding: theme.spacing(2),
    marginTop: 'auto',
    backgroundColor: '#3f80b512',
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="sm">
        <Typography variant="body1" style={{ textAlign: 'center' }}>Group 16, 2019</Typography>
        <MadeWithLove />
      </Container>
    </footer>
  );
}