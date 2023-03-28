<div class={containerStyle}>
  <a href="{base}/" class={topStyle}>
    <div class={logoStyle}><Logo style="logo-standard" size="4.5rem" /></div>
    <Type size={['1.6rem', '1.25rem']} weight="450">77th NADA School Festival</Type>
  </a>
  <div class={padStyle} />
  {#each links as link}
    <div class={linkStyle}><Link to={link.url} active={link.active}>{link.ja}</Link></div>
  {/each}
  <div class={hamburgerStyle}><Hamburger/></div>
</div>

<script lang="ts">
  import { css } from '@emotion/css';
  import { base } from '$app/paths';
  import {
    colors, responsive, pcOnly, mobileOnly,
  } from '$lib/styles/utils';
  import Logo from '$lib/utils/Logo.svelte';
  import Type from '$lib/utils/Type.svelte';
  import Link from './Link.svelte';
  import Hamburger from './Hamburger.svelte';
  import { links } from '$lib/utils/data';

  const containerStyle = css`
    display: flex;
    align-items: center;
    background-color: ${colors.white};
    ${responsive(`
      padding: 10px 3rem 0 1.5rem;
      gap: 1rem;
    `, `
      padding: 10px 0.5rem 0;
    `)}
    width: 100%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  `;

  const padStyle = css`
    flex-grow: 1;
  `;

  const linkStyle = css(pcOnly(''));

  const topStyle = css(responsive(`
    padding: 10px;
    display: flex;
    align-items: center;
    gap: 1.5rem;
  `, `
    visibility: hidden;
    padding: 20px 10px;
  `));

  const logoStyle = css(pcOnly(`
    margin-top: -5px;
  `));

  const hamburgerStyle = css(mobileOnly(''));

</script>
