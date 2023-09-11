import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import Contact from './components/Main/Contact';


test('render email input', () => {
  render(<Contact />);
// Expect this to pass as it is not a valid name
userEvent.type(screen.getByPlaceholderText(/Full Name*/), 'N')
expect(screen.getByText(/Full Name must be at least 5 characters long!/)).toBeInTheDocument()

})