import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'


export const HeaderBar = () => (
  <Menu>
    <NavLink to="/">
      <Menu.Item
        name="home"
      >
        Home
      </Menu.Item>
    </NavLink>
    <NavLink to="/contacts">
      <Menu.Item
        name="contacts"
      >
        Contacts
      </Menu.Item>
    </NavLink>
  </Menu>
)
