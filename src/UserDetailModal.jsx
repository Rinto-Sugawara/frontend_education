import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function UserDetailModal({ show, onClose, user }) {
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>ユーザー詳細</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {user ? <pre>{JSON.stringify(user, null, 2)}</pre> : "データなし"}
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          閉じる
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
