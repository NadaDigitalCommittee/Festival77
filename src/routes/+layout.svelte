<div class={containerStyle}>
  <div class={backgroundStyle} />
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

<script lang="ts">
  import 'destyle.css/destyle.min.css';
  import '$lib/styles/global.css';
  import { base } from '$app/paths';
  import { css } from '@emotion/css';
  import Header from '$lib/header/Header.svelte';
  import Footer from '$lib/footer/Footer.svelte';

  const backgroundStyle = css`
    position: sticky;
    @media screen and (min-width: 801px) {
      background-image: url("${base}/img/pc-background.png");
    }
    @media screen and (max-width: 800px) {
      background-image: url("${base}/img/mobile-background.png");
    }
    background-position: center;
    background-size: cover;
    overflow: visible;
    z-index: -1;
    top: 3rem;
    bottom: 0;
    width: 100%;
    height: calc(100vh - 3rem);
    margin-bottom: calc(-100vh + 3rem);
  `;

  const containerStyle = css`
    display: flex;
    position: relative;
    flex-direction: column;
    width: max-content;
    min-height: 100%;
    min-width: 100%;
  `;

  const headerStyle = css`
    position: sticky;
    min-width: 100%;
    height: 100%;
    width: max-content;
    top: 0;
  `;

  const mainStyle = css`
    flex-grow: 1;
  `;

  const footerStyle = css`
    width: 100%;
  `;
</script>
