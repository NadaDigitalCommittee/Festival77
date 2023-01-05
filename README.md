# 文化祭2023

## ⚠️注意
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
