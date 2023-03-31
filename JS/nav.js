const createNav=() =>{
   let nav = document.querySelector('.navbar');
  nav.innerHTML= `<div class="nav">
        <img src="CSS/sitelogo-removebg-preview.png" class="site-logo" alt="">
        <div class="nav-items">
          <div class="search">
            <input type="text" class="search-box" placeholder="search brand,product">
            <button class="search-btn">search</button></div>
          </div>
      </div>
      <ul class="link-container">
        <li class="link-item"> <a href="#" class="link">HOME</a></li>
        <li class="link-item"> <a href="#" class="link">Makeup</a></li>
        <li class="link-item"> <a href="#" class="link">Clothes</a></li>
        <li class="link-item"> <a href="#" class="link">Accessories</a></li>
      </ul>`;
    }