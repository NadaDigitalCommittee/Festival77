<div class={containerStyle}>
    <div class={Waves}>
        <div class={Wave1}/>
        <div class={Wave2}/>
        <div class={Wave3}/>
        <div class={Wave4}/>
        <div class={Wave5}/>
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
</div>

<script lang = "ts">
    import {base} from '$app/paths';
    import { css } from '@emotion/css';
    const containerStyle = css`
    width:100vw;
    height:calc(100vh - 6rem);
    background-color: #FFFFFF;`;
    const Titles = css`
    position:absolute;
    top:33vh;
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
    top: calc( 33vh - 5vw );
    right:15vw;
    width:20vw;

    `;
    const Waves = css`
    position:absolute;
    `;
    const Wave1 = css`
    position:absolute;
    background-image:url("${base}/img/assets/waves/1.svg");
    background-repeat: repeat-x;
    top:25vh;
    height:75vh;
    width:100vw;
    `;
    const Wave2 = css`
    position:absolute;
    background-image:url("${base}/img/assets/waves/2.svg");
    background-repeat: repeat-x;
    top:30vh;
    height:75vh;
    width:100vw;
    `;
    const Wave3 = css`
    position:absolute;
    background-image:url("${base}/img/assets/waves/3.svg");
    background-repeat: repeat-x;
    top:35vh;
    height:75vh;
    width:100vw;
    `;
    const Wave4 = css`
    position:absolute;
    background-image:url("${base}/img/assets/waves/4.svg");
    background-repeat: repeat-x;
    top:40vh;
    height:75vh;
    width:100vw;
    `;
    const Wave5 = css`
    position:absolute;
    background-image:url("${base}/img/assets/waves/5.svg");
    background-repeat: repeat-x;
    top:45vh;
    height:75vh;
    width:100vw;
    `;
    const Days = css`
    font-family: futura-pt, heavy;
    position:absolute;
    color: #FFFFFF;
    font-weight:600;
    top:60vh;
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
    const Scroll = css`
    position:absolute;
    top:65vh;
    right:20vw;
    `;
</script>