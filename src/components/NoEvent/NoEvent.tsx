import React from 'react'
import './NoEvent.scss'
import { Fade, Slide } from "react-awesome-reveal";




type Props = {}

export default function NoEvent({ }: Props) {
  return (
    <div className='noevent'>
      <Fade delay={500}>
        <h4>It has no events for today</h4>
      </Fade>
      <Slide  delay={1000}>
        <img src="./img/noevent.webp" alt="" />
      </Slide>
    </div>
  )
}