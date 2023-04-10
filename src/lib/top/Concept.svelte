<div class={containerStyle}>
  <Title size={['4rem', '3rem']}>CONCEPT</Title>
  <p class={contentStyle}>
    本年度文化祭テーマ「Splash!」には「水しぶき」と「まだら」の２つの意味があります。<br>
    灘校生と来場者の皆さん、それぞれの汗や思いが混じり合って、一気に弾け、世界に一つしかない「祭」を描いていく、そんな思いが込められています。
  </p>
</div>

<script lang="ts">
  import { css } from '@emotion/css';
  import { colors, responsive } from '$lib/styles/utils';
  import Title from '$lib/utils/Title.svelte';

  const containerStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${colors.white};
    box-shadow: 0px 4px 4px 5px rgba(0, 0, 0, 0.25);
    ${responsive(`
      padding: 60px;
      width: 100%;
    `, `
      padding: 45px 30px;
      margin: 30px;
      width: calc(100%-60px);
      border-radius: 30px;
    `)}
  `;

  const contentStyle = css`
    font-family: "Noto Sans JP", sans-serif;
    font-size: 0.9375rem;
    font-weight: 900;
    line-height: 200%;
    ${responsive(`
      margin: 50px 100px 0;
    `, `
      margin-top: 35px;
    `)}
  `;
</script>
