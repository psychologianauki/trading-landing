import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders the Trade with Azeem brand, videos and existing account links', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
    /Built on discipline.\s*Driven by excellence./
  );
  expect(screen.getAllByRole('img', { name: 'Trade with Azeem' })).toHaveLength(2);
  screen.getAllByRole('img', { name: 'Trade with Azeem' }).forEach(logo => {
    expect(logo).toHaveAttribute('src', '/logo1.png');
  });
  expect(screen.getByText('Mueez Ahmed')).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /Create My Free Account/i })).toHaveAttribute('href', 'https://my.tradequo.com/register?referral=019e98c9-e8af-7036-8c61-0c03d806507c');
  screen.getAllByRole('link', { name: 'Get started' }).forEach(link => {
    expect(link).toHaveAttribute('href', 'https://my.tradequo.com/register?referral=019e98c9-e8af-7036-8c61-0c03d806507c');
  });
  expect(document.querySelector('video[src="/front.MOV"]')).toBeInTheDocument();
  expect(document.querySelector('video[src="/test3.mp4"]')).toBeInTheDocument();
});

test('opens and closes FAQ answers', () => {
  render(<App />);
  const question = screen.getByRole('button', { name: /Do you have a trading academy/i });
  fireEvent.click(question);
  expect(screen.getByText(/Our trading academy helps you build your knowledge/i)).toBeInTheDocument();
  fireEvent.click(question);
  expect(screen.queryByText(/Our trading academy helps you build your knowledge/i)).not.toBeInTheDocument();
});

test('testimonial videos use native controls without starting playback on hover', () => {
  const play = jest.spyOn(HTMLMediaElement.prototype, 'play');
  const pause = jest.spyOn(HTMLMediaElement.prototype, 'pause');
  try {
    render(<App />);
    const video = document.querySelector('video[src="/test1.mp4"]');
    expect(video).toHaveAttribute('controls');
    fireEvent.mouseEnter(video);
    fireEvent.mouseLeave(video);
    expect(play).not.toHaveBeenCalled();
    expect(pause).not.toHaveBeenCalled();
  } finally {
    play.mockRestore();
    pause.mockRestore();
  }
});

test('mobile menu closes after navigating to the setup guide', () => {
  const scrollTo = jest.spyOn(window, 'scrollTo').mockImplementation(() => {});
  render(<App />);
  const hamburger = document.querySelector('.hamburger');
  fireEvent.click(hamburger);
  expect(document.querySelector('.nav-links')).toHaveClass('active');
  fireEvent.click(screen.getByText('Step by step guide'));
  expect(document.querySelector('.nav-links')).not.toHaveClass('active');
  expect(scrollTo).toHaveBeenCalledWith(expect.objectContaining({ behavior: 'smooth' }));
  scrollTo.mockRestore();
});

test('community and automation links keep their respective destinations', () => {
  render(<App />);
  const externalLinks = screen.getAllByRole('link').filter(link => link.getAttribute('href').startsWith('https://'));
  const journey = externalLinks.find(link => link.getAttribute('href') === 'https://t.me/+yOCIB9-WzsM3ZjU0');
  expect(journey).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Get Started For FREE' })).toHaveAttribute('href', 'https://tradewithazeembot.com/');
  expect(screen.getByRole('link', { name: 'See how it works' })).toHaveAttribute('href', 'https://tradewithazeembot.com/#how-to-start');
  externalLinks.filter(link => link !== journey).forEach(link => {
    expect([
      'https://my.tradequo.com/register?referral=019e98c9-e8af-7036-8c61-0c03d806507c',
      'https://tradewithazeembot.com/',
      'https://tradewithazeembot.com/#how-to-start',
    ]).toContain(link.getAttribute('href'));
  });
});
