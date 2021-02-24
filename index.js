document.addEventListener("DOMContentLoaded", () => {
    let generateStory = document.querySelector('#generate-story-btn')
    let form = document.querySelector('form')
    let n = 0
    
    const emojis = [
        '😀','😆','😅','🤣','🙃','😍','😡','🥶','😱','👻',
        '👾','😻','💋','👅','🧵','👠','🥾','👑','🎓','🐔',
        '🐧','🦄','🦇','🌲','🎄','🌊','🍓','🍍','🥯','🌭',
        '🍕','🍣','🥡','🤸','🎯','🧨','🔮','💉','🦠','❤️',
        '🧡','💛','💚','💙','💜','☢️','🚫','💯','🔱','🎊'
    ]
    
    generateStory.addEventListener('click', () => {
        let story = document.querySelector('#emoji-story')
        let storyLength = document.querySelector('#story-length-input').value
        let str = ""
        for(let i = 0; i < storyLength; i++){
            str += emojis[Math.floor(Math.random() * emojis.length)]
        }
        story.innerText = str
    })
    
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        let description = document.querySelector('#description-input').value
        let story = document.querySelector('#emoji-story')
        let ul = document.querySelector('#history-list')
        let li = document.createElement('li')
        li.innerText = `${story.innerHTML}: ${description}`
        ul.appendChild(li)
        let h2 = document.querySelector('#history-title')
        n++

        if(n === 1){
            h2.innerText = `${n} Saved Story`
        } else {
            h2.innerText = `${n} Saved Stories`
        }

    })

})