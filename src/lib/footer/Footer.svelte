<div class={containerStyle}>
  <div class={cardStyle}>
    <Logo style="logo-mono-white" size={['7rem', '4rem']}  />
    <div class={typeStyle}>
      <Type color="#FFFFFF" size={['2rem', '1.5rem']} weight="450">77th NADA School Festival</Type>
      <Type color="#FFFFFF" size={['1rem', '0.8rem']} weight="450">NADA Junior &amp; Senior High School</Type>
    </div>
  </div>
  <div class={separatorStyle} />
  <div class={descStyle}>
    <div class={dummyTextStyle}>
      <Type color="#555555" size="0.9rem" weight="500">You're So Lucky!!</Type>
    </div>
    <div class={socialStyle}>
      {#each socials as social}
        <Logo style="social-{social}" size={['2rem', '1.75rem']} />
      {/each}
    </div>
    <Type color="#FFFFFF" size="0.9rem" weight="500">Web Team 2023</Type>
  </div>
</div>

<script lang="ts">
  import { css } from '@emotion/css';
  import Logo from '$lib/utils/Logo.svelte';
  import Type from '$lib/utils/Type.svelte';
  import { pcOnly, responsive } from '$lib/styles/utils';

  const socials = [
    'twitter',
    'instagram',
    'facebook',
    'youtube',
    'line',
  ];

  const containerStyle = css`
    display: flex;
    align-items: center;
    background-color: #555555;
    width: 100%;
    ${responsive(`
      height: 12rem;
      justify-content: center;
      padding: 2.5rem;
    `, `
      flex-direction: column;
      padding: 2.5rem 0;
    `)}
  `;

  const cardStyle = css`
    display: flex;
    ${responsive(`
      gap: 2rem;
    `, `
      gap: 0.75rem;
      margin-bottom: 1rem;
    `)}
  `;

  const typeStyle = css`
    height: 100%;
    margin: auto;
  `;

  const separatorStyle = css(pcOnly(`
    height: 100%;
    width: 3px;
    background-color: #FFFFFF;
    margin: 0 8vw;
  `));

  const dummyTextStyle = css(pcOnly(`
    align-self: start;
  `));

  const descStyle = css`
    height: 100%;
    display: flex;
    flex-direction: column;
    ${responsive(`
      justify-content: space-between;
    `, `
      gap: 5px;
    `)}
    align-items: end;
  `;

  const socialStyle = css`
    display: flex;
    ${responsive(`
      gap: 2rem;
    `, `
      gap: 1.5rem;
      padding: 1.25rem 1.5rem;
      border-width: 2px;
      border-color: #FFFFFF;
      border-style: solid none;
    `)}
  `;
</script>
