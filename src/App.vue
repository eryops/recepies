<script setup lang="ts"></script>

<template>
  <div class="app">
    <header class="app-header">
      <nav class="nav">
        <router-link to="/recipes" class="nav-link">Recept</router-link>
        <router-link to="/recipes/new" class="nav-link">Nytt recept</router-link>
      </nav>
    </header>

    <main class="app-main">
      <router-view />
    </main>
  </div>
</template>

<style lang="scss" scoped>
$app-border: #ddd;
$app-padding: 1rem;

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-header {
  padding: $app-padding;
  border-bottom: 1px solid $app-border;

  .nav {
    display: flex;
    gap: 1rem;

    .nav-link {
      text-decoration: none;
      color: #333;
      font-weight: 500;

      &:hover {
        text-decoration: underline;
      }

      &.router-link-active {
        font-weight: 600;
        color: #000;
      }
    }
  }
}

.app-main {
  padding: 2rem;
  flex: 1;
}
</style>
