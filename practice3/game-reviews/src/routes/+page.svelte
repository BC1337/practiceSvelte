<script>
    // your script goes here
    let title = 'Retro Gaming Guides'

    const updateTitle = () => {
        title = 'a different title'
    }
</script>   


<div class="index">
    <h2>{title}</h2>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima eius neque explicabo, corporis, odio porro saepe, ab odit cum voluptatem quae distinctio totam. Voluptatum, dolorem sequi! Et corrupti atque amet iure consequuntur repudiandae architecto quo praesentium quaerat repellendus? Porro, a id ex iure in ducimus cupiditate doloribus veritatis iusto cumque rerum adipisci eveniet repellendus voluptates nisi ut commodi consequatur laudantium impedit sequi esse dolor? Dolores nihil sit est mollitia aperiam odio doloremque qui magnam neque, dolorum quod consequuntur laboriosam praesentium, ipsam maiores. Unde mollitia ipsa vitae quasi, nostrum deleniti laudantium dolor quis perferendis, iusto eum temporibus fuga tempore ex natus.</p>


    <button on:click={updateTitle}>change title</button>
    <input type="text" bind:value={title}>
</div>

<style>
    .index{
        text-align: center;
        display: block;
        margin: 20px auto;
    }
</style>