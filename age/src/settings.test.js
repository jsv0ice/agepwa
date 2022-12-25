import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Settings from './Settings';

test('opens and closes modal when Settings button is clicked', () => {
  const { getByText } = render(<Settings />);
  const button = getByText(/Open Settings/i);
  fireEvent.click(button);
  // Check that the modal is now visible
  const modalElement = getByText(/Settings Menu/i);
  expect(modalElement).toBeInTheDocument();
  // Close the modal
  const closeButton = getByText(/Close/i);
  fireEvent.click(closeButton);
  // Check that the modal is no longer visible
  expect(modalElement).not.toBeInTheDocument();
});

test('updates form inputs when they are changed', () => {
  const { getByLabelText } = render(<Settings />);
  const birthdayInput = getByLabelText(/Birthday:/i);
  const nameInput = getByLabelText(/Name:/i);
  fireEvent.change(birthdayInput, { target: { value: '2022-01-01' } });
  fireEvent.change(nameInput, { target: { value: 'Test Name' } });
  expect(birthdayInput.value).toBe('2022-01-01');
  expect(nameInput.value).toBe('Test Name');
});

test('saves data when Save button is clicked', () => {
  const mockOnChange = jest.fn();
  const { getByText } = render(<Settings onChange={mockOnChange} />);
  const saveButton = getByText(/Save/i);
  fireEvent.click(saveButton);
  expect(mockOnChange).toHaveBeenCalled();
});
