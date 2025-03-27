import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import { describe, it, expect, afterEach } from "vitest";
import "@testing-library/jest-dom/vitest";
import Image from "./Image";

describe("Image", () => {
  afterEach(cleanup);

  it("renders image component with camera icon", () => {
    render(<Image currentImage="/image1" handleBannerChange={null} />);

    expect(screen.getByTestId("image-element")).toBeInTheDocument();
    expect(screen.getByTestId("camera-icon-element")).toBeInTheDocument();
  });
});
