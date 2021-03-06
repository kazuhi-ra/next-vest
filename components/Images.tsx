import React, { FC } from 'react'
import styled from '@emotion/styled'

import Image from '../components/Image'

type Props = {
  headSrc: string
  vestSrc: string
  footSrc: string
  panelsLeft: number
}

// @ts-ignore
const Images: FC<Props> = ({ headSrc, vestSrc, footSrc, panelsLeft }) => {
  return (
    <ImageWrapper>
      <Image src={headSrc} imgHeight={120} />
      <Image src={vestSrc} imgHeight={150} />
      <Image src={footSrc} imgHeight={232} />
    </ImageWrapper>
  )
}

const ImageWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 12px;
`

let i = 0
export default React.memo(Images, (prev, _) => {
  i++
  return prev.panelsLeft !== 0 && i % prev.panelsLeft !== 0
})
