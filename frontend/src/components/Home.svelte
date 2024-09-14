<script lang="ts">
    fetch("/api").then(response =>{
        if(response.redirected){
            window.location.href = response.url;
        }
    })
</script>

<main>
    <h1>Home</h1>
    <p>Welcome to the home page!</p>
</main>