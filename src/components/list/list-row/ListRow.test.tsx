import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ListRow from "./ListRow";

describe("ListRow component", () => {
  const mockCharacterData = {
    id: "1",
    name: "Character Name",
    series: ["Series 1", "Series 2", "Series 3"],
    events: ["Event 1", "Event 2", "Event 3"],
    image: "https://character.com/image.jpg",
  };

  it("should render the ListRow component with name, image, series and events", () => {
    render(<ListRow {...mockCharacterData} />);

    expect(screen.getByText("Character Name")).toBeInTheDocument();

    const image = screen.getByAltText("Character Name");
    expect(image).toBeInTheDocument();

    mockCharacterData.series.forEach((serie) => {
      expect(screen.getByText(serie)).toBeInTheDocument();
    });

    mockCharacterData.events.forEach((event) => {
      expect(screen.getByText(event)).toBeInTheDocument();
    });
  });

  it("should render the anchor in character properly", () => {
    render(<ListRow {...mockCharacterData} />);
    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      `characters?id=${mockCharacterData.id}`
    );
  });
});
