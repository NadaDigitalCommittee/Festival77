<div class={containerStyle}>
  <a class={titleLinkStyle} href="{base}/"><p class={`${titleStyle} ${titleToggle[opened ? 1 : 0]}`}>77th NADA School Festival</p></a>
  {#if opened}
    <div transition:fade="{{ duration: 300 }}" class={listStyle}>
      {#each links as link}
        <a class={`${linkStyle} ${linkToggle[link.active ? 1 : 0]}`} href={link.url}>
          <p class={japaneseStyle}>{link.ja}</p>
          <p class={englishStyle}>{link.name}</p>
        </a>
      {/each}
    </div>
    <div class={socialStyle}>
      {#each socials as social}
        <a href={social.url}><Logo style="social/white/{social.name}" size="1.75rem" /></a>
      {/each}
    </div>
  {/if}
</div>
<button class={buttonStyle} on:click={handleClick}>
  <span class="{opened ? firstLineStyle : closedLineStyle}" />
  <span class="{opened ? secondLineStyle : closedLineStyle}" />
  <span class="{opened ? thirdLineStyle : closedLineStyle}" />
</button>
<div class={`${backgroundStyle} ${backgroundToggle[opened ? 1 : 0]}`} />

<script lang="ts">
  import { base } from '$app/paths';
  import { css } from '@emotion/css';
  import { colors } from '$lib/styles/utils';
  import { links, socials } from '$lib/utils/data';
  import { fade } from 'svelte/transition';
  import Logo from '$lib/utils/Logo.svelte';

  export let opened = false;

  const handleClick = () => {
    opened = !opened;
  };

  const containerStyle = css`
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: min(750px, 100%);
    overflow-y: scroll;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    top: 0;
    left: 0;
    width: 100%;
    padding: 10px 0.5rem 0;
    z-index: 95;
  `;

  const titleStyle = css`
    font-family: futura-pt, sans-serif;
    font-size: 1.25rem;
    width: max-content;
    font-weight: 450;
    padding: 20px 10px;
    transition: color 0.3s ease;
  `;

  const titleLinkStyle = css`
    display: block;
    width: max-content;
  `;

  const titleToggle = [
    css`
      color: ${colors.black};
    `,
    css`
      color: ${colors.white};
    `,
  ];

  const listStyle = css`
    display: flex;
    overflow: hidden;
    gap: 40px;
    width: 100%;
    flex-direction: column;
    align-items: center;
    transition: opacity 0.3s ease;
  `;

  const linkStyle = css`
    text-align: center;
  `;

  const linkToggle = [
    css`
      color: ${colors.dimmedwhite};
    `,
    css`
      color: ${colors.white};
    `,
  ];

  const japaneseStyle = css`
    font-family: "Noto Sans JP", sans-serif;
    font-weight: 900;
    font-size: 1.25rem;
    margin-bottom: 8px;
  `;

  const englishStyle = css`
    font-family: futura-pt-bold, sans-serif;
    font-weight: 600;
    font-size: 1rem;
  `;

  const socialStyle = css`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: min(80%, 500px);
    margin: 20px calc(50% - min(40%, 250px)) 50px;
  `;

  const backgroundStyle = css`
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 93;
    background-color: ${colors.darkgray};
    transition: left 0.3s ease;
  `;

  const backgroundToggle = [
    css`
      left: 100%;
    `, css`
      left: 0;
    `,
  ];

  const buttonStyle = css`
    position: fixed;
    z-index: 99;
    top: 1rem;
    right: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: calc(1.5rem + 20px);
    height: calc(1.5rem + 20px);
    padding: 10px;

    span {
      display: block;
      height: 3px;
      width: 100%;
      transition: all 0.3s ease;
    }
  `;

  const closedLineStyle = css`
    background-color: ${colors.black};
  `;

  const firstLineStyle = css`
    background-color: ${colors.white};
    transform: translateY(0.5rem) rotate(-45deg);
  `;

  const secondLineStyle = css`
    opacity: 0;
  `;

  const thirdLineStyle = css`
    transform: translateY(-0.5rem) rotate(45deg);
    background-color: ${colors.white};
  `;
</script>
