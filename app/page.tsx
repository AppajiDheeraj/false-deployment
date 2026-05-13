import { MetricCard } from '../components/metric-card';
import { ReleaseFeed } from '../components/release-feed';
import { getReleaseWindow } from '../lib/release-window';

const metrics = [
  {
    label: 'Launch readiness',
    value: '98.4%',
    note: 'All release gates are green except for the final publish check.',
    trend: '+2.1% from yesterday'
  },
  {
    label: 'Median response time',
    value: '142ms',
    note: 'Traffic is stable and the interface is comfortably under budget.',
    trend: '-18ms over the last hour'
  },
  {
    label: 'Exception budget',
    value: '3.0%',
    note: 'A narrow production-only guard still blocks the release path.',
    trend: '1 check unresolved',
    negative: true
  }
] as const;

const feed = [
  {
    title: 'API ingest pipeline',
    detail: 'Normalization and buffering completed without backpressure.',
    time: '2m ago'
  },
  {
    title: 'Metrics sweep',
    detail: 'Telemetry summaries passed formatting and schema checks.',
    time: '8m ago'
  },
  {
    title: 'Deploy gate',
    detail: 'Production build is expected to surface a blocking release condition.',
    time: 'now'
  }
] as const;

const checklist = [
  'Dashboard shell renders with structured sections and responsive layout.',
  'Build path includes a production-only release guard.',
  'GitHub repo can be pushed and connected to Vercel for validation.'
] as const;

export default function Page() {
  const releaseWindow = getReleaseWindow();

  return (
    <main className="shell">
      <header className="topbar">
        <div className="brand">
          <span className="brand-mark" />
          Northstar Control
        </div>
        <div className="topbar-meta">
          <span className="pill">
            <span className="pill-dot" />
            Release window: {releaseWindow}
          </span>
          <span className="pill">UTC-05:00</span>
        </div>
      </header>

      <section className="hero">
        <article className="hero-card">
          <div className="eyebrow">
            <span className="eyebrow-line" />
            Operational dashboard
          </div>
          <h1>Control the release, not the noise.</h1>
          <p>
            A polished deployment dashboard that tracks readiness, latency, and publish gates in one
            place. The visual system is intentionally complete, but the production build still carries
            a hidden release constraint for deployment testing.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#feed">
              Review release stream
            </a>
            <a className="button button-secondary" href="#checks">
              Inspect validation checks
            </a>
          </div>
        </article>

        <aside className="side-panel">
          <article className="panel status-panel">
            <h2>Pipeline status</h2>
            <p>
              The interface is ready for a production push, but the build path still depends on a
              release-window variable being present when the app is compiled for production.
            </p>
            <div className="status-row">
              <span className="pill">
                <span className="pill-dot" />
                Preview stable
              </span>
              <span className="pill">3 checks</span>
            </div>
          </article>

          <article className="panel status-panel">
            <h2>Launch profile</h2>
            <p>
              The system is optimized for a clean local experience, then intentionally blocks the
              production deployment path when the release configuration is incomplete.
            </p>
          </article>
        </aside>
      </section>

      <section className="metric-grid" id="checks">
        {metrics.map((metric) => (
          <MetricCard key={metric.label} {...metric} />
        ))}
      </section>

      <section className="lower-grid" id="feed">
        <ReleaseFeed items={feed} />

        <section className="section">
          <h2>Validation notes</h2>
          <p className="muted">
            These checks describe the app structure without exposing the deployment failure in the
            README.
          </p>
          <div className="checklist">
            {checklist.map((item) => (
              <div key={item} className="checklist-item">
                <span className="checkmark" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>
      </section>

      <footer className="footer">
        A production build will stop when the release window is not configured.
      </footer>
    </main>
  );
}