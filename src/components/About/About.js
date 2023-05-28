import React from "react";
import "../About/About.css";

function About() {
  return (
    <>
      <header className="about-header">
        <div className="about">
          <h1>Over Ons</h1>
        </div>
      </header>

      <main>
        <section className="flex">
          <div className="image1"></div>
          <div className="about-info">
            <h2>
            Welkom bij  <br />
              het Bossche-Delicious Restaurant 
            </h2>
            <p>
            Wij zijn een banketbakkerij gespecialiseerd in chocolade en honing.
            Alle taarten, koekjes, en gebak zijn handgemaakt en alle producten die we gebruiken, zoals honing en chocolade, zijn door ons op qualiteit gekeurd.
            Echt heerlijk, dat moet je komen proeven.
            </p>
          </div>
        </section>
        <section className="flex flex-reverse">
          <div className="image2"></div>
          <div className="about-info">
            <h2>
              Ontdek ons ​​restaurantverhaal<br /> 
            
            </h2>
            <p>
            Ons verhaal:
            120 jaar geleden begon mijn overgrootvader een banketbakkerij in Frankrijk die gespecialiseerd was in chocolade producten. Mijn grootvader is naar Nederland ge-emigreerd en is ook hier een banketbakkerij begonnen.
            Dit is de basis waar we al 3 generaties op doorbouwen. Elke generatie heeft daar nieuwe kennis aan toegevoegd en recepten gecombineerd met locale Nederlandse lekkernijen. Smullen maar!
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default About;

