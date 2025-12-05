import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CompanyInfo from "./CompanyInfo";
import UserDetailModal from "./UserDetailModal"; // ← 追加

export default function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState("");

  const [show, setShow] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (user) => {
    setSelectedUser(user);
    setShow(true);
  };

  const fetchData = async () => {
    if (!id) return alert("IDを入力してください（1〜10）");

    setLoading(true);
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const json = await res.json();
    setData([json]);
    setLoading(false);
  };

  // 課題3 チームメンバー全員の情報を取得する関数を作成してみよう
  const fetchAllData = async () => {
    // 全員分のデータを取得するAPI
    // https://jsonplaceholder.typicode.com/users
    setLoading(true);
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const json = await res.json();
    setData(json);
    setLoading(false);
  };

  return (
    <div className="container mt-4">
      <h1>チーム管理</h1>

      <Form.Group className="mb-3" style={{ maxWidth: "300px" }}>
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

      <Button
        variant="primary"
        onClick={fetchData}
        disabled={loading}
        className="me-3"
      >
        {loading ? "読み込み中..." : "ユーザーを取得"}
      </Button>

      {/* 課題2 チームメンバー全員の情報を取得するボタンを表示してみよう*/}
      {/* 課題3 ボタンを押したらチームメンバー全員の情報が表示されるようにしよう*/}
      <Button
        variant="success"
        onClick={fetchAllData}
        disabled={loading}
        className="me-3"
      >
        {loading ? "読み込み中..." : "全ユーザーを取得"}
      </Button>

      {data && Array.isArray(data) && (
        <div className="card mt-4 p-3">
          <h2>ユーザ一覧</h2>

          {/* 課題4 表に詳細ボタンを追加して、メンバーの詳細画面を別画面に表示させてみよう*/}
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
                  <td>
                    <Button
                      variant="info"
                      size="sm"
                      onClick={() => handleShow(user)}
                    >
                      詳細
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <UserDetailModal show={show} onClose={handleClose} user={selectedUser} />
      {/* 課題1 会社情報を表示してみよう */}
      <CompanyInfo />
    </div>
  );
}
