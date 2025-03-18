import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react';
import ProfilePicture from "@/components/atoms/ProfilePicture";
import {describe, it} from "jest-circus";
import {expect} from "@jest/globals";

describe('ProfilePicture', () => {
		it('should render the profile picture with first letter of the username', () => {
				const userName = "Test"
				render(<ProfilePicture userName={userName}/>);

				expect(screen.findAllByText(userName[0])).toMatchSnapshot();
		});
})