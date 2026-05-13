type FeedItem = {
  title: string;
  detail: string;
  time: string;
};

type ReleaseFeedProps = {
  items: readonly FeedItem[];
};

export function ReleaseFeed({ items }: ReleaseFeedProps) {
  return (
    <section className="feed">
      <h2>Release stream</h2>
      <p>Recent operational changes and checks that are tracked before launch.</p>
      <div className="feed-list">
        {items.map((item) => (
          <div key={item.title} className="feed-item">
            <div>
              <strong>{item.title}</strong>
              <span className="muted">{item.detail}</span>
            </div>
            <span>{item.time}</span>
          </div>
        ))}
      </div>
    </section>
  );
}