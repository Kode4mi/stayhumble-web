// @ts-nocheck
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ProfilePicture from "@/components/atoms/ProfilePicture";
import { describe, it, expect } from '@jest/globals';

describe('ProfilePicture', () => {
	it('should render the profile picture with first letter of the username', () => {
		const userName = "Test";
		render(<ProfilePicture userName={userName} />);

		expect(screen.getByText('T')).toBeInTheDocument();
	});

	it('should render an image when imageURL is provided', () => {
		const imageURL = "https://example.com/image.jpg";
		render(<ProfilePicture imageURL={imageURL} />);

		const imgElement = screen.getByAltText('profile picture');
		expect(imgElement).toBeInTheDocument();
	});

	it('should apply custom scale to the component', () => {
		const userName = "Test";
		const scale = 2;
		const { container } = render(<ProfilePicture userName={userName} scale={scale} />);

		const profileDiv = container.firstChild as HTMLElement;
		expect(profileDiv).toHaveStyle({
			height: `${scale * 2.5}rem`,
			width: `${scale * 2.5}rem`
		});

		const letterSpan = screen.getByText('T');
		expect(letterSpan).toHaveStyle({
			fontSize: `${scale * 1.125}rem`
		});
	});
});