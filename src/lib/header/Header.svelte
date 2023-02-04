<div class={containerStyle}>
  <a href="{base}/" class={topStyle}>
    <div class={logoStyle}><Logo style="logo-standard" size="4.5rem" /></div>
    <Type size={['1.6rem', '1.25rem']} weight="450">77th NADA School Festival</Type>
  </a>
  <div class={padStyle} />
  {#each links as link}
    <div class={linkStyle}><Link to={link.url}>{link.name}</Link></div>
  {/each}
  <Search/>
  <div class={hamburgerStyle}><Hamburger/></div>
</div>

<script lang="ts">
  import { css } from '@emotion/css';
  import { base } from '$app/paths';
  import { responsive, pcOnly, mobileOnly } from '$lib/styles/utils';
  import Logo from '$lib/utils/Logo.svelte';
  import Type from '$lib/utils/Type.svelte';
  import Link from './Link.svelte';
  import Search from './Search.svelte';
  import Hamburger from './Hamburger.svelte';

  const links = [
    { name: 'ホーム', url: '/' },
    { name: 'サークル', url: '/circles' },
    { name: 'ステージ', url: '/stages' },
    { name: 'グッズ', url: '/goods' },
    { name: 'ダウンロード', url: '/downloads' },
  ];

  const containerStyle = css`
    display: flex;
    align-items: center;
    background-color: #FFFFFF;
    ${responsive(`
      padding: 10px 3rem 0 1.5rem;
      gap: 1rem;
    `, `
      padding: 10px 0.5rem 0;
      gap: 0.25rem;
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
    padding: 20px 10px;
  `));

  const logoStyle = css(pcOnly(`
    margin-top: -5px;
  `));

  const hamburgerStyle = css(mobileOnly(''));
</script>
