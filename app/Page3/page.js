import Link from "next/link";
import "./page3.css";
import Image from "next/image";

export default function page3() {
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
              src="/image/minisodes.jpg"
              alt="Breaking Bad"
              width={186.6}
              height={280.1}
            />

          </div>

          {/* Info */}

          <div className="info">

            <h1>Breaking Bad:
Original Minisodes</h1>

            <div className="genres">

              <span>Comedy</span>

              <span>Crime</span>


            </div>

            <hr />

          <div className="stats">

              <div>
                <p>RATING</p>
                <div className="rating">
                <span className="star">★</span>
                <span className="rating-value">7</span>
                
                </div>
              </div>

              <div>
                <p>PREMIERED</p>
                <h3>2009</h3>
              </div>

              <div>
                <p>STATUS</p>
                <h3>Ended</h3>
              </div>

              <div>
                <p>RUNTIME</p>
                <h3>30 min</h3>
              </div>

              <div>
                <p>LANGUAGE</p>
                <h3>English</h3>
              </div>

            </div>

            <hr />

            <p className="description">

           A side series that focuses on the other scenarios revolving around the characters of Breaking Bad.

            </p>

            <a href="#">Visit official site →</a>

          </div>

        </div>

              {/* cast */}
      
              <div className="castSection">
                  
                            <h2>Cast</h2>
                                           
                                                     <div className="castContainer">
                                           
                                                       <div className="castCard">
                                                       <Image
                                                       src="/image/white.png"
                                                       alt="white"
                                                       width={180}
                                                       height={250}
                                                       />
                                                       
                                                       <div>
                                                       <h4>Bryan Cranston</h4>
                                                       <p>as Walter White</p>
                                                       </div>
                                                       </div>
                                                     
                                           
                                                       <div className="castCard">
                                                     <Image
                                                     src="/image/paul.jpg"
                                                     alt="paul"
                                                     width={180}
                                                     height={250}
                                                     />
                                                       <div>
                                                       <h4>Aaron Paul</h4>
                                                       <p>as Jesse Pinkman</p>
                                                       </div>
                                                       </div>
                                                       
                                                         <div className="castCard">
                                                                               <Image
                                                                               src="/image/gun.png"
                                                                               alt="gun"
                                                                               width={180}
                                                                               height={250}
                                                                               />
                               
                                                                               <div>
                                                                               <h4>Anna Gun</h4>
                                                                               <p>as Mrs White</p>
                                                                               </div>
                                                                               </div>
                           
                                                                              <div className="castCard">
                                                                               <Image
                                                                               src="/image/jr.png"
                                                                               alt="jr"
                                                                               width={180}
                                                                               height={250}
                                                                               />
                               
                                                                               <div>
                                                                               <h4>RJ Mitte</h4>
                                                                               <p>as Jr White</p>
                                                                               </div>
                                                                               </div>
                                                                              <div className="castCard">
                                                                             <Image
                                                                             src="/image/daen.jpg"
                                                                             alt="matt"
                                                                             width={180}
                                                                             height={250}
                                                                             />
                                                                               <div>
                                                                               <h4>Dean Norris</h4>
                                                                               <p>as hank</p>
                                                                               </div>
                                                                               </div>
                                           
                                                       <div className="castCard">
                                                       <Image
                                                       src="/image/betsy.png"
                                                       alt="betsy"
                                                       width={180}
                                                       height={250}
                                                       />
                                                       <div>
                                                       <h4>Betsy Brandt</h4>
                                                       <p> as marie</p>
                                                       </div>
                                                       </div>                                         
                               </div>
                               </div>
                               </div>
                               </div>
                               </div>
                             );
                           }