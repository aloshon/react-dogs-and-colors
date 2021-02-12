import { fireEvent, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('/dogs homepage', () => {
  const {getByText} = render(
    <MemoryRouter initialEntries={['/dogs']}>
      <App />
    </MemoryRouter>
    );
  expect(getByText('Dogs')).toBeInTheDocument;
});

test("duke's page", () => {
  const {getByText} = render(
    <MemoryRouter initialEntries={['/dogs/duke']}>
      <App />
    </MemoryRouter>
  );
  expect(getByText('Duke believes that ball is life.')).toBeInTheDocument;
})

test('navbar links', () => {
  const {getByText} = render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );
  expect(getByText('Dogs')).toBeInTheDocument;
  const link = getByText('whiskey');
  fireEvent.click(link);
  expect(getByText('Whiskey loves eating popcorn.'));
})
