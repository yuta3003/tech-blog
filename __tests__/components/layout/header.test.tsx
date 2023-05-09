/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";

import Header from '../../../src/components/layout/header';

test('changes the class when hovered', () => {
	render(<Header />);
  screen.debug();
});
