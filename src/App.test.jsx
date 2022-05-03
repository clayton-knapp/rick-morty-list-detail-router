import { findByText, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('testing App', () => {
  it('renders a list of characters', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    // test if loading message displays
    screen.getByText(/loading/i);

    // test if Summer Smith loads
    const link = await screen.findByText('Summer Smith');

    // test if image of Summer Smith loads
    await screen.findByAltText('image of Summer Smith');

    //test clicking Summer Smith Link takes us to detail
    userEvent.click(link);

    // test if loading message displays
    screen.getByText(/loading/i);

    // test to see if we get Summer Smiths gender on the detail page (not displayed on list page)
    await screen.findByText('Gender: Female');


  });
});