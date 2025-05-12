import React, { useState, useRef, useCallback } from "react";

const generateItems = (start, count) => {
  return Array.from({ length: count }, (_, i) => `Item ${start + i + 1}`);
};

function InfiniteScroll() {
  const [items, setItems] = useState(() => generateItems(0, 20));
  const [hasMore, setHasMore] = useState(true);
  const loader = useRef(null);

  const loadMore = useCallback(() => {
    setTimeout(() => {
      setItems((prev) => {
        if (prev.length >= 100) {
          setHasMore(false);
          return prev;
        }
        return [...prev, ...generateItems(prev.length, 20)];
      });
    }, 500);
  }, []);

  React.useEffect(() => {
    if (!hasMore) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      },
      { threshold: 1 }
    );
    if (loader.current) observer.observe(loader.current);
    return () => {
      if (loader.current) observer.unobserve(loader.current);
    };
  }, [loadMore, hasMore]);

  return (
    <div
      style={{
        height: 500,
        overflow: "auto",
        border: "1px solid #ccc",
        padding: 16,
      }}
    >
      <ul style={{ margin: 0, padding: 0 }}>
        {items.map((item, idx) => (
          <li key={idx} style={{ padding: 8, borderBottom: "1px solid #eee" }}>
            {item}
          </li>
        ))}
      </ul>
      {hasMore && (
        <div ref={loader} style={{ padding: 16, textAlign: "center" }}>
          Loading...
        </div>
      )}
      {!hasMore && (
        <div style={{ padding: 16, textAlign: "center" }}>No more items</div>
      )}
    </div>
  );
}

export default InfiniteScroll;
