<div class={containerStyle}>
  <div class={cardStyle}>
    <Logo style="mono-white" size="10rem" />
    <div class={typeStyle}>
      <Type color="#FFFFFF" size="3rem" weight="450">77th NADA School Festival</Type>
      <Type color="#FFFFFF" size="1.5rem" weight="450">NADA Junior &amp; Senior High School</Type>
    </div>
  </div>
  <div class={separatorStyle} />
  <div class={descStyle}>
    <div style:align-self="start">
      <Type color="#555555" size="1.25rem" weight="500">You're So Lucky!!</Type>
    </div>
    <div class={socialStyle}>
      <img alt="Twitter" src="{base}/img/assets/social-twitter.svg" />
      <img alt="Instagram" src="{base}/img/assets/social-instagram.svg" />
      <img alt="Facebook" src="{base}/img/assets/social-facebook.svg" />
      <img alt="YouTube" src="{base}/img/assets/social-youtube.svg" />
      <img alt="Line" src="{base}/img/assets/social-line.svg" />
    </div>
    <Type color="#FFFFFF" size="1.25rem" weight="500">Web Team 2023</Type>
  </div>
</div>

<script lang="ts">
  import { css } from '@emotion/css';
  import { base } from '$app/paths';
  import Logo from '$lib/utils/Logo.svelte';
  import Type from '$lib/utils/Type.svelte';

  const containerStyle = css`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 4rem;
    background-color: #555555;
    width: 100%;
    height: 100%;
  `;

  const cardStyle = css`
    display: flex;
    gap: 2.5rem;
  `;

  const typeStyle = css`
    height: 100%;
    margin: auto;
  `;

  const separatorStyle = css`
    height: 100%;
    width: 5px;
    background-color: #FFFFFF;
    margin: 0 3rem;
  `;

  const descStyle = css`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
  `;

  const socialStyle = css`
    display: flex;
    gap: 3rem;
  `;
</script>
