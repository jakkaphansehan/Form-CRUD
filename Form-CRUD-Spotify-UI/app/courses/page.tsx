import CourseCard, { Course } from "@/components/CourseCard";

const coursesData: Course[] = [
  { id: 10301231, courseCode: "10301231", title: "Web Technology", credits: 3, status: "เปิดลงทะเบียน" },
  { id: 10301232, courseCode: "10301232", title: "Database Systems", credits: 3, status: "ปิดลงทะเบียน" },
  { id: 10301233, courseCode: "10301233", title: "Computer Programming", credits: 3, status: "เปิดลงทะเบียน" },
];

export default function CoursesPage() {
  return (
    <main className="page">
      <header className="pageHeader"><p className="eyebrow">Academics</p><h1>รายวิชาทั้งหมด</h1><p>ข้อมูลรายวิชาสำหรับการวางแผนการเรียน</p></header>
      <section className="courseGrid">
        {coursesData.map((course) => <CourseCard key={course.id} course={course} />)}
      </section>
    </main>
  );
}
