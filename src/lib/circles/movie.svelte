<div>
    {#each id as eachmovie}
    <a href="//youtu.be/{youtubes[eachmovie.sys.id].youtubeId}" target="_blank">
      <img src="//img.youtube.com/vi/{youtubes[eachmovie.sys.id].youtubeId}/default.jpg" alt="">
    </a>
    <p>タイトルは{youtubes[eachmovie.sys.id].title}</p>
  {/each}
</div>

<script lang="ts">
  type relation = {
    sys:{
      id:string;
    };
  };
  type youtubedata = {
    [key:string]:{
        title:string;
        youtubeId:string;
    };
  };
  
  export let id:relation[];
  export let youtubes:youtubedata;
</script>