import { css } from '@emotion/core'
import styled from '@emotion/styled'

export const globalStyles = css`
  * {
    font-family: Raleway;
    box-sizing: border-box;
  }
  /* prettier-ignore */
  html, body,
h1, h2, h3, h4, h5, h6,
a, p, span,
em, small, strong,
sub, sup,
mark, del, ins, strike,
abbr, dfn,
blockquote, q, cite,
code, pre,
ol, ul, li, dl, dt, dd,
div, section, article,
main, aside, nav,
header, hgroup, footer,
img, figure, figcaption,
address, time,
audio, video,
canvas, iframe,
details, summary,
fieldset, form, label, legend,
table, caption,
tbody, tfoot, thead,
tr, th, td {
    margin: 0;
    padding: 0;
    border: 0;
}

  input {
    height: 2rem;
    font-size: 1rem;
  }
`
export const AppStyles = styled('div')`
  width: 100%;
  margin: auto;
  text-align: center;
`