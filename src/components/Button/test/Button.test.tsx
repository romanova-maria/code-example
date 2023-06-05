import {render as _render, screen} from "@testing-library/react";
import Button from "../Button";
import theme from "../../../styles/themes/theme";
import {ThemeProvider} from "styled-components";
import {PropsWithChildren, ReactElement} from "react";

type RenderOptions = Parameters<typeof _render>[1];

const render = (ui: ReactElement, options?: RenderOptions) => {
	const Wrapper = ({children}: PropsWithChildren) => {
		return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
	};

	return _render(ui, {wrapper: Wrapper, ...options})
}

it('Should render', () => {
	render(<Button testId="new-button" areaLabel="New button">New button</Button>);
	const newButton = screen.getByTestId('new-button');
	expect(newButton).toBeInTheDocument();
})