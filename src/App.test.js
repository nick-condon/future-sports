import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import Contact from './components/Main/Contact';
import Welcome from './components/Main/Welcome';


test('render email input', () => {
  render(<Welcome />);
// Expect this to fail as Individual is not in the overlay

fireEvent.click(screen.getByText(/Learn More.../))
expect(screen.getByText(/Individual/)).toBeInTheDocument()

})