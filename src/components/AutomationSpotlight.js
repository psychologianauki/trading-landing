import { Arrow } from './Brand';

export const automationUrl = 'https://tradewithazeembot.com/';

export default function AutomationSpotlight() {
  return (
    <section id="automation" className="automation-spotlight" aria-labelledby="automation-heading">
      <div className="container">
        <div className="automation-feature marble">
          <div className="automation-feature-copy">
            <p className="automation-kicker"><span aria-hidden="true">✦</span> CapitalAU · Hands-free copy trading</p>
            <h2 id="automation-heading">Automated trading.<br /><em>Less time on charts.</em></h2>
            <p className="automation-description">
              Meet CapitalAU, our automated copy trading system. Follow a structured
              strategy while trades are copied to your account.
            </p>
            <ul className="automation-points">
              <li>Trades copied automatically</li>
              <li>Set your own allocation</li>
              <li>Monitor your account in PU Prime</li>
            </ul>
            <div className="automation-actions">
              <a className="gold-button" href={automationUrl} target="_blank" rel="noopener noreferrer">
                Get Started For FREE <Arrow />
              </a>
              <a className="text-link" href={`${automationUrl}#how-to-start`} target="_blank" rel="noopener noreferrer">
                See how it works <Arrow />
              </a>
            </div>
            <p className="automation-risk">Trading involves risk. Profits are never guaranteed.</p>
          </div>
          <div className="automation-visual">
            <img
              src="/images/automated-copy-trading.png"
              alt="Automated trading bot connected to copy accounts on a laptop, beside a phone displaying a trading chart"
              width="1122"
              height="1402"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
