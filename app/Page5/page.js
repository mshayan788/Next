import Link from "next/link";
import "./page5.css";
import Image from "next/image";

export default function page5() {
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
              src="/image/band.jpg"
              alt="Breaking Bad"
              width={186.6}
              height={280.1}
            />

          </div>

          {/* Info */}

          <div className="info">

            <h1>Breaking Band</h1>

            <div className="genres">

          <span>Music</span>

            </div>

            <hr />

            <div className="stats">

              <div>
                <p>RATING</p>
                <h3>Not rated</h3>
              </div>

              <div>
                <p>PREMIERED</p>
                <h3>2015</h3>
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

         BREAKING BAND, a new original series from AXS TV. The six-episode 30-minute documentary style reality series places legendary musical artists into the role of mentors, pairing them with up-and-coming artists for a once in a lifetime collaboration. This seasons mentors are musician and TV personality Mark McGrath (Sugar Ray), pop queen Belinda Carlisle (The Go-Go's), rock legend Robin Zander (Cheap Trick), award winning producer and techno icon Moby, metal master Sebastian Bach (Skid Row), and guitar idol Dave Navarro (Janes Addiction). As mentors, their role is to share advice and to support the breaking artists debut live performance - potentially even taking the stage to join them for the encore to make broadcast history. The series was shot at YouTube Space LA.

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
                        <p>as Brand</p>
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
                        <p>as Self-Narrotor</p>
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
                        <p>as Self</p>
                        </div>
                        </div>
                        </div>
                        </div>
                        </div>
                        </div>
                        </div>
  );
}