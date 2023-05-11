import styled from 'styled-components';
import { BREAKPOINTS } from '../../styles/breakpoints';

export const Message = styled.div`
  --padding: 1rem;
  --font-size: 1.5rem;
  --line-height: 2rem;
  padding: var(--padding);
  line-height: var(--line-height);
  width: 100%;
  font-size: var(--font-size);
  text-align: center;
  min-height: calc(
    var(--padding) * 2 + var(--line-height) * 4
  ); // save space for the game message

  @media (${BREAKPOINTS.tablet}) {
    min-height: calc(
      var(--padding) * 2 + var(--line-height) * 2
    ); // on bigger screen user doesn't need so much space, it's impossible to create so long message
  }
`;
