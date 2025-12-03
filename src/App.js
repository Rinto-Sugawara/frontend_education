import React, { useState } from "react";

export default function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const json = await res.json();
    setData(json);
    setLoading(false);
  };

  return (
    <div className="container">
      <h1>React から API を叩くデモ</h1>
      <button onClick={fetchData} disabled={loading}>
        {loading ? "読み込み中..." : "API を呼び出す"}
      </button>

      {data && (
        <div className="card">
          <h2>{data.title}</h2>
          <p>{data.body}</p>
        </div>
      )}
    </div>
  );
}
