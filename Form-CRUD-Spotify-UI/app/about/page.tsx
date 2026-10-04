export default function AboutPage() {
  return <main className="page">
    <header className="pageHeader"><p className="eyebrow">About</p><h1>เกี่ยวกับเว็บไซต์</h1><p>Student Hub คือโปรเจกต์สำหรับรวบรวมข้อมูลที่เกี่ยวข้องกับชีวิตนักศึกษาไว้ในพื้นที่เดียว</p></header>
    <section className="infoGrid">
      <article className="infoCard"><h2>จุดประสงค์</h2><p>ฝึกการพัฒนาเว็บไซต์ด้วย Next.js, React และ TypeScript พร้อมออกแบบ UI ที่ใช้งานง่าย</p></article>
      <article className="infoCard"><h2>เทคโนโลยี</h2><p>Next.js 16, React 19, TypeScript และ CSS แบบ custom design system</p></article>
    </section>
  </main>;
}
