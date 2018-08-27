// This file is shared across the demos.

import React, { Fragment } from 'react'
import { ListItem, ListItemIcon, ListItemText, Divider, List } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered'

export const mailFolderListItems = (
  <div>
    <ListItem button disabled>
      <ListItemIcon>
        <AddIcon />
      </ListItemIcon>
      <ListItemText primary="注册新用户" />
    </ListItem>
  </div>
)

export const otherMailFolderListItems = (
  <div>
    <ListItem button disabled>
      <ListItemIcon>
        <FormatListNumberedIcon />
      </ListItemIcon>
      <ListItemText primary="访问列表数据" />
    </ListItem>
  </div>
)

export default () => (
  <Fragment>
    <Divider />
    <List>{mailFolderListItems}</List>
    <Divider />
    <List>{otherMailFolderListItems}</List>
  </Fragment>
)
