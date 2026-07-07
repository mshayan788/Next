import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="body">
    

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

      {/*Wrapper */}

 <div className="wrapper">

      <div className="container">
        <div className="heading-2">
          Find your next binge
        </div>

        <div className="text-2">
          Search thousands of TV shows. Type a title and hit search.
        </div>

<div className="search-container">
  <input
    type="text"
    name="search"
    placeholder="Breaking Bad"
    className="search-bar"
  />
  

  <button type="button" className="search-btn">
    Search
  </button>
</div>
</div>
      

      <div className="option">
        <Link href="/">
          <button type="button">ALL</button>
        </Link>

        <Link href="/Page10">
          <button type="button">Adventure</button>
        </Link>

        <Link href="/Page11">
          <button type="button">Comedy</button>
        </Link>

        <Link href="/Page12">
          <button type="button">Crime</button>
        </Link>

        <Link href="/Page13">
          <button type="button">Drama</button>
        </Link>

        <Link href="/Page14">
          <button type="button">Food</button>
        </Link>

        <Link href="/Page15">
          <button type="button">Music</button>
        </Link>

        <Link href="/Page16">
          <button type="button">Travel</button>
        </Link>

        <Link href="/Page17">
          <button type="button">Thriller</button>
        </Link>
      </div>

      <div className="total-shows">8 Shows</div>
      

      <section className="movies">
        <Link href="/Page2">
          <div className="section-1">
            <Image
              src="/image/first.jpg"
              alt="Breaking Bad"
              width={186.6}
              height={280.1}
            />

<div className="info-1">
  <h3>Breaking Bad</h3>

  <div className="rating">
    <span className="star">★</span>
    <span className="score">9.2</span>
    <span className="genre">Drama</span>
  </div>
</div>
          </div>
        </Link>

        <Link href="/Page3">
          <div className="section-1">
            <Image
              src="/image/second.jpg"
              alt="Breaking Bad: Original Minisodes"
              width={186.6}
              height={280.1}
            />

           <div className="info-1">
  <h3>Breaking Bad: Original Minisodes</h3>

  <div className="rating">
    <span className="star">★</span>
    <span className="score">7</span>
    <span className="genre">Comedy</span>
  </div>
</div>
          </div>
        </Link>

        <Link href="/Page4">
          <div className="section-1">
            <Image
              src="/image/third.jpg"
              alt="Talking Bad"
              width={186.6}
              height={280.1}
            />

                       <div className="info-1">
  <h3>Talking bad</h3>

  <div className="rating">
    <span className="genre">Not Rated</span>
  </div>
</div>
          </div>
        </Link>

        <Link href="/Page5">
          <div className="section-1">
            <Image
              src="/image/fourth.jpg"
              alt="Breaking Band"
              width={186.6}
              height={280.1}
            />
                       <div className="info-1">
  <h3>Breaking Band</h3>
  <div className="rating">
    <span className="genre">Not Rated</span>
    <span className="genre">Music</span>

  </div>
</div>
          </div>
        </Link>

        <Link href="/Page6">
          <div className="section-1">
            <Image
              src="/image/fifth.jpg"
              alt="Bradley Walsh & Son: Breaking Dad"
              width={186.6}
              height={280.1}
            />

  <div className="info-1">
  <h3>Breaking the Band</h3>
  <div className="rating">
    <span className="genre">Not Rated</span>

  </div>
</div>
          </div>
        </Link>

        <Link href="/Page7">
          <div className="section-1">
            <Image
              src="/image/sixth.jpg"
              alt="Breaking Dad: Britain's Unlikeliest Drug Dealer"
              width={186.6}
              height={280.1}
            />

  <div className="info-1">
  <h3>Bradley Walsh &amp; Son: Breaking Dad</h3>
  <div className="rating">
    <span className="star">★</span>
    <span className="score">5.0</span>
    <span className="genre">Advanture</span>

  </div>
</div>
          </div>
        </Link>

        <Link href="/Page8">
          <div className="section-1">
            <Image
              src="/image/seventh.jpg"
              alt="Baking Mad with Eric Lanlard"
              width={186.6}
              height={280.1}
            />

  <div className="info-1">
<h3>Breaking Dad: Britain's Unlikeliest Drug Dealer</h3>
  <div className="rating">
    <span className="genre">Not Rated</span>
    <span className="genre">Crime</span>

  </div>
</div>
          </div>
        </Link>

        <Link href="/Page9">
          <div className="section-1">
            <Image
              src="/image/eighth.jpg"
              alt="Breaking the Band"
              width={186.6}
              height={280.1}
            />

  <div className="info-1">
  <h3>Baking Mad with Eric
Lanlard</h3>
  <div className="rating">
    <span className="genre">Not Rated</span>
    <span className="genre">Food</span>

  </div>
</div>
          </div>
        </Link>
      </section>

</div>
      <div className="footer">
        <div className="wrapper">
        <div className="footer-text">
          ScreenHunt — a learning project · Data from TVMaze (free, no API key)
        </div>
      </div>
    </div>
    </div>
    
    
    
  );
}