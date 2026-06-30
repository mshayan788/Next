import Link from "next/link";
import "./page4.css";
import Image from "next/image";

export default function page4() {
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
              src="/image/talking.jpg"
              alt="Breaking Bad"
              width={186.6}
              height={280.1}
            />

          </div>

          {/* Info */}

          <div className="info">

            <h1>Talking Bad</h1>

            <div className="genres">

          <span>TV Show</span>

            </div>

            <hr />

            <div className="stats">

              <div>
                <p>RATING</p>
                <h3>Not rated</h3>
              </div>

              <div>
                <p>PREMIERED</p>
                <h3>2013</h3>
              </div>

              <div>
                <p>STATUS</p>
                <h3>Ended</h3>
              </div>

              <div>
                <p>RUNTIME</p>
                <h3>22 min</h3>
              </div>

              <div>
                <p>LANGUAGE</p>
                <h3>English</h3>
              </div>

            </div>

            <hr />

            <p className="description">

          A talk show about Breaking Bad (2008).

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
                        <p>Walter White</p>
                        </div>
                        </div>
                      
            
                        <div className="castCard">
                      <Image
                      src="/image/paul.png"
                      alt="paul"
                      width={180}
                      height={250}
                      />
                        <div>
                        <h4>Aaron Paul</h4>
                        <p>Jesse Pinkman</p>
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
                        <p>Marie</p>
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
                                                <p>Jr White</p>
                                                </div>
                                                </div>
                                                
                                              
                                    
                                                <div className="castCard">
                                              <Image
                                              src="/image/matt.png"
                                              alt="matt"
                                              width={180}
                                              height={250}
                                              />
                                                <div>
                                                <h4>Matt Jones</h4>
                                                <p>Badger</p>
                                                </div>
                                                </div>
                                    
                                    
                                                
                                               
</div>
</div>
</div>
</div>
 
                                           



  );
}
                    