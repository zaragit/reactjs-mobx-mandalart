import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import Camera from ".";

jest.mock("html2canvas", () => ({
  __esModule: true,
  default: jest.fn().mockReturnValue(() => ({
    toDataURL: () => "data URL",
  })),
}));

describe("<Camera />", () => {
  it("renders component correctly", async () => {
    const fileName = "만다라트";
    render(
      <Camera fileName={fileName}>
        <div>Capture this</div>
      </Camera>
    );

    const buttonEl = screen.getByRole("button");
    expect(buttonEl).toHaveTextContent("이미지로 저장");

    expect(screen.getByText("Capture this")).toBeInTheDocument();

    const aEl = screen.getByTestId("download");
    expect(aEl).toBeInTheDocument();

    fireEvent.click(buttonEl);

    await waitFor(() => expect(aEl["download"]).toBe("만다라트.png"));
  });
});
