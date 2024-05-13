import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function PlanetPage({ planets }) {
  const { name } = useParams();
  const planet = planets.find((planet) => planet.name === name);

  const [selectImageType, setImageType] = useState("overview");
const [overviewColorBtn, setOverviewColorBtn] = useState(null);
const [internalColorBtn, setInternalColorBtn] = useState(null);
const [geologyColorBtn, setGeologyColorBtn] = useState(null);

  const planetColors = {
    Mercury: "#419ebb",
    Venus: "#eda249",
    Earth: "#6f2ed6",
    Mars: "#d14c32",
    Jupiter: "#d83a34",
    Saturn: "#cd5120",
    Uranus: "#1ec2a4",
    Neptune: "#2d68f0",
  };

 useEffect(() => {
  setImageType('overview');
  setOverviewColorBtn(null);
  setInternalColorBtn(null);
  setGeologyColorBtn(null);
 }, [name]);

  const handleImageTypeButton = (imageType) => {
    setImageType(imageType);


    const color = planetColors[name];
    switch (imageType) {
      case "overview":
        setOverviewColorBtn(color);
        setInternalColorBtn(null);
        setGeologyColorBtn(null);
        break;
      case "internal":
        setInternalColorBtn(color);
        setOverviewColorBtn(null);
        setGeologyColorBtn(null);
        break;
      case "geology":
        setGeologyColorBtn(color);
        setOverviewColorBtn(null);
        setInternalColorBtn(null);
        break;
      default:
        break;
    }
  };


  return (
    <main>
      <div className="flex">
        <div className="img-box">
          {selectImageType === "overview" && (
            <img src={planet.images.planet} alt={planet.name} />
          )}

          {selectImageType === "internal" && (
            <img src={planet.images.internal} alt={planet.name} />
          )}

          {selectImageType === "geology" && (
            <>
              <img
                className="img-planet"
                src={planet.images.planet}
                alt={planet.name}
              />
              <img
                className={
                  planet.name === "Saturn"
                    ? "img-geology-saturn"
                    : "img-geology"
                }
                src={planet.images.geology}
                alt={planet.name}
              />
            </>
          )}
        </div>

        <div className="container-about-planet">
          <div>
            <h1 className="planet-name">{planet.name}</h1>
            <p className="planet-description">{planet.overview.content}</p>
            <p>
              <span className="span">Source :</span>{" "}
              <Link className="planet-wiki-link" to={planet.overview.source}>
                Wikipedia
              </Link>
            </p>
          </div>
          <div className="buttons-box">
          
            <button
              style={ { backgroundColor: overviewColorBtn }}
              onClick={() => handleImageTypeButton("overview")}
            >
        
              <span>01</span>OVERVIEW
            </button>

         
            <button
            style={{ backgroundColor: internalColorBtn }}
              onClick={() => handleImageTypeButton("internal")}
            >
              <span>02</span>INTERNAL STRUCTURE
            </button>

            <button
            style={{ backgroundColor: geologyColorBtn }}
              onClick={() => handleImageTypeButton("geology")}
            >
              <span>03</span>SURFACE GEOLOGY
            </button>
          </div>
        </div>
      </div>

      <div className="container-planet-facts">
        <div>
          <p>ROTATION TIME</p>
          <h3>{planet.rotation}</h3>
        </div>
        <div>
          <p>REVOLUTION TIME</p>
          <h3>{planet.revolution}</h3>
        </div>
        <div>
          <p>RADIUS</p>
          <h3>{planet.radius}</h3>
        </div>
        <div>
          <p>AVERAGE TEMP.</p>
          <h3>{planet.temperature}</h3>
        </div>
      </div>
    </main>
  );
}

// className={planet.name ? {backgroundColor: planetColors[planet.name]} : ''}
