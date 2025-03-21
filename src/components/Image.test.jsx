import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { describe, it, expect, vi, afterEach } from "vitest";
import "@testing-library/jest-dom/vitest";
import Image from "./Image";

describe("Image", () => {
  afterEach(cleanup);

  it("renders image component with camera icon", () => {
    render(<Image currentImage="/image1" handleBannerChange={null} />);

    expect(screen.getByTestId("image-element")).toBeInTheDocument();
    expect(screen.getByTestId("camera-icon-element")).toBeInTheDocument();
  });

  it("renders image upload correctly", () => {
    const mockHandleBannerChange = vi.fn();
    window.URL.createObjectURL = vi.fn();

    afterEach(() => {
      window.URL.createObjectURL.mockReset();
    });

    render(
      <Image
        currentImage="/image1"
        handleBannerChange={mockHandleBannerChange}
      />
    );

    const inputElement = screen.getByTestId("input-element");

    const imageUrl = URL.createObjectURL("/image2");

    fireEvent.change(inputElement, {
      target: { name: "currentImage", value: imageUrl },
    });
  });
});
