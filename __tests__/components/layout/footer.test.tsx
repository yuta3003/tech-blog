/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';

import Footer from '../../../src/components/layout/footer';

test('changes the class when hovered', () => {
	render(<Footer />);
  screen.debug();
});
