import {screen} from '@testing-library/react';
import Button from '../Button';
import {render} from '../../../utilities/testHelpers';
import {axe, toHaveNoViolations} from 'jest-axe';

expect.extend(toHaveNoViolations);

it('should render', () => {
	render(<Button testId="new-button" areaLabel="New button">New button</Button>);
	const newButton = screen.getByTestId('new-button');
	expect(newButton).toBeInTheDocument();
});

it('should have no accessibility violations', async () => {
	const {container} = render(<Button testId="new-button" areaLabel="New button">New button</Button>);
	const results = await axe(container);

	expect(results).toHaveNoViolations();
});