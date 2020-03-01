import styled from 'styled-components'
import { getColor } from 'design/atoms/colors/colorTypes'

export const BookCardBox = styled.div``

export const BookCardCoverBox = styled.div`
  position: relative;
  pointer-events: none;
  user-select: none;
`

export const BookCardCover = styled.img`
  width: 100%;
  height: auto;
  display: block;
  border-radius: 2px;
  position: relative;
  box-shadow: 0px 5px 7px rgba(0, 0, 0, 0.12);
`

export const BookCardLight = styled.div`
  width: 2px;
  top: 0;
  bottom: 0;
  left: 3%;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: -2px 0 1px rgba(0, 0, 0, 0.05);
  position: absolute;
`

export const BookCardCoverShadow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  filter: blur(20px);
  transform: scaleX(0.8) scaleY(0.8) translateY(-2%);
  transform-origin: bottom;
  z-index: -1;
`

export const BookCardTitle = styled.div`
  font-size: 14px;
  color: ${getColor('textPrimary')};
  font-weight: 600;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`

export const BookCardCitation = styled.div`
  font-size: 14px;
  color: #333;
`