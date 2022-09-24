import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

fetch('http://localhost:8080/api/v1/movies')
    .then(response => response.json())
    .then(data => console.log(data))

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="outer-div">
          <div className="movie-card">

              <div className="about-movie">
                  <div className="nav">
                      <nav className="main-nav">
                          <a id="about" href="/about" data-link>About</a>
                          <a id="trailers" href="/trailers" data-link>Trailers</a>
                          <a id="featured" href="/featured" data-link>Featured</a>
                          <a id="gallery" href="/gallery" data-link>Gallery</a>
                      </nav>
                  </div>
                  <div className="movie-description">
                      <h1 className="movie-title">Movie</h1>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum nunc felis, in mattis massa mattis eu. Donec in turpis finibus, consequat massa vitae, eleifend elit. Morbi elementum consectetur elit at mattis. Duis ultricies lectus sed sapien interdum vulputate.
                  </div>
              </div>
              <div className="right-side">
                  <nav className="socials">
                      <a id="facebook" href="/facebook" data-link>Facebook</a>
                      <a id="youtube" href="/youtube" data-link>YouTube</a>
                      <a id="github" href="/github" data-link>GitHub</a>
                  </nav>
                  <div className="movie-info">
                      <h5 className="premiere">PREMIERE</h5>
                        <p>4 October 2019</p>
                      <h5 className="director">DIRECTOR</h5>
                        <p>Todd phillips</p>
                      <h5 className="music-by">MUSIC BY</h5>
                        <p>Brian Carnes</p>
                      <h5 className="genre">GENRE</h5>
                        <p>Suspense, Thriller</p>
                  </div>
                  <div className="trailers">
                      <iframe width="175px" height="100px" src="https://www.youtube.com/embed/zAGVQLHvwOY?autoplay=1&mute=1">
                      </iframe>
                  </div>
              </div>
          </div>
      </div>

  )

}

export default App
