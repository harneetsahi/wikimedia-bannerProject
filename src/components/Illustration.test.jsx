import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom/vitest";
import Illustration from "./Illustration";

describe("Illustration", () => {
  it("renders illustration correctly", () => {
    render(<Illustration currenntIllustrtion={"/image1"} />);

    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});
