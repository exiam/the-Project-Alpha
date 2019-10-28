import styled from 'styled-components'
import * as React from 'react'

interface ContainerProps {
  width: number
}

const GroupBoxLabel = styled.div`
  height: 24px;
  background: green;
  width: 100%;
  font-size: 16px;
  background: #256071;
  color: #fcfcfc;
  font-family: 'Fira sans', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
const GroupBoxInner = styled.div`
  width: 100%;
  min-height: 150px;
  position: absolute;
  bottom: 0;
  top: 24px;
`
const GroupBoxContainer = styled.div<ContainerProps>`
  width: ${p => p.width}px;
  position: relative;
  height: calc(150px + 24px);
  background: #fcfcfc;
  border: solid 5px #256071;
  border-radius: 10px;
`

interface OverlayProps {
  gradient: boolean
  text: boolean
}

const GroupBoxOverlay = styled.a<OverlayProps>`
  background: red;
  height: ${p =>
    p.text ? (p.gradient ? '50px' : '25px') : p.gradient ? '25px' : '0px'};
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  transform: translateY(1px);
  background: #256071;
  ${p =>
    p.gradient
      ? `background: linear-gradient(0deg, #256071 ${
          p.text ? '60' : '0'
        }%, transparent 100%);`
      : ''}
  font-size: 18px;
  color: #fcfcfc;
  font-family: Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

export interface GroupBoxProps {
  name: string
  gradient?: boolean
  width?: number
  overlayText?: string
  moreHref?: string
}

const GroupBox: React.SFC<GroupBoxProps> = ({
  gradient,
  name,
  width = 300,
  children,
  overlayText,
  moreHref = '/',
}) => (
  <GroupBoxContainer width={width}>
    <GroupBoxLabel data-test-name="label">{name}</GroupBoxLabel>
    <GroupBoxInner>{children}</GroupBoxInner>
    <GroupBoxOverlay
      href={moreHref}
      as={overlayText ? 'a' : 'span'}
      text={!!overlayText}
      gradient={gradient}
    >
      {overlayText}
    </GroupBoxOverlay>
  </GroupBoxContainer>
)

export default GroupBox
