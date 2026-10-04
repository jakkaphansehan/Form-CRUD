import React from "react";

export interface Course { id?: number; courseCode?: string; title?: string; name?: string; credits?: number; status?: string; image?: string; imageUrl?: string; }
export interface Member { id: number; name: string; role: string; imageUrl?: string; image?: string; }
export interface Band { id: number; name: string; genre: string; imageUrl?: string; image?: string; members?: Member[]; }
interface CourseCardProps { course?: Course; band?: Band; }

export default function CourseCard({ course, band }: CourseCardProps) {
  if (band) {
    const bandImg = band.imageUrl || band.image;
    return <article className="courseCard">
      {bandImg && <img className="bandImage" src={bandImg} alt={band.name} />}
      <h2>{band.name}</h2><p className="genre">{band.genre}</p>
      {band.members?.length ? <div className="memberList">
        <p className="memberTitle">สมาชิกในวง</p>
        {band.members.map((m) => <div className="member" key={m.id}>
          <img src={m.imageUrl || m.image} alt="" />
          <div><div className="memberName">{m.name}</div><div className="memberRole">{m.role}</div></div>
        </div>)}
      </div> : null}
    </article>;
  }

  if (course) return <article className="courseCard">
    <p className="eyebrow">Course</p>
    <h2>{course.title || course.name}</h2>
    <p>รหัสวิชา {course.courseCode || course.id}</p>
    <div className="courseMeta">
      <span className="pill">{course.credits} หน่วยกิต</span>
      <span className={`pill ${course.status === "ปิดลงทะเบียน" ? "closed" : "active"}`}>{course.status || "เปิดลงทะเบียน"}</span>
    </div>
  </article>;

  return null;
}
