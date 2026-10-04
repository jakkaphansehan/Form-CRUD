import Link from "next/link";

const links = [
  ["/", "หน้าแรก"],
  ["/courses", "รายวิชา"],
  ["/bands", "วงดนตรี"],
  ["/game", "เกม"],
  ["/about", "เกี่ยวกับ"],
];

export default function Navbar() {
  return (
    <nav className="navbar" aria-label="เมนูหลัก">
      <ul className="navList">
        <li>
          <Link className="brand" href="/" aria-label="Student Hub หน้าแรก">
            <span className="brandMark">S</span>
            <span className="brandText">Student Hub</span>
          </Link>
        </li>
        {links.slice(1).map(([href, label]) => (
          <li key={href}>
            <Link className="navLink" href={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
