<div>
    <div>
      <p>{circle.name}</p>
      <p>{circle.description}</p>
      <p>{circle.area}</p>
      <p>{circle.areaId}</p>
    </div>
  </div>
  
  <script context="module" lang="ts">
    export type Circle = {
      name: string;
      description?: string;
      area: string;
      areaId: number;
    };
  </script>
  
  <script lang="ts">
  
    export let circle: Circle;
    
  </script>
  