import { useState } from 'react'
import './App.css'

const supportNumber = '+1234567890'

function ReceiptMark() {
  return (
    <div className="receipt-mark" aria-hidden="true">
      <span>✳</span>
    </div>
  )
}

function App() {
  const [showCall, setShowCall] = useState(false)

  return (
    <main className="page-shell">
      <aside className="demo-ribbon">Independent demo · not affiliated with Apple</aside>

      <section className="support-strip" aria-label="Demo support">
        <p>Need help with this sample order?</p>
        <p className="support-line">Contact Demo Support at <a href={`tel:${supportNumber}`}>{supportNumber}</a></p>
        <button className="call-button" type="button" onClick={() => setShowCall(true)}>
          Call Now
        </button>
      </section>

      <section className="thanks" aria-label="Order confirmation">
        <h1>Thank you for your sample order.</h1>
        <ReceiptMark />
        <span className="sample-tag">DEMO RECEIPT</span>
      </section>

      <section className="order-content">
        <h2>Order Summary</h2>
        <div className="item-row">
          <div>
            <h3>Digital Gift Card</h3>
            <p>Digital delivery via email</p>
          </div>
          <span className="price">$143.95</span>
        </div>

        <div className="total-row">
          <strong>Total</strong>
          <strong>$143.95</strong>
        </div>

        <h2 className="payment-title">Payment Method</h2>
        <div className="payment-method">
          <span className="wallet-symbol" aria-hidden="true">▰</span>
          <strong>Sample payment</strong>
          <span>•••• 0000</span>
        </div>

        <dl className="details-box">
          <div><dt>Order ID</dt><dd>DEMO-000001</dd></div>
          <div><dt>Transaction ID</dt><dd>TXN-DEMO-000000</dd></div>
          <div><dt>Order Date</dt><dd>November 25, 2026</dd></div>
          <div><dt>Payment Status</dt><dd><span className="status-pill">Sample</span></dd></div>
        </dl>
      </section>

      <footer className="receipt-footer">
        <h2>Questions? We’re here to help.</h2>
        <p>This page is a frontend demonstration. No purchase or payment was made.</p>
      </footer>

      {showCall && (
        <div className="dialog-backdrop" role="presentation" onMouseDown={(event) => {
          if (event.target === event.currentTarget) setShowCall(false)
        }}>
          <section className="call-dialog" role="dialog" aria-modal="true" aria-labelledby="call-title">
            <button className="close-button" type="button" aria-label="Close" onClick={() => setShowCall(false)}>×</button>
            <span className="dialog-icon" aria-hidden="true">☎</span>
            <h2 id="call-title">Demo Support</h2>
            <p>This sample number is for the frontend demo.</p>
            <a className="dialog-number" href={`tel:${supportNumber}`}>{supportNumber}</a>
            <a className="dialog-call-button" href={`tel:${supportNumber}`}>Start call</a>
            <button className="cancel-button" type="button" onClick={() => setShowCall(false)}>Close</button>
          </section>
        </div>
      )}
    </main>
  )
}

export default App
