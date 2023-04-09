<SpecialPage>
  <p class={englishStyle}>COMING SOON...</p>
  <p class={japaneseStyle}>現在準備中です。</p>
</SpecialPage>

<script lang="ts">
  import { colors, responsive } from '$lib/styles/utils';
  import { css } from '@emotion/css';
  import SpecialPage from './SpecialPage.svelte';

  const englishStyle = css`
    font-family: futura-pt, sans-serif;
    font-weight: 700;
    color: ${colors.white};
    margin-bottom: 12px;

    ${responsive(`
      font-size: 5rem;
    `, `
      font-size: 2rem;
    `)}
  `;

  const japaneseStyle = css`
    font-family: "Noto Sans JP", sans-serif;
    font-weight: 700;
    color: ${colors.white};

    ${responsive(`
      font-size: 2rem;
    `, `
      font-size: 1rem;
    `)}
  `;
</script>
