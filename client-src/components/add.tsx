import React, { ChangeEvent } from 'react'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'
import { Input, InputLabel, FormControl, RadioGroup, FormControlLabel, Radio, Button } from '@material-ui/core'

const styles = (theme: Theme) => createStyles({
  group: {
    flexDirection: 'row',
    margin: `${theme.spacing.unit}px 0`,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
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

class Add extends React.Component<{
  classes: any
  theme: Theme
}> {
  state = {
    gender: '1',
    nickname: '',
    age: '',
  }

  handleChange = (type: string) => (event: ChangeEvent<any>) => {
    this.setState({ [type]: event.target.value })
  }

  nicknameChange = this.handleChange('nickname')

  ageChange = this.handleChange('age')

  genderChange = this.handleChange('gender')

  addNewUser = async () => {
    const { nickname, age, gender } = this.state

    const res = await fetch(`/add/${nickname}/${age}/${gender}`)
  }

  render() {
    const { classes } = this.props
    const { nickname, age, gender } = this.state

    return (
      <div className={classes.container}>
        <FormControl className={classes.margin}>
          <InputLabel htmlFor="nickname">
            昵称
          </InputLabel>
          <Input
            id="nickname"
            value={nickname}
            onChange={this.nicknameChange}
          />
        </FormControl>
        <FormControl className={classes.margin}>
          <InputLabel htmlFor="age">
            年龄
          </InputLabel>
          <Input
            id="age"
            type="number"
            value={age}
            onChange={this.ageChange}
          />
        </FormControl>
        <FormControl className={classes.margin}>
          <RadioGroup
            aria-label="Gender"
            name="gender"
            className={classes.group}
            value={gender}
            onChange={this.genderChange}
          >
            <FormControlLabel value="2" control={<Radio />} label="Female" />
            <FormControlLabel value="1" control={<Radio />} label="Male" />
          </RadioGroup>
        </FormControl>
        <Button variant="contained" color="primary" className={classes.button} onClick={this.addNewUser}>
          新增
        </Button>
      </div>
    )
  }
}
export default withStyles(styles)(Add)