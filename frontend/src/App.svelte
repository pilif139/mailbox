<script lang="ts">
  import {Router, Route, Link} from 'svelte-routing';
  import Home from './components/Home.svelte';
  import Login from './components/Login.svelte';
  import Register from './components/Register.svelte';
</script>

<main class="w-screen h-screen bg-gray-500 text-white font-bold text-lg font-inria flex flex-col items-center">
  <Router>
    <nav class="w-full h-12 flex items-center justify-center gap-20 bg-gray-600 text-xl">
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </nav>
    <div>
      <Route path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </div>
  </Router>
</main>
