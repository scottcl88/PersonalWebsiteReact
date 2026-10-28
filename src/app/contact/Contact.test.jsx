import { afterEach, beforeEach, expect, test, vi } from 'vitest';
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import Contact from './Contact';

vi.mock('axios');

beforeEach(() => {
  vi.clearAllMocks();
});

afterEach(() => {
  cleanup();
});

function fillAndSubmit() {
  fireEvent.change(screen.getByPlaceholderText('YOUR NAME'), { target: { name: 'name', value: 'Ada' } });
  fireEvent.change(screen.getByPlaceholderText('YOUR EMAIL'), { target: { name: 'email', value: 'ada@example.com' } });
  fireEvent.change(screen.getByPlaceholderText('SUBJECT'), { target: { name: 'subject', value: 'Hello' } });
  fireEvent.change(screen.getByPlaceholderText('MESSAGE'), { target: { name: 'message', value: 'Hi Scott' } });
  fireEvent.submit(screen.getByRole('button', { name: /send message/i }).closest('form'));
}

test('posts the sender email, name, subject and message to the email function (regression: mailto swap dropped the sender)', async () => {
  axios.post.mockResolvedValue({ status: 200 });
  render(<Contact />);
  fillAndSubmit();
  await waitFor(() => expect(axios.post).toHaveBeenCalledTimes(1));
  const [url, payload] = axios.post.mock.calls[0];
  expect(url).toMatch(/scottcl-emailfunction\.azurewebsites\.net\/api\/SendEmail$/);
  expect(payload).toEqual({ FromEmail: 'ada@example.com', Name: 'Ada', Subject: 'Hello', Message: 'Hi Scott' });
  expect(await screen.findByText('Message sent!')).toBeInTheDocument();
});

test('a failed send shows the error toast and never claims success', async () => {
  axios.post.mockRejectedValue(new Error('network'));
  render(<Contact />);
  fillAndSubmit();
  expect(await screen.findByText('An error occurred sending your message')).toBeInTheDocument();
  expect(screen.queryByText('Message sent!')).not.toBeInTheDocument();
  expect(screen.getByRole('button', { name: /send message/i })).not.toBeDisabled();
});
