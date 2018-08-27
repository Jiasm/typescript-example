import React, { ChangeEvent } from 'react'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'
import { Table, TableHead, TableBody, TableRow, TableCell, FormControl, RadioGroup, FormControlLabel, Radio, Button } from '@material-ui/core'
import { Gender } from '../config'

const styles = (theme: Theme) => createStyles({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  group: {
    flexDirection: 'row',
    margin: `${theme.spacing.unit}px 0`,
  },
  margin: {
    margin: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit,
    height: 40,
    alignSelf: 'center',
  },
})

class List extends React.Component<{
  classes: any
  theme: Theme
}> {
  state: {
    rows: Array<{
      uid: number
      name: string
      age: number
      gender: number
    }>
    gender: string
  } = {
      rows: [],
      gender: '0',
    };

  componentDidMount() {
    this.getData()
  }

  handleChange = (event: ChangeEvent<any>) => {
    this.setState({ gender: event.target.value })
  }

  getData = async () => {
    const { gender } = this.state
    const res = await fetch(Number(gender) in Gender ? `/list/filter/${gender}` : '/list')

    const { data } = await res.json()

    this.setState({
      rows: data,
    })
  }

  render() {
    const { classes } = this.props
    const { gender, rows } = this.state

    return (
      <div className={classes.container}>
        <div className={classes.container}>
          <FormControl className={classes.margin}>
            <RadioGroup
              aria-label="Gender"
              className={classes.group}
              value={gender}
              onChange={this.handleChange}
            >
              <FormControlLabel value="2" control={<Radio />} label="Female" />
              <FormControlLabel value="1" control={<Radio />} label="Male" />
              <FormControlLabel value="0" control={<Radio />} label="All" />
            </RadioGroup>
          </FormControl>
          <Button variant="contained" className={classes.button} onClick={this.getData}>
            获取数据
          </Button>
        </div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell numeric>#</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Gender</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={row.uid}>
                <TableCell numeric component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.age}</TableCell>
                <TableCell>{row.gender === Gender.Male ? 'Male' : 'Female'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    )
  }
}
export default withStyles(styles)(List)