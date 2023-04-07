<div bind:this={container} style="visibility: hidden;" class={containerStyle}>
  <header class={headerStyle}>
    <Header/>
  </header>
  <main class={mainStyle}>
    <slot/>
  </main>
  <footer class={footerStyle}>
    <Footer/>
  </footer>
  <div class={backgroundStyle}>
    <div class={fillStyle}/>
  </div>
</div>

<script lang="ts">
  import 'destyle.css/destyle.min.css';
  import '$lib/styles/global.css';
  import { base } from '$app/paths';
  import { css } from '@emotion/css';
  import { onMount } from 'svelte';
  import Header from '$lib/header/Header.svelte';
  import Footer from '$lib/footer/Footer.svelte';

  let container: HTMLElement;

  onMount(() => {
    container.setAttribute('style', '');
  });

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
    /* top: 3rem; */
    bottom: 0;
    width: 100%;
    /* height: calc(100vh - 3rem); */
    height: 100vh;
    /* margin-bottom: calc(-100vh + 3rem); */
    margin-top: -100vh;
  `;

  const fillStyle = css`
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.5);
  `;

  const containerStyle = css`
    display: flex;
    visibility: visible;
    position: relative;
    flex-direction: column;
    min-height: 100%;
    min-width: max(100%, 360px);
  `;

  const headerStyle = css`
    position: sticky;
    min-width: 100%;
    height: 100%;
    width: max-content;
    top: 0;
    z-index: 90;
  `;

  const mainStyle = css`
    flex-grow: 1;
    width: 100%;
  `;

  const footerStyle = css`
    width: 100%;
  `;
</script>
