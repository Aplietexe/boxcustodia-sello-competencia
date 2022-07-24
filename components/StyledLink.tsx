import styled from "styled-components"

const StyledLink = styled.a`
  font-size: 1.5rem;
  font-weight: 600;
  color: #4a50fd;

  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: var(--accent-dark);
  }

  display: inline-block;
  text-align: center;
`

export default StyledLink
