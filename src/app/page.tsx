export default function HomePage() {
  return (
    <main className="h-screen w-screen overflow-hidden bg-black">
      <section
        style={{
          position: "absolute",
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          border: 0
        }}
        aria-hidden="false"
      >
        <h1>Мария Кочнева — персональный фитнес-тренер в Калининграде, Россия</h1>
        <p>
          Силовые тренировки, stretching, мобильность и питание для женщин. Работаю онлайн по
          всей России, включая Калининград.
        </p>
      </section>
      <iframe
        src="/landing/index.html"
        title="Мария Кочнева — фитнес-тренер в Калининграде, Россия"
        className="h-full w-full border-0"
      />
    </main>
  );
}
