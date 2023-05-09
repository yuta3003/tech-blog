/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';

import Footer from '../../../src/components/layout/footer';

describe('Footer', () => {
  test('リストアイテムの数', () => {
	  render(<Footer />);
    screen.debug();
  });
});
