import React from 'react'
import { img1, img2, img3, img4 } from './Images'
import { Content, CenteredImage } from './Elements'

const HomePage = () => (
  <div>
    <Content>
      <CenteredImage src={img1} height="30vw" />
      <CenteredImage src={img2} height="30vw" />
      <CenteredImage src={img3} height="30vw" />
      <CenteredImage src={img4} height="30vw" />
    </Content>
  </div>
)

export default HomePage
