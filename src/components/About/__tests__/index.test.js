import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';
import About from '..';
 afterEach(cleanup);

 describe('About component', () => {
 // baseline test
  it('renders', () => {
    render(<About />);
  });

 // snapshot test
 it('matches snapshot', () => {
 const { container } = render(<About />);
 expect(container).toMatchSnapshot();
   });
 })