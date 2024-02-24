/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

import Header from '../../../src/components/layout/header';

describe('Header', () => {
  test('ヘッダータイトルにタイポが無いかテスト', () => {
	  render(<Header />);

    const headerTitle = screen.getByText('404 motivation not found');
    expect(headerTitle).toBeInTheDocument();
  });

  test('タイトルにマウスオーバーしたときに色が変わることをテスト', () => {
	  render(<Header />);
    const titleText = screen.getByRole('link');

    expect(titleText).toHaveClass('text-gray-400');
    expect(titleText).toHaveClass('hover:text-gray-500');
  });

  test('タイトル押下時動作', () => {
	  render(<Header />);
    const titleText = screen.getByRole('link');
    userEvent.click(titleText);
  });
});
