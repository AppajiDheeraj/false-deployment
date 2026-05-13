type MetricCardProps = {
  label: string;
  value: string;
  note: string;
  trend: string;
  negative?: boolean;
};

export function MetricCard({ label, value, note, trend, negative = false }: MetricCardProps) {
  return (
    <article className="metric-card">
      <p className="muted">{label}</p>
      <div className="metric-value">{value}</div>
      <div className={`metric-trend${negative ? ' negative' : ''}`}>{trend}</div>
      <p style={{ marginTop: '14px' }}>{note}</p>
    </article>
  );
}