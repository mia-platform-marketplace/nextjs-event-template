import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import Register from '@/app/register-now/page'
  

const homePage = [
    {
        eventDate: '12TH DECEMBER',
        eventCity: 'NEW YORK',
        eventLocation: 'LOCATION'
    }
]
  
jest.mock('@/lib/crud', () => ({
    fetchCrudCollection: jest.fn(() => homePage),
}));

// eslint-disable-next-line @typescript-eslint/no-require-imports
jest.mock("../../components/reusableComponents/stickyNavBar", () => require("../../__mocks__/ClientComponent").default);

// eslint-disable-next-line @typescript-eslint/no-require-imports
jest.mock("../../components/reusableComponents/stickyNavBar", () => require("../../__mocks__/ClientComponent").default);


describe('Page', () => {
    it('renders a heading', async () => {
       const jsx = await Register()
        render(jsx)

        const testRegisterPageSpan = screen.getByText(new RegExp(`${homePage[0].eventCity}`, 'i'), { selector: 'span' });
        expect(testRegisterPageSpan).toBeInTheDocument();
    });
});