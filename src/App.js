import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="dashboard-wrapper">
      {/* Sidebar Navigation */}
      <aside className="cyber-sidebar">
        <h2 style={{ color: 'var(--primary-cyan)', fontSize: '1.2rem', fontWeight: '800' }}>SECURITY OS</h2>
        <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {['Dashboard', 'Network Traffic', 'Security Audits', 'Active Nodes', 'Log Management'].map(item => (
            <button key={item} style={{
              background: 'none', border: 'none', color: '#707e94', textAlign: 'left',
              padding: '12px', cursor: 'pointer', borderRadius: '6px'
            }}>
              {item}
            </button>
          ))}
        </div>
      </aside>

      {/* Main Control Panel */}
      <main className="main-stage">
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
          <div>
            <h1 style={{ fontSize: '1.8rem', fontWeight: '700' }}>Cyber Operations Center</h1>
            <p style={{ color: 'var(--text-muted)' }}>Security ID: 00-SALEH-V7 // <span style={{ color: '#22c55e' }}>System Secure</span></p>
          </div>
          <button style={{
            backgroundColor: 'var(--danger-red)', color: 'white', border: 'none',
            padding: '12px 24px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer'
          }}>
            SYSTEM DISCONNECT
          </button>
        </header>

        {/* Real-time Statistics */}
        <div className="stat-grid">
          {[
            { label: 'THREATS NEUTRALIZED', value: '14,209', trend: '+20%' },
            { label: 'NETWORK LATENCY', value: '12ms', trend: 'Stable' },
            { label: 'DATA PROTECTION', value: '100%', trend: 'Active' },
            { label: 'Uptime', value: '99.9%', trend: 'Live' }
          ].map((stat, i) => (
            <div key={i} className="stat-box">
              <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 'bold' }}>{stat.label}</span>
              <h3 style={{ fontSize: '1.5rem', margin: '10px 0' }}>{stat.value}</h3>
              <span className="badge">{stat.trend}</span>
            </div>
          ))}
        </div>

        {/* Live Terminal Console */}
        <section className="console-panel">
          <div style={{ display: 'flex', gap: '6px', marginBottom: '20px' }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56' }}></div>
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e' }}></div>
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f' }}></div>
          </div>
          <div style={{ color: '#00ff41', fontSize: '0.9rem', lineHeight: '1.8' }}>
            <p>[SYSTEM] Initializing secure handshake with Vercel nodes...</p>
            <p>[INFO] Encryption key 256-bit AES successfully generated.</p>
            <p>[AUTH] Access granted to administrator: SALEH.</p>
            <p style={{ color: 'var(--primary-cyan)' }}>[V7] Ready for deployment. Click "Push" in GitHub Desktop to go live.</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;