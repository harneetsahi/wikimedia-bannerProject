import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom/vitest";

import Form from "./Form";

describe("Form", () => {
  const bannerState = {
    heading: "test heading",
    fontSize: "22",
    bgColor: "#dbc178",
    currentImage: "image1",
    currentIllustration: "image2",
  };

  afterEach(cleanup);

  it("renders form components without crashing", () => {
    render(<Form bannerState={bannerState} />);

    fireEvent.change(screen.getByLabelText("Change banner text"), {
      target: { name: "New banner" },
    });

    fireEvent.change(screen.getByLabelText("Change font size"), {
      target: { name: "20px" },
    });

    fireEvent.click(screen.getByTestId("bgColor"));

    fireEvent.click(screen.getByTestId("camera-element"));

    fireEvent.click(screen.getByTestId("color-picker"), {
      target: { color: "#FFFFFF" },
    });
  });

  it("handleIllustrationChange is called correctly", () => {
    const mockHandleIllustrationChange = vi.fn();

    render(
      <Form
        bannerState={bannerState}
        handleIllustrationChange={mockHandleIllustrationChange}
      />
    );

    fireEvent.click(screen.getByTestId("illustration-element"));

    expect(mockHandleIllustrationChange).toHaveBeenCalledTimes(1);
  });
});
