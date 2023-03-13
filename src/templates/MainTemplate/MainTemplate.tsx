import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import { ProSidebarProvider } from 'react-pro-sidebar';
import { Scrollbars } from 'react-custom-scrollbars-2';
import GetDate from '../../components/GetDate/GetDate';




type Props = {}

export default function MainTemplate({ }: Props) {
  return (
    <ProSidebarProvider>
      <div className='d-flex'>
        <Navbar />
        <Scrollbars style={{ width: '100%', height: '100vh' }}>
        <GetDate />
        <Outlet />
      </Scrollbars>
      </div>
    </ProSidebarProvider>
  )
}