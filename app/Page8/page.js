import Link from "next/link";
import "./page8.css";
import Image from "next/image";

export default function page8() {
  return (
   <div className="page">

      {/* Header */}

      <nav className="navbar">
        <div className="wrapper">
        <header>
          <div className="brand">
            <div className="logo-icon">S</div>

            <div className="logo">ScreenHunt</div>
          </div>

          <div className="text">
            Powered by the TVMaze API
          </div>
        </header>
        </div>
      </nav>
      {/*End of header*/}

<div className="wrapper">

  
    <div className="page2-container">

     <Link href="/">
<button className="backBtn">← Back to search</button>
</Link>

        <div className="details">

          {/* Poster */}

          <div className="poster">

              <Image
              src="/image/drugdealer.jpg"
              alt="Breaking Bad"
              width={186.6}
              height={280.1}
            />

          </div>

          {/* Info */}

          <div className="info">

            <h1>     Baking Mad with Eric Lanlard  </h1>

            <div className="genres">

          <span>Crime</span>


            </div>

            <hr />

            <div className="stats">

              <div>
                <p>RATING</p>
                <h3>Not rated</h3>
              </div>

              <div>
                <p>PREMIERED</p>
                <h3>2024</h3>
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

          
Middle-aged coin dealer Richard Lubbock becomes an unexpected drug kingpin when police raid his luxury London apartment expecting a major criminal.



            </p>

            <a href="#">Visit official site →</a>

          </div>

        </div>

        {/* Cast */}

       

            

          </div>

        </div>
        </div>

  );
}