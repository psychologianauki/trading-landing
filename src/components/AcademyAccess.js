import { useRef } from 'react';
import { createPortal } from 'react-dom';
import { Arrow } from './Brand';

export default function AcademyAccess() {
  const dialogRef = useRef(null);

  const closeOnBackdrop = event => {
    if (event.target !== event.currentTarget) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right ||
        event.clientY < bounds.top || event.clientY > bounds.bottom) {
      dialogRef.current.close();
    }
  };

  return <>
    <button type="button" className="text-link academy-trigger" aria-haspopup="dialog" aria-controls="academy-access" onClick={() => dialogRef.current.showModal()}>
      Access the academy <Arrow />
    </button>
    {createPortal(<dialog ref={dialogRef} id="academy-access" className="academy-dialog" aria-labelledby="academy-title" onClick={closeOnBackdrop}>
      <div className="academy-dialog-header">
        <div><p className="eyebrow">Members access</p><h2 id="academy-title">🚀 Getting Started</h2></div>
        <button type="button" className="academy-close" aria-label="Close academy instructions" onClick={() => dialogRef.current.close()} autoFocus>×</button>
      </div>
      <div className="academy-dialog-body">
        <p>Visit: <strong>www.myprotrader.com</strong></p>
        <ol className="academy-instructions">
          <li>Click <strong>“Join”</strong> (top right).</li>
          <li>Create your account.</li>
          <li>Enter your TradeQuo details and email address.</li>
          <li>Enter your MT5 login credentials.</li>
        </ol>
        <div className="academy-notice">
          <h3>⚠️ Please ensure:</h3>
          <ul>
            <li>Your trading account has the required minimum deposit.</li>
            <li>Your MT5 login credentials are entered correctly.</li>
          </ul>
          <p><strong>MT5 credentials are case-sensitive.</strong> Incorrect credentials will prevent access from being granted.</p>
        </div>
        <p>Once your details have been submitted successfully, the system will automatically verify your account and grant access where eligible.</p>
        <p>🎥 Once you’re logged in, click the <strong>“Tutorial”</strong> video at the top of your dashboard for a complete walkthrough of the platform and to learn how to navigate all of the new features.</p>
        <p className="academy-welcome">Welcome to the future of Pro Trader. 🚀</p>
      </div>
      <div className="academy-dialog-footer">
        <a className="gold-button" href="https://www.myprotrader.com" target="_blank" rel="noopener noreferrer">Continue to MyProTrader <Arrow /></a>
      </div>
    </dialog>, document.body)}
  </>;
}
