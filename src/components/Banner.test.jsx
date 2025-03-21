import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom/vitest";
import Banner from "./Banner";

vi.mock("./Image", () => ({
  default: vi.fn(() => <div data-testid="image-component" />),
}));

vi.mock("./Illustration", () => ({
  default: vi.fn(() => <div data-testid="illustration-component" />),
}));

vi.mock("../Icons/CloseIcon", () => ({
  default: vi.fn(() => <div data-testId="closeIcon-component" />),
}));

describe("Banner", () => {
  it("renders banner with initial state", () => {
    render(<Banner />);

    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByTestId("image-component")).toBeInTheDocument();
    expect(screen.getByTestId("illustration-component")).toBeInTheDocument();
    expect(screen.getByTestId("closeIcon-component")).toBeInTheDocument();
  });
});
