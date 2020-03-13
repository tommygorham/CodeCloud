import React from 'react'
import GlobalStyle from './GlobalStyle'

const Tile = (props) =>{
  console.log(JSON.stringify(props.post))
    return(
      <React.Fragment>
      <GlobalStyle />
        <article class="post">
              <header>
                <div class="title">
                  <h2>
                    <a href="single.html">{props.post.name}</a>
                  </h2>
                  <p>
                    {props.post.content}
                  </p>
                </div>
                <div class="meta">
                  <time class="published" datetime="2015-11-01">
                    November 7, 2019
                  </time>
                  <a href="#" class="author">
                    <span class="name">{props.post.login}</span>
                    <img src={props.post.image} alt="" />
                  </a>
                </div>
              </header>
              <a href="single.html" class="image featured">
                <img src={props.post.image} alt="" />
              </a>

              <footer>
                <ul class="actions">
                  <li>
                    <a href="single.html" class="button large">
                      Link to Profile
                    </a>
                  </li>
                </ul>
                <ul class="stats">
                  <li>
                    <a href="#">General</a>
                  </li>
                  <li>
                    <a href="#" class="icon solid fa-heart">
                      28
                    </a>
                  </li>
                  <li>
                    <a href="#" class="icon solid fa-comment">
                      128
                    </a>
                  </li>
                </ul>
              </footer>
            </article>
            </React.Fragment>
    )
}

export default Tile;