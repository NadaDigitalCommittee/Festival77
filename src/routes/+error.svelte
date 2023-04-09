<SpecialPage>
  <p class={codeStyle}>404</p>
  <p class={messageStyle}>ページが見つかりません</p>
</SpecialPage>

<script lang="ts">
  import { colors, responsive } from '$lib/styles/utils';
  import { css } from '@emotion/css';
  import SpecialPage from '$lib/utils/SpecialPage.svelte';

  const codeStyle = css`
    font-family: futura-pt, sans-serif;
    font-weight: 700;
    color: ${colors.white};
    margin-bottom: 12px;

    ${responsive(`
      font-size: 5rem;
    `, `
      font-size: 3rem;
    `)}
  `;

  const messageStyle = css`
    font-family: futura-pt, sans-serif;
    font-weight: 700;
    color: ${colors.white};

    ${responsive(`
      font-size: 2rem;
    `, `
      font-size: 1rem;
    `)}
  `;
</script>
