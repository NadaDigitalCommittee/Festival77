<div class={containerStyle}>
  <a href="{base}/" class={topStyle}>
    <div class={logoStyle}><Logo style="standard" size="8rem" /></div>
    <Type size="2.5rem" weight="450">77th NADA School Festival</Type>
  </a>
  <div class={padStyle} />
  <Link to="/">ホーム</Link>
  <Link to="/circles">サークル</Link>
  <Link to="/stages">ステージ</Link>
  <Link to="/goods">グッズ</Link>
  <Link to="/downloads">ダウンロード</Link>
  <Search/>
</div>

<script lang="ts">
  import { css } from '@emotion/css';
  import { base } from '$app/paths';
  import Logo from '$lib/utils/Logo.svelte';
  import Type from '$lib/utils/Type.svelte';
  import Link from './Link.svelte';
  import Search from './Search.svelte';

  const containerStyle = css`
    display: flex;
    align-items: center;
    background-color: #FFFFFF;
    padding: 5px 2rem 0;
    gap: 2rem;
    width: 100%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  `;

  const padStyle = css`
    flex-grow: 1;
  `;

  const topStyle = css`
    padding: 10px;
    display: flex;
    align-items: center;
    gap: 2.5rem;
  `;

  const logoStyle = css`
    margin-top: -5px;
  `;
</script>
