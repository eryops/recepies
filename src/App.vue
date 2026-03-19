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
.app {
  width: 100%;
  min-height: 100vh;
}

.app-header {
  padding: var(--space-m);
  border-bottom: 1px solid var(--color-border);

  .nav {
    display: flex;
    gap: var(--space-m);

    .nav-link {
      text-decoration: none;
      color: var(--color-text);
      font-weight: 500;

      &:hover {
        text-decoration: underline;
      }

      &.router-link-active {
        font-weight: 600;
        color: var(--color-text);
      }
    }
  }
}

.app-main {
  padding: var(--space-l);
  flex: 1;
}
</style>
