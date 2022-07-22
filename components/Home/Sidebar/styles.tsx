import styled from "styled-components"

const Styles = styled.div`
  .inverted {
    background-color: var(--gray-light);
    --text-color: var(--accent-dark);
  }

  .bm-burger-button {
    display: none;
  }

  .bm-cross {
    background-color: var(--gray-light);
  }

  .bm-cross-button {
    height: 24px;
    width: 24px;
  }

  .bm-menu-wrap {
    position: fixed;
    height: 100%;
  }

  .bm-menu {
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
    overflow: hidden;
    background-color: var(--accent-dark);
  }

  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: #373a47;
  }

  /* Wrapper for item list */
  .bm-item-list {
    color: #b8b7ad;
    padding: 0.8em;
  }

  /* Individual item */
  .bm-item {
    display: inline-block;
    font-family: "Poppins", sans-serif;
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--text-color, var(--gray-light));

    text-decoration: none;
    margin-block: 0.75rem;
    padding: 0.25rem;

    &:hover {
      color: var(--accent-light);
    }
  }

  /* Styling of overlay */
  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }
`

export default Styles
