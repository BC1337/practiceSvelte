<div class="navbar">
    <h1>Hey, this is a navbar</h1>
    <div class="nav-links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/blog">Blog</a>
    </div>
</div>

<!-- slot where the main page content will be rendered -->
<slot />

<style>
    :global(body){
        margin: 0;
        padding: 0;
    }

    .navbar {
        display: flex;
        justify-content: space-between; /* Aligns the header and links to the edges */
        align-items: center; /* Vertically centers the content */
        background-color: #f1f1f1; /* Set a background color */
        padding: 10px 20px; /* Add padding for a little space around the content */
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Adds a subtle shadow */
    }

    .nav-links {
        display: flex;
        gap: 20px; /* Increase the gap between the links */
    }

    /* Style for links */
    .nav-links a {
        text-decoration: none;
        color: #333; /* Change the link color */
        font-weight: bold; /* Make the links bold */
        transition: color 0.3s ease; /* Add a smooth transition for the link color */
    }

    /* Style for links on hover */
    .nav-links a:hover {
        color: #007bff; /* Change the link color on hover */
    }
</style>