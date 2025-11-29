import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import ClientArticles from "../components/ClientArticles";

beforeEach(() => {
  global.fetch = jest.fn();
});

afterEach(() => {
  jest.resetAllMocks();
});

test("shows skeletons while loading and then renders articles", async () => {
  const mock = [
    {
      id: "t1",
      title: "Test article",
      summary: "sum",
      image: null,
      publishedAt: new Date().toISOString(),
      content: "c",
    },
  ];
  global.fetch.mockResolvedValueOnce({ json: async () => mock });

  render(<ClientArticles />);

  // skeleton should be present (animate-pulse area)
  expect(document.querySelectorAll(".animate-pulse").length).toBeGreaterThan(0);

  await waitFor(() =>
    expect(screen.getByText("Test article")).toBeInTheDocument()
  );
});
