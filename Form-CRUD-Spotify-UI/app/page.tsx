import Link from "next/link";

export default function HomePage() {
  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">Student Hub</p>
        <h1>ทุกอย่างของนักศึกษา<br />รวมไว้ในที่เดียว</h1>
        <p>เว็บไซต์รวบรวมรายวิชา วงดนตรีที่ชอบ และเกมที่กำลังเล่น ด้วยหน้าตาที่เรียบ เท่ และใช้งานง่าย</p>
      </section>

      <section className="section">
        <div className="sectionTitle">
          <h2>สำรวจเว็บไซต์</h2>
        </div>
        <div className="courseGrid">
          <Link className="courseCard" href="/courses" style={{ textDecoration: "none" }}>
            <p className="eyebrow">01</p><h2>รายวิชา</h2><p>ดูรหัสวิชา หน่วยกิต และสถานะการลงทะเบียน</p>
          </Link>
          <Link className="courseCard" href="/bands" style={{ textDecoration: "none" }}>
            <p className="eyebrow">02</p><h2>วงดนตรี</h2><p>รวมวงดนตรีที่ชอบ พร้อมข้อมูลสมาชิกและแนวเพลง</p>
          </Link>
          <Link className="courseCard" href="/game" style={{ textDecoration: "none" }}>
            <p className="eyebrow">03</p><h2>Game Tracker</h2><p>เพิ่ม แก้ไข และติดตามเกมที่เล่นผ่าน localStorage</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
