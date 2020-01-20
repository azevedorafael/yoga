import styled from 'styled-components';
import { Card } from '../..';

const Content = styled(Card.Content)`
  ${({
    theme: {
      yoga: {
        components: {
          card: {
            gym: { checkIn },
          },
        },
      },
    },
  }) => `
    margin-top: ${checkIn.content.margin.top}px;
  `}
`;

export default Content;
