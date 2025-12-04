import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState("");

  const fetchData = async () => {
    if (!id) return alert("IDを入力してください（1〜10）");

    setLoading(true);
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const json = await res.json();
    setData([json]);
    setLoading(false);
  };

  return (
    <div className="container mt-4">
      <h1>チーム管理</h1>

      <Form.Group className="mb-3" style={{ maxWidth: "300px" }}>
        <Form.Label>取得するユーザーID（1〜10）</Form.Label>
        <Form.Control
          type="number"
          min="1"
          max="10"
          placeholder="例：1"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <Form.Text className="text-muted">
          ※1〜10 のユーザーIDで入力してください
        </Form.Text>
      </Form.Group>

      <Button variant="primary" onClick={fetchData} disabled={loading}>
        {loading ? "読み込み中..." : "ユーザーを取得"}
      </Button>

      {data && Array.isArray(data) && (
        <div className="card mt-4 p-3">
          <h2>ユーザー一覧</h2>

          <table className="table table-bordered mt-3">
            <thead>
              <tr>
                <th>ID</th>
                <th>名前</th>
                <th>Email</th>
                <th>住所</th>
              </tr>
            </thead>
            <tbody>
              {data.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.address.street}, {user.address.city}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
