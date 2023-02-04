<a class={linkStyle} href="{base}{to}"><slot/></a>

<script lang="ts">
  import { css } from '@emotion/css';
  import { base } from '$app/paths';

  export let to: string;

  const linkStyle = css`
    font-family: toppan-bunkyu-midashi-go-std, sans-serif;
    /* font-family: "Noto Sans JP", sans-serif; */
    font-weight: 900;
    font-size: 1rem;
    padding: 10px 10px 20px;
    position: relative;
    white-space: nowrap;

    &::after {
      content: "";
      position: absolute;
      top: calc(1ch + 25px);
      left: 50%;
      width: 0;
      height: 2px;
      background-color: #000000;
      transition: width 0.25s ease, left 0.25s ease;
    }

    &:hover {
      &::after {
        width: 64%;
        left: 18%;
      }
    }
  `;
</script>
