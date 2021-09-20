import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { Link as MaterialLink, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import Todo from './pages/ToDo/ToDo'
import ImagesGallery from './pages/ImagesGallery/ImagesGallery'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(2)
    },
  },
}))

const App = () => {
  const classes = useStyles()
  // const CustomLink = props => <Link to={to} {...props} />;

  return (
    <>
      <Typography className={classes.root}>
        <MaterialLink component={Link}
                      to="/"
                      variant="body2"
                      >Open ToDo page</MaterialLink>
        {/*<Link to="/images_gallery">Images gallery</Link>*/}
        <MaterialLink component={Link}
                      to="/images_gallery"
                      variant="body2"
                      >Images Gallery</MaterialLink>
        <MaterialLink component={Link}
                      to="/blocked_page"
                      variant="body2"
                      >Blocked page</MaterialLink>
        {/*<Link to="/">Home Page Router Dom</Link>*/}
        {/*<a href="/">Home page Simple a</a>*/}
      </Typography>
      <Switch>
        <Route path="/blocked_page">
          <h1>Blocked page!</h1>
        </Route>
        <Route path="/images_gallery">
          <ImagesGallery/>
        </Route>
        <Route path="/">
          <Todo/>
        </Route>
      </Switch>
    </>
  )
}

export default App
