import {
  findByText,
  getByLabelText,
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('testing App', () => {

  it.skip('Test the list view and the behavior of clicking on an item and displaying detail view', async () => {
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

  it.skip('Should test the behavior of the dropdown filter', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    //sould wait for loading message to be removed
    await waitForElementToBeRemoved(screen.getByText(/loading/i));


    const select = screen.getByRole('combobox', {
      name: /character status:/i
    });

    // selectOptions(element, values, options)
    userEvent.selectOptions(select, 'unknown');

    // see if Fleeb is on screen
    await screen.findByText('Fleeb');



  });

  it.skip('Should test the detail page with initial entries and intial index', async () => {
    render(
      // intitial entries for Rick Sanchez and Marty Smith, but go to initalIndez 0 for Rick Sanchez
      <MemoryRouter
        initialEntries={['/character/1/', '/character/2/']}
        initialIndex = {0}
      > 
        <App />
      </MemoryRouter>
    );

    //sould wait for loading message to be removed
    await waitForElementToBeRemoved(screen.getByText(/loading/i));

    // see if Rick Sanchez is on screen
    await screen.findByText('Rick Sanchez');



  });


});