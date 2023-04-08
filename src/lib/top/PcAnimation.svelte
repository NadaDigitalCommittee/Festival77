<div class={containerStyle}>
    <div class={Waves}>
        <img src="{base}/img/assets/waves/1.svg" alt="" class={Wave1} />
        <img src="{base}/img/assets/waves/2.svg" alt="" class={Wave2} />
        <img src="{base}/img/assets/waves/3.svg" alt="" class={Wave3} />
        <img src="{base}/img/assets/waves/4.svg" alt="" class={Wave4} />
        <img src="{base}/img/assets/waves/5.svg" alt="" class={Wave5} />
        <!--後でやる-->
    </div>
    <div class={Titles}>
        <p class = {Title1}><span class={Spaces}>第<span class = {Sevens}>77</span></span>回灘校文化祭</p>
        <p class= {Title2}>77th NADA School Festival</p>
    </div>
    <img src="{base}/img/logos/logo-standard.svg" alt="ロゴ" class={Logo}>
    
    <div class={Days}>
        <p class={YYYY}>2023</p>
        <p class={MMDD}>05.02 <span class={Youbi}>tue</span></p>
        <img src="{base}/img/assets/yajirusi.svg" class={Yajirusi} alt="">
        <p class={MMDD}>05.03 <span class={Youbi}>wed</span></p>
    </div>
    <img src="{base}/img/assets/scroll-down.svg" class={Scroll} alt="">
    <img src="{base}/img/assets/sc-d2.svg" class={Scroll2} alt="">
</div>

<script lang = "ts">
    import { base } from '$app/paths';
    import { css, keyframes } from '@emotion/css';
    
    const containerStyle = css`
    width:100vw;
    height:calc(100vh - 6rem);
    background-color: #FFFFFF;`;
    const Titles = css`
    position:absolute;
    top:28vh;
    left:15vw;
    `;
    const Title1 = css`
    position: relative;
    font-family: futura-pt-bold, sans-serif;
    color: #FB5607;
    font-weight: 600;
    white-space: nowrap;
    font-size:2.5rem;
    `;
    const Title2 = css`
    position: relative;
    font-family: futura-pt-bold, bold;
    color: #FB5607;
    font-weight: 900;
    white-space: nowrap;
    font-size:1.5rem;`;
    const Sevens = css`
    font-size:3rem;
    `;
    const Spaces = css`
    letter-spacing:0.8vh;
    `;
    const Logo = css`
    position: absolute;
    top: calc( 28vh - 5vw );
    right:15vw;
    width:20vw;

    `;
    const Waves = css`
    position:absolute;
    `;
    const Wave1 = css`
    position:absolute;
    top:26vh;
    height:82vh;
    width:100vw;
    `;
    const Wave2 = css`
    position:absolute;
    top:31vh;
    height:75vh;
    width:100vw;
    `;
    const Wave3 = css`
    position:absolute;
    top:36vh;
    height: 68vh;
    width:100vw;
    `;
    const Wave4 = css`
    position:absolute;
    top:41vh;
    height: 61vh;
    width:100vw;
    `;
    const Wave5 = css`
    position:absolute;
    top:46vh;
    height:54vh;
    width:100vw;
    `;
    const Days = css`
    font-family: futura-pt, heavy;
    position:absolute;
    color: #FFFFFF;
    font-weight:600;
    top:65vh;
    left:20vw;
    `;
    const YYYY = css`
    font-size:2rem;
    `;
    const MMDD = css`
    font-size:3rem;
    `;
    const Youbi = css`
    font-size:2rem;
    `;
    const Yajirusi = css`
    `;
    const rt = keyframes`
    0% {
        transform: rotate(0deg);
    }
    25%{
        transform: rotate(90deg);
    }
    50%{
        transform: rotate(180deg);
    }
    75%{
        transform: rotate(270deg);
    }
    100% {
        transform: rotate(360deg);
    }`;
    const Scroll = css`
    position:absolute;
    top:70vh;
    right:20vw;
    animation: ${rt} 8s linear infinite;
    `;
    const Scroll2 = css`
    position:absolute;
    top:70vh;
    right:20vw;
    `;
</script>