// CompanyInfo.jsx
import React from "react";

export default function CompanyInfo() {
  // ダミーの会社データ
  const company = {
    name: "サンプルテクノロジーズ株式会社",
    location: "東京都港区赤坂 1-2-3",
    employees: 120,
    established: "2012年4月",
  };

  return (
    <div className="card mt-4 p-3">
      <h2>会社情報</h2>

      <table className="table table-bordered mt-3">
        <tbody>
          <tr>
            <th style={{ width: "150px" }}>会社名</th>
            <td>{company.name}</td>
          </tr>
          <tr>
            <th>所在地</th>
            <td>{company.location}</td>
          </tr>
          {/* 課題1 従業員数と設立年を表示してみよう。*/}
        </tbody>
      </table>
    </div>
  );
}
