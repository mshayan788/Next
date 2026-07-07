          import Image from "next/image";
          import "./page15.css";
          import Link from "next/link";
          
          export default function Home() {
            return (
    <div className="pages-body">
    

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

 <div className="page-wrapper">

      <div className="page-container">
        <div className="heading-2">
          Find your next binge
        </div>

        <div className="text-2">
          Search thousands of TV shows. Type a title and hit search.
        </div>

<div className="page-search-container">
  <input
    type="text"
    name="page-search"
    placeholder="Breaking Bad"
    className="page-search-bar"
  />
  

  <button type="button" className="page-search-btn">
    Search
  </button>
</div>
</div>
          
<div className="page-option">
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
          
                  <section className="pages-movies">
          
          <Link href="/Page5">
          <div className="page-section-1">
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

          
          
                  </section>
                   </div>
      <div className="page-footer">
        <div className="wrapper">
        <div className="page-footer-text">
          ScreenHunt — a learning project · Data from TVMaze (free, no API key)
        </div>
      </div>
    </div>
    </div>
            );
          }
          
          
