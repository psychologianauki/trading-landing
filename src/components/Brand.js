export default function Brand() {
  return <span className="brand"><img className="brand-logo" src="/logo1.png" alt="Trade with Azeem" width="140" height="100" /></span>;
}
export function Arrow() { return <span aria-hidden="true">↗</span>; }
export const telegramUrl = 'https://t.me/+yOCIB9-WzsM3ZjU0';
export function JoinLink({ children = 'Join the community', className = 'gold-button' }) {
  return <a className={className} href={telegramUrl} target="_blank" rel="noopener noreferrer">{children}<Arrow /></a>;
}
