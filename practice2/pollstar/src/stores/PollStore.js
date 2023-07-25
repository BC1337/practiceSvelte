import { writable } from 'svelte/store'

const PollStore = writable([
    {
        id: 1,
        question: 'one or two?',
        answerA: 'one',
        answerB: 'two',
        votesA: 9,
        votesB: 15,
    },
])

export default PollStore

