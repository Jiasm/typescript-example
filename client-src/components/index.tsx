import React from 'react'
import { Typography, CssBaseline } from '@material-ui/core'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'
import Add from './add'
import List from './list'

const styles = (theme: Theme) => createStyles({
  logo: {
    maxWidth: '140px',
    margin: '0 auto',
    display: 'block',
  },
  wrap: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  slogan: {
    marginTop: 20,
  },
})

class Index extends React.Component<{
  classes: any
  theme: Theme
}> {
  render() {
    const { classes } = this.props
    return <section className={classes.wrap}>
      <Add />
      <CssBaseline />
      <List />
    </section>
  }
}

export default withStyles(styles, {
  withTheme: true,
})(Index)
