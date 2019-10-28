import styled from 'styled-components'
import * as React from 'react'

export interface Container0Props {
  addStyles?: string
}

export const Container0 = styled.div<Container0Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  min-height: calc(100vh - 40px);
  ${p => p.addStyles || ''}
  position: relative;
  background-color: whitesmoke;
  max-width: 100vw;
`

export interface Container1Props {
  addStyles?: string
}

export const Container1 = styled.main<Container1Props>`
  width: 1200px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  min-height: 500px;
  align-items: center;
  ${p => p.addStyles || ''}
  @media screen and (min-width: 1900px) {
    position: relative;
  }
  background-color: whitesmoke;
`

export interface ContainerProps {
  container0Props?: Container0Props
  container1Props?: Container1Props
}

export const Container: React.SFC<
  ContainerProps &
    React.DetailedHTMLProps<
      React.AnchorHTMLAttributes<HTMLAnchorElement>,
      HTMLAnchorElement
    >
> = ({ children, container0Props, container1Props }) => {
  return (
    <Container0 {...container0Props}>
      <Container1 {...container1Props}>{children}</Container1>
    </Container0>
  )
}

export interface TitleProps {
  light?: boolean
  color?: string
  s2?: boolean // Section 2
}

export const Title = styled.h1<TitleProps>`
  font-family: Raleway, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 56px;
  font-weight: ${p => (p.light ? 'normal' : 'bold')};
  color: ${p => p.color || '#256071'};
  text-align: center;

  ${p =>
    p.s2
      ? `
    font-family: Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 600;
    font-size: 72px;
    color: #fcfcfc;
    `
      : ''}
`

export interface SubtitleProps {
  light?: boolean
  color?: string
}

export const Subtitle = styled.h4<SubtitleProps>`
  font-family: Raleway, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 40px;
  font-weight: ${p => (p.light ? 'normal' : 'bold')};
  color: ${p => p.color || '#256071'};
  text-align: center;
`

export interface BoldProps {
  weight?: number
}

export const Bold = styled.span<BoldProps>`
  font-weight: ${p => p.weight || 'bold'};
`

export const Section0 = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-direction: column;
  min-height: calc(100vh - 40px);
  width: 1200px;
`

export const Section1 = styled.section`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  min-height: 100vh;
  width: 1200px;
  position: relative;
  h2 {
    align-self: center;
  }
`

export const Section2 = styled.section`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  width: 1200px;
  position: relative;
  background-color: #2f4858;
  width: 100%;
  height: 250px;
  color: #fcfcfc;
  margin: 20vh 0;
`

export const Section3 = styled.section`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  margin-bottom: 20vh;
  min-height: 20vh;
  width: 1200px;
  position: relative;
  align-items: center;
  border: solid 10px #256071;
  box-shadow: 9px 9px #2f4858;
`

export const Integration = styled.div<{ right?: boolean }>`
  display: flex;
  justify-content: space-between;
  width: 700px;
  align-items: center;
  align-self: ${p => (p.right ? 'flex-end' : 'flex-start')};
  flex-direction: ${p => (p.right ? 'row-reverse' : 'row')};
  svg {
    height: 300px;
  }
`
