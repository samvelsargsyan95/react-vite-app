import { styled } from "styled-components"
const BorderedCont = styled.li `
  padding: 20px 15px;
  border: 1px solid lightgrey;
  box-shadow: 2px 4px 5px lightgrey;
  border-radius: 5px;
  list-style-type: none;
`

export default function WayToTeach({ title, description }) {
    return (
      <BorderedCont className="mb-2">
        <b>{ title }</b> { description }
      </BorderedCont>
    )
  }
  