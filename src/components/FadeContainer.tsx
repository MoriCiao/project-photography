import React from 'react'
import { Fade } from 'react-awesome-reveal'

type ContainerPorps = {
  children: React.ReactNode;
}

export default function FadeContainer( { children }:ContainerPorps ):React.JSX.Element {
  return (
    <Fade duration={500} triggerOnce={true} fraction={0.2}>
      {children}
    </Fade>
  )
}
