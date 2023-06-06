import {PropsWithChildren, ReactElement} from "react";
import {ThemeProvider} from "styled-components";
import theme from "../styles/themes/theme";
import {render as _render} from "@testing-library/react";

type RenderOptions = Parameters<typeof _render>[1];

export const render = (ui: ReactElement, options?: RenderOptions) => {
	const Wrapper = ({children}: PropsWithChildren) => {
		return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
	};

	return _render(ui, {wrapper: Wrapper, ...options})
}