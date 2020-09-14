<template>
    <div>
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bd-navbar">
      <a class="navbar-brand" href="#">Hollywood</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <router-link to="/createTournament" class="nav-link">Create Tournament</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/tournamentList" class="nav-link">View Tournaments</router-link>
          </li>
           <li class="nav-item">
            <router-link to="/saveEvent" class="nav-link">Save Event</router-link>
          </li>
           <li class="nav-item">
            <router-link to="/eventsList" class="nav-link">Events</router-link>
          </li>
        </ul>
        <form class="form-inline mt-2 mt-md-0">
          <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
    </div>
</template>

<style>
.bd-navbar {
    background-color: #563d7c;
}

</style>