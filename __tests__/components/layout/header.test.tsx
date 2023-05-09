/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'

import Header from '../../../src/components/layout/header';

describe('Header', () => {
  test('ヘッダータイトルにタイポが無いかTEST', () => {
	  render(<Header />);
    screen.getByText('404 motivation not found');
  });

  test('タイトルにマウスオーバー', () => {
	  render(<Header />);
    const titleText = screen.getByRole('link');

    // マウスオーバー
    userEvent.hover(titleText);
    // マウスオーバーを解除
    userEvent.unhover(titleText);
  });
});
