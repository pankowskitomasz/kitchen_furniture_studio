<template>
    <nav class="navbar navbar-dark navbar-expand-md bg-transparent position-absolute w-100">
        <a href="/" class="navbar-brand font-logo font-weight-bold text-shadow">
            <img src="img/navbar_logo.png" alt="logo">
            KFS
        </a>
        <button class="navbar-toggler" data-toggle="collapse" data-target="#main-nav">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="main-nav">
            <ul class="navbar-nav ml-auto text-right text-shadow">
                <li class="nav-item">
                    <router-link to="/" class="nav-link font-weight-bold text-light">
                        Home
                    </router-link> 
                </li>
                <li class="nav-item">
                    <router-link to="/furniture" class="nav-link font-weight-bold text-light">
                        Furniture
                    </router-link> 
                </li>
                <li class="nav-item">
                    <router-link to="/offer" class="nav-link font-weight-bold text-light">
                        Offer
                    </router-link> 
                </li>
                <li class="nav-item">
                    <router-link to="/about" class="nav-link font-weight-bold text-light">
                        About
                    </router-link> 
                </li>
                <li class="nav-item">
                    <router-link to="/contact" class="nav-link font-weight-bold text-light">
                        Contact
                    </router-link> 
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>