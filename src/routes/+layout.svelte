<div class={containerStyle}>
  <img style:--left="{-x}px" class={backgroundStyle} alt="background" src="{base}/img/pc-background.png">
  <header class={headerStyle}>
    <Header/>
  </header>
  <main class={mainStyle}>
    <slot/>
  </main>
  <footer class={footerStyle}>
    <Footer/>
  </footer>
</div>

<svelte:window bind:scrollX={x} />

<script lang="ts">
  import 'destyle.css/destyle.min.css';
  import { base } from '$app/paths';
  import { css } from '@emotion/css';
  import Header from '$lib/header/Header.svelte';
  import Footer from '$lib/footer/Footer.svelte';

  let x = 0;

  const backgroundStyle = css`
    position: fixed;
    overflow: hidden;
    z-index: -1;
    top: 0;
    left: var(--left);
    min-width: 100%;
    min-height: 100%;
  `;

  const containerStyle = css`
    display: flex;
    flex-direction: column;
    width: max-content;
    min-height: 100vh;
    min-width: 100%;
  `;

  const headerStyle = css`
    position: sticky;
    min-width: 100%;
    width: max-content;
    top: 0;
  `;

  const mainStyle = css`
    flex-grow: 1;
    /* margin-top: 10rem; */
  `;

  const footerStyle = css`
    width: 100%;
    height: 18rem;
  `;
</script>
