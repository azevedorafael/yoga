import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider, Strike } from '../..';

describe('<Strike />', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <ThemeProvider>
        <Strike />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
