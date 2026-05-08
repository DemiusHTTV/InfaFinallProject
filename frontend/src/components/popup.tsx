import { useState } from "react";
import { sendRequest } from "requestForm";

export function RequestModal({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleSubmit = async () => {
    try {
      await sendRequest(form);
      onClose();
    } catch (error) {
      console.error("Error sending request:", error);
    }
  };

  return (
    <div className="modal">
      <input
        placeholder="Имя"
        value={form.name}
        onChange={(e) =>
          setForm({ ...form, name: e.target.value })
        }
      />

      <input
        placeholder="Email"
        value={form.email}
        onChange={(e) =>
          setForm({ ...form, email: e.target.value })
        }
      />

      <input
        placeholder="Телефон"
        value={form.phone}
        onChange={(e) =>
          setForm({ ...form, phone: e.target.value })
        }
      />

      <button onClick={handleSubmit}>Отправить</button>
      <button onClick={onClose}>Закрыть</button>
    </div>
  );
}