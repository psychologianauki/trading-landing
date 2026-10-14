export default function Brand() {
  return <span className="brand"><img className="brand-logo" src="/logo1.png" alt="Trade with Azeem" width="140" height="100" /></span>;
}
export function Arrow() { return <span aria-hidden="true">→</span>; }
export const telegramUrl = 'https://t.me/+yOCIB9-WzsM3ZjU0';
export const tradequoUrl = 'https://my.tradequo.com/register?referral=019e98c9-e8af-7036-8c61-0c03d806507c';
export function JoinLink({ children = 'Get started', className = 'gold-button', href = tradequoUrl }) {
  return <a className={className} href={href} target="_blank" rel="noopener noreferrer">{children}</a>;
}
