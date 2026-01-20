<script setup>
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #doc-before>
      <div class="dev-banner">
        Information on this page may be incomplete or incorrect.
      </div>
    </template>
    <template #home-hero-before>
      <div class="dev-banner">
        This is currently a small personal project and the information on various pages may be incomplete or incorrect.
      </div>
    </template>
  </Layout>
</template>

<style>
.dev-banner {
  background: var(--vp-c-warning-soft);
  color: var(--vp-c-warning-1);
  text-align: center;
  padding: 12px 16px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 8px;
  margin-bottom: 24px;
}
</style>
