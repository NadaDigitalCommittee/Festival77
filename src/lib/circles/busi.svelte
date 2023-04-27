<div>
    {#each id as eachbook}
    <a href="{books[eachbook.sys.id].link}" target="_blank">
      <img src={books[eachbook.sys.id].image.file.url} >
    </a>
    <p>タイトルは{books[eachbook.sys.id].title}</p>
    {/each}
</div>

<script lang="ts">
  type relation = {
    sys:{
      id:string;
    };
  };
  type bookdata ={
    [key:string]:
        {
            title:string;
            link:string;
            image:
            {
                title:string;
                file:{
                    url:string;
                };
            };
        }
    };
    
  export let id:relation[];
  export let books:bookdata;
</script>