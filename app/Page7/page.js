import Link from "next/link";
import "./page7.css";
import Image from "next/image";

export default function page7() {
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
              src="/image/bardely.jpg"
              alt="Breaking Bad"
              width={186.6}
              height={280.1}
            />

          </div>

          {/* Info */}

          <div className="info">

            <h1>Bradley Walsh & Son:
Breaking Dad</h1>

            <div className="genres">

          <span>Advanture</span>

          <span>Reality Tv</span>

            </div>

            <hr />

            <div className="stats">

              <div>
                <p>RATING</p>
                <h3>★ 5</h3>
              </div>

              <div>
                <p>PREMIERED</p>
                <h3>2019</h3>
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

          
Bradley Walsh is not interested in travelling the world, unlike his son Barney. Now Barney has turned 21 he's invited his dad to come with him on a coming of age road trip to the USA.

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
                   src="/image/bradley.png"
                   alt="bradley"
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
                 src="/image/armstrong.png"
                 alt="armstrong"
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
                   src="/image/danilo.png"
                   alt="dsnilo"
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