import { makeStyles } from "@material-ui/core/styles"

const MainpageStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    overflowX: 'hidden',
    '& p': {
      fontSize: '1.1rem'
    },
    [theme.breakpoints.down('md')]: {
      '& h1': {
        fontSize: '2.5rem',
        textAlign: 'center'
      },
      '& h2': {
        fontSize: '1.5rem',
      }
    }
  },
  bigAvatar: {
    width: '100%',
    height: '100%',
    border: `2px solid ${theme.palette.primary.main}`
  },
  containerWidePic: {
    width: '100%',
    height: 'auto',
    float: 'left'
  },
  smallBadge: {
    width: '30%',
    marginLeft: '-12%',
    marginTop: '40%',
    transition: 'all .1s ease-in',
    '&:hover': {
      transform: 'scale(1.2)',
      transition: 'all .1s ease-in'
    }
  },
  fullWide: {
    width: '100vw',
    boxSizing: 'border-box'
  },
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


}))

export default MainpageStyles;