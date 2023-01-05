# 文化祭2023

## ⚠️注意
### ESLintに従ってください。
ただし、従うことが難しい場合、どうして従わないのか説明できれば無効化していいです。
その場合、次のようにして警告を無効化することができます。

```typescript
// 事情を説明...
// eslint-disable-next-line no-unused-vars
const a = true;
```

### mainブランチには直接pushできません。
必ずブランチを切ってPull Requestを送ってください。

### リンクを絶対パスで書かないでください。
リリース版でルートが`/2023`になったとき壊れます。
次のようにしてパスを指定してください。

```svelte
<a href="{base}/about">About</a>

<script lang="ts">
  import { base } from '$app/paths';

  // ..
</script>
```
