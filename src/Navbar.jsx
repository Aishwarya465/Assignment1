import React from 'react';
import Mail from './Mail';


function Navbar (){
    return(
     
<div className="app">
<nav class="navbar navbar-expand-lg navbar-light bg-none">
<div class="container-fluid">


    <a class="navbar-brand" href="/Mail">Options</a>

<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
 <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
 <div class="navbar-nav">
   <a class="nav-link active" href="#">Unread</a>
   <a class="nav-link" href="#">Read</a>
   <a class="nav-link" href="#">Favorites</a>
   
   
 </div>
</div>
</div>
</nav>
</div>
    )
}

<div id="data">
    <Mail />
</div>

export default Navbar;