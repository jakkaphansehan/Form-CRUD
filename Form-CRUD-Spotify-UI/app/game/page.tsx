"use client";

import { useEffect, useState } from "react";

type Game = {
  id: number;
  name: string;
  platform: string;
  hours: number;
  status: string;
};

const initialGames: Game[] = [
  { id: 1, name: "ROV", platform: "Mobile", hours: 200, status: "กำลังเล่น" },
  { id: 2, name: "Free Fire", platform: "Mobile", hours: 150, status: "กำลังเล่น" },
  { id: 3, name: "Minecraft", platform: "PC / Mobile", hours: 300, status: "กำลังเล่น" },
  { id: 4, name: "Genshin Impact", platform: "PC / Mobile", hours: 250, status: "กำลังเล่น" },
  { id: 5, name: "Valorant", platform: "PC", hours: 180, status: "เล่นจบแล้ว" },
];

export default function GamesPage() {
  const [games, setGames] = useState<Game[]>([]);
  const [form, setForm] = useState({ name: "", platform: "", hours: "", status: "ยังไม่เริ่ม" });
  const [editingId, setEditingId] = useState<number | null>(null);

  // โหลดและบันทึกข้อมูล localStorage
  useEffect(() => {
    const saved = localStorage.getItem("games");
    if (saved) setGames(JSON.parse(saved));
    else {
      setGames(initialGames);
      localStorage.setItem("games", JSON.stringify(initialGames));
    }
  }, []);

  useEffect(() => {
    if (games.length > 0) localStorage.setItem("games", JSON.stringify(games));
  }, [games]);

  // จัดการฟอร์ม
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.platform || !form.hours) return alert("กรุณากรอกข้อมูลให้ครบ");

    if (editingId) {
      setGames(games.map(g => g.id === editingId ? { ...g, ...form, hours: Number(form.hours) } : g));
      setEditingId(null);
    } else {
      setGames([...games, { id: Date.now(), ...form, hours: Number(form.hours) }]);
    }
    clearForm();
  };

  const handleEdit = (game: Game) => {
    setEditingId(game.id);
    setForm({ name: game.name, platform: game.platform, hours: String(game.hours), status: game.status });
  };

  const handleDelete = (id: number) => {
    if (confirm("ต้องการลบเกมนี้หรือไม่?")) setGames(games.filter(g => g.id !== id));
  };

  const clearForm = () => {
    setForm({ name: "", platform: "", hours: "", status: "ยังไม่เริ่ม" });
    setEditingId(null);
  };

  return (
    <main className="page gamePage">
      <header className="pageHeader"><p className="eyebrow">Gaming</p><h1>Game Tracker</h1><p>จัดการรายการเกมที่กำลังเล่นและประวัติการเล่นของคุณ</p></header>

      {/* ฟอร์มเพิ่ม/แก้ไข */}
      <form onSubmit={handleSubmit} className="form-card">
        <h3>{editingId ? "✏️ แก้ไขรายการเกม" : "➕ เพิ่มเกมใหม่"}</h3>
        
        <input name="name" placeholder="ชื่อเกม" value={form.name} onChange={handleChange} />
        <input name="platform" placeholder="แพลตฟอร์ม (เช่น PC, Mobile)" value={form.platform} onChange={handleChange} />
        <input name="hours" type="number" placeholder="ชั่วโมงที่เล่น" value={form.hours} onChange={handleChange} />
        
        <select name="status" value={form.status} onChange={handleChange}>
          <option value="ยังไม่เริ่ม">ยังไม่เริ่ม</option>
          <option value="กำลังเล่น">กำลังเล่น</option>
          <option value="เล่นจบแล้ว">เล่นจบแล้ว</option>
        </select>

        <div className="btn-group">
          <button type="submit" className="btn-primary">{editingId ? "อัปเดต" : "เพิ่มข้อมูล"}</button>
          {editingId && <button type="button" onClick={clearForm} className="btn-secondary">ยกเลิก</button>}
        </div>
      </form>

      {/* รายการเกม */}
      <div className="list">
        {games.map((g) => (
          <div key={g.id} className="card">
            <div className="card-info">
              <h4>{g.name}</h4>
              <p>{g.platform} • {g.hours} ชม. • <span className={`status status-${g.status}`}>{g.status}</span></p>
            </div>
            <div className="btn-group">
              <button onClick={() => handleEdit(g)} className="btn-edit">แก้ไข</button>
              <button onClick={() => handleDelete(g.id)} className="btn-delete">ลบ</button>
            </div>
          </div>
        ))}
      </div>


    </main>
  );
}