/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";

import Layout from '../../../src/components/layout/layout';


test('changes the class when hovered', () => {
	render(
    <Layout>
      <div>
      </div>
    </Layout>
  );
  screen.debug();
});
