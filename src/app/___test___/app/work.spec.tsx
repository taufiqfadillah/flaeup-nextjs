import WorkPage from "@/app/work/page";
import { render, screen } from "@testing-library/react";

describe("Work Page", () => {
	it("renders correctly", () => {
		const page = render(<WorkPage />);
		expect(page).toMatchSnapshot();
	});
});
