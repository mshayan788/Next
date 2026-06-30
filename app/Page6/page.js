import Link from "next/link";
import "./page6.css";
import Image from "next/image";

export default function page6() {
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
</
Link>

        <div className="details">

          {/* Poster */}

          <div className="poster">

              <Image
              src="/image/theband.jpg"
              alt="Breaking Bad"
              width={186.6}
              height={280.1}
            />

          </div>

          {/* Info */}

          <div className="info">

            <h1>Breaking The Band</h1>

            <div className="genres">

          <span>TV Series</span>

            </div>

            <hr />

            <div className="stats">

              <div>
                <p>RATING</p>
                <h3>Not rated</h3>
              </div>

              <div>
                <p>PREMIERED</p>
                <h3>2018</h3>
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

          
Explores the real life break-ups of popular music groups.

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
                   src="/image/sammy.png"
                   alt="sammy"
                   width={180}
                   height={250}
                   />
                   
                   <div>
                   <h4>Sammy Jonas Heaney</h4>
                   <p>Brand</p>
                   </div>
                   </div>
                 
       
                   <div className="castCard">
                 <Image
                 src="/image/dee.png"
                 alt="dee"
                 width={180}
                 height={250}
                 />
                   <div>
                   <h4>Dee Snider</h4>
                   <p>Self-Narrotor</p>
                   </div>
                   </div>
       
       
                   <div className="castCard">
                               <Image
                   src="/image/ho.png"
                   alt="ho"
                   width={180}
                   height={250}
                   />
                   <div>
                   <h4>Judy Ho</h4>
                   <p>Self</p>
                   </div>
                   </div>
                   </div>
                   </div>
                   </div>
                   </div>
  );
}