import React from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faChartPie,
  faFileInvoice,
  faMagnifyingGlass,
  faRightToBracket,
  faSackDollar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faApple,
  faFacebook,
  faDiscord,
  faShopify,
  faTiktok,
  faTwitter,
  faStripe,
  faWindows,
} from "@fortawesome/free-brands-svg-icons";
import { AiFillWarning } from "react-icons/ai";
import { faCreditCard } from "@fortawesome/free-regular-svg-icons";
import { NavLink } from 'react-router-dom';

import './Navbar.scss'
type Props = {}

export default function Navbar({ }: Props) {

  return (
    <Sidebar
      backgroundColor='#1f2937'
      style={{ color: '#ffffff', height: '100vh' }}
    >
      <Menu className='nav__menu'>
        <MenuItem component={<NavLink to="/" />}>
          <span>
            <FontAwesomeIcon icon={faApple} />
          </span>
          Giáo Làng
        </MenuItem>
        <SubMenu color='#fff' label="Features" className='nav__submenu'>
          <MenuItem component={<NavLink to="/warning" />}>
            <span>
              <AiFillWarning />
            </span>
            Warning
          </MenuItem>
          <MenuItem component={<NavLink to="/tuition" />}>
            <span>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </span>
            Tuition </MenuItem>
        </SubMenu>
        <div className="footer">
          <MenuItem component={<a href="https://choga.company/educator/teachering" target="_blank" />}>
            <span>
              <FontAwesomeIcon icon={faRightToBracket} />
            </span>
            Back to Giáo Làng </MenuItem>
        </div>
      </Menu>
    </Sidebar>
  )
}