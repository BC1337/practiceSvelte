<script>
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    let name
    let beltColor
    let age
    let skills = [];

    const handleSubmit = () => {
        const person = {
            name,
            beltColor,
            age,
            skills,
            id: Math.random()
        }

        dispatch('addPerson', person)
    }
</script>

<form on:submit|preventDefault={handleSubmit}>
    <input type="text" placeholder="name" bind:value={name}>
    <input type="text" placeholder="belt color" bind:value={beltColor}>
    <input type="number" placeholder="age" bind:value={age}>
    <label for="form">Skills:</label>
    <input type="checkbox" bind:group={skills} value="fighting"> Fighting <br>
    <input type="checkbox" bind:group={skills} value="sleeping"> Sleeping <br>
    <input type="checkbox" bind:group={skills} value="running"> Running <br>
    <label for="form">Belt Color</label>
    <select bind:value={beltColor}>
        <option value="black">black</option>
        <option value="white">white</option>
        <option value="orange">orange</option>
        <option value="blue">blue</option>
    </select>
    <button>Add Person</button>
</form>




<style>

</style>