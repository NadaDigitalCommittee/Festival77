<a class={containerStyle} href={ref} target="_blank" rel="noopener noreferrer">
  <img src="{base}/img/assets/location.svg" alt="場所" />
  <p class={textStyle}><slot/></p>
</a>

<script lang="ts">
  import { css } from '@emotion/css';
  import { base } from '$app/paths';
  import { colors } from '$lib/styles/utils';

  export let ref: string;

  const containerStyle = css`
    display: flex;
    gap: 10px;

    &:hover {
      p::after {
        width: 80%;
        left: 10%;
      }
    }
  `;

  const textStyle = css`
    font-family: toppan-bunkyu-midashi-go-std, sans-serif;
    font-weight: 900;
    font-size: 1rem;
    color: ${colors.gray};
    padding: 10px 0;
    position: relative;
    white-space: nowrap;

    &::after {
      content: "";
      position: absolute;
      top: calc(1ch + 25px);
      left: 0;
      width: 100%;
      height: 2px;
      background-color: ${colors.gray};
      transition: width 0.25s ease, left 0.25s ease;
    }

  `;
</script>
