<a class={`${linkStyle} ${active ? activeStyle : inactiveStyle}`} href="{base}{to}"><slot/></a>

<script lang="ts">
  import { css } from '@emotion/css';
  import { base } from '$app/paths';
  import { colors } from '$lib/styles/utils';

  export let to: string;
  export let active = true;

  const linkStyle = css`
    font-family: "Noto Sans JP", sans-serif;
    font-weight: 900;
    font-size: 1rem;
    white-space: nowrap;
    padding: 10px 10px 20px;

  `;

  const activeStyle = css`
    color: ${colors.black};
    position: relative;

    &::after {
      content: "";
      position: absolute;
      top: calc(1ch + 25px);
      left: 50%;
      width: 0;
      height: 2px;
      background-color: ${colors.black};
      transition: width 0.25s ease, left 0.25s ease;
    }

    &:hover {
      &::after {
        width: 64%;
        left: 18%;
      }
    }
  `;

  const inactiveStyle = css`
    color: ${colors.dimmedblack};
  `;
</script>
