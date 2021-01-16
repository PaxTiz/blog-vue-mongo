<template>
    <div id="app">
        <header>
            <div class="container">
                <nav>
                    <router-link to="/">Home</router-link>
                    <router-link to="/about">About</router-link>
                    <router-link to="/contact">Contact</router-link>

                    <router-link to="/" class="right">Login</router-link>
                    <router-link to="/">Register</router-link>
                </nav>
            </div>

            <h1>Bienvenue sur mon super blog, ici des actualités tous les jours !</h1>
        </header>
        <router-view/>
    </div>
</template>

<style>

* {
    box-sizing: border-box;
}

.container {
    width: 1000px;
    margin: 0 auto;
}

body {
    padding: 0;
    margin: 0;
    font-family: Avenir, sans-serif;
    color: #333;
}

header {
    display: flex;
    flex-direction: column;
    background-color: dodgerblue;
}

header nav {
    display: flex;
    font-size: 1.2em;
}

header nav a {
    padding: 20px;
    color: #EEE;
    opacity: .9;
    text-decoration: none;
}

header nav a.right {
    margin-left: auto;
}

header nav a.router-link-exact-active {
    color: #fff;
    font-weight: bold;
    opacity: 1;
    border-bottom: 2px solid #fff;
}

header h1 {
    color: #fff;
    margin: 0;
    padding: 25px 0;
    text-align: center;
    font-size: 1.5em;
    background-color: skyblue;
}
</style>
