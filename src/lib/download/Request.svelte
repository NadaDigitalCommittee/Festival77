<div class={containerStyle}>
  <p class={titleStyle}>おねがい</p>
  <p class={contentStyle}>
    ・ほげほげほげほげほげほげほげほほげほげ<br>
    ・ほげほげほげほげほげほげほげほほげほげ<br>
    ・ほげほげほげほげほげほげほげほほげほげ<br>
    ・ほげほげほげほげほげほげほげほほげほげ<br>
  </p>
</div>

<script lang="ts">
  import { css } from '@emotion/css';
  import { colors, responsive } from '$lib/styles/utils';

  const titleStyle = css`
    position: relative;
    font-family: "Noto Sans JP", sans-serif;
    color: ${colors.navy};
    font-weight: 900;
    line-height: 1.8em;
    white-space: nowrap;

    ${responsive(`
      font-size: 3rem;
    `, `
      font-size: 2.5rem;
    `)}

    &:after {
      content: "";
      background-color: ${colors.navy};
      position: absolute;
      width: 4.5rem;
      height: 3px;
      top: 100%;
      left: calc(50% - 2.25rem);
    }
  `;

  const containerStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${colors.white};
    box-shadow: 0px 4px 4px 5px rgba(0, 0, 0, 0.25);
    ${responsive(`
      margin-top: 80px;
      padding: 60px;
      width: 100%;
    `, `
      padding: 45px 30px;
      margin: 50px 10px 0;
      width: calc(100% - 20px);
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
