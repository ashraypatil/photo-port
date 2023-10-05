import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

afterEach(cleanup);

describe('About component', () => {
  // First Test
  it('renders', () => {
    render(<About />);
  });

  // Second Test
  it('matches snapshot DOM node structure', () => {
    // You need to render the About component here and use
    // expect(...) to make assertions about the rendered output.
    // Example assertion (replace this with your specific assertions):
    const { container } = render(<About />);
    expect(container).toMatchSnapshot();
    
  });
});
