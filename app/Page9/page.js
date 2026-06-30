import Link from "next/link";
import "./page9.css";
import Image from "next/image";

export default function page9() {
  return (
   <div className="page">

      {/* Header */}

      <nav className="navbar">
        <header>
          <div className="brand">
            <div className="logo-icon">S</div>

            <div className="logo">
              ScreenHunt
            </div>
          </div>

          <div className="text">
            Powered by the TVMaze API
          </div>
        </header>
      </nav>
      {/*End of header*/}

      <div className="container">

      <Link href="/">
<button className="backBtn">← Back to search</button>
</Link> 

        <div className="details">

          {/* Poster */}

          <div className="poster">

              <Image
              src="/image/lanlard.jpg"
              alt="Breaking Bad"
              width={186.6}
              height={280.1}
            />

          </div>

          {/* Info */}

          <div className="info">

            <h1>Baking Mad with Eric
Lanlard</h1>

            <div className="genres">

          <span>Food</span>

         

            </div>

            <hr />

            <div className="stats">

              <div>
                <p>RATING</p>
                <h3>Not Rated</h3>
              </div>

              <div>
                <p>PREMIERED</p>
                <h3>2011</h3>
              </div>

              <div>
                <p>STATUS</p>
                <h3>Ended</h3>
              </div>


              <div>
                <p>LANGUAGE</p>
                <h3>English</h3>
              </div>

            </div>

            <hr />

            <p className="description">

          
Master Patissier Eric Lanlard, explores the appetizing world of baking. We follow Eric as he shows us his hot tips and easy to follow recipes, meets "baking club" enthusiasts and holds daily bake offs to find some home grown baking talent.

            </p>

            <a href="#">Visit official site →</a>

          </div>

        </div>



        {/* Cast */}

        <div className="castSection">

          <h2>Cast</h2>

          <div className="castContainer">

            <div className="castCard">
            <Image
            src="/image/eric.png"
            alt="eric"
            width={180}
            height={250}
            />
            
            <div>
            <h4>Bradley Walsh</h4>
            <p>Self</p>
            </div>
            </div>
          

            <div className="castCard">
          <Image
          src="/image/hurly.png"
          alt="hurly"
          width={180}
          height={250}
          />
            <div>
            <h4>Alexander Armstrong</h4>
            <p>Self-Narrotor</p>
            </div>
            </div>


            <div className="castCard">
                        <Image
            src="/image/terry.png"
            alt="terry"
            width={180}
            height={250}
            />
            <div>
            <h4>Danilo Pérez</h4>
            <p>Self</p>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
   
  );
}
