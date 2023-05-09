/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";

import Home from '../../src/pages/index';

describe('Home', () => {
  test('changes the class when hovered', () => {
	  render(<Home allPosts={[]} />);
    screen.debug();
  });
});
