import TypedComponent from "../TypingComponent";

export default function Home() {
  return (
    <main className="mainContent">
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="home">
        <h1>Toma Gabriela-Alexandra</h1>
        <h2>
          <TypedComponent />
        </h2>
        <p className="description">
          Building brick by brick each day, untill I'm able to create anything
          that I can imagine.
        </p>
      </div>
    </main>
  );
}
