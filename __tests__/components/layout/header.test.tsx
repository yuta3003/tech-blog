/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

import Header from '../../../src/components/layout/header';

describe('Header', () => {
  test('ヘッダータイトルにタイポが無いかTEST', () => {
	  render(<Header />);
    const headerTitle = screen.getByText('404 motivation not found');
    expect(headerTitle).toBeInTheDocument();
  });

  test('タイトルにマウスオーバー', () => {
	  render(<Header />);
    const titleText = screen.getByRole('link');

    // マウスオーバー
    userEvent.hover(titleText);
    // マウスオーバーを解除
    userEvent.unhover(titleText);
  });

  test('タイトル押下時動作', () => {
	  render(<Header />);
    const titleText = screen.getByRole('link');
    userEvent.click(titleText);
  });
});
