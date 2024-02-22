// list of games that i ever made
const games = [
    {
        name: "PingPong",
        url: "https://Candrandika.github.io/pingpong-game/index.html",
        image_url: "",
        description: "PingPong game for 2 players",
    }, {
        name: "Rain Fall",
        url: "https://Candrandika.github.io/rain-fall/index.html",
        image_url: "",
        description: "Avoid the falling raindrops",
    }, {
        name: "Snake",
        url: "https://Candrandika.github.io/game-snake/index.html",
        image_url: "",
        description: "Just a classic snake game",
    }, {
        name: "Tug Of War",
        url: "https://Candrandika.github.io/tug-of-war/index.html",
        image_url: "",
        description: "Tug of war for 2 players",
    }, {
        name: "Virus Slayer",
        url: "https://Candrandika.github.io/virus-slayer/index.html",
        image_url: "",
        description: "Shoot the vaccine and kills the virus",
    }, {
        name: "Whack Anya",
        url: "https://Candrandika.github.io/whack-anya/index.html",
        image_url: "",
        description: "Whack a mole, but it's Anya Forger",
    }, {
        name: "World Cup Qatar",
        url: "https://Candrandika.github.io/world-cup-qatar/index.html",
        image_url: "",
        description: "World Cup Qatar game",
    },
];
let list_view = "" // variable for saving the element of list game

// get element to showed the game list
const game_list_ul = document.querySelector("#game-list ul")

// mapping game to list
games.map((game, index) => {
    list_view += `<li>
        <a href="${game.url}" class="bg-white hover:bg-violet-100 active:bg-violet-100 focus:bg-violet-100 p-5 pr-[45px] rounded shadow-lg block group relative overflow-hidden">
            <div>
                <div class="text-lg tracking-widest">${game.name}</div>
                <p class="font-extralight tracking-widest text-pretty">${game.description}</p>
            </div>
            <div class="group-hover:bg-slate-900 group-focus:bg-slate-900 transition-all duration-300 absolute bottom-0 top-0 right-0 w-[40px]">
                <i class="bi bi-play-circle bottom-[-50px] text-lg text-white absolute translate-x-1/2 translate-y-1/2 right-[20px] group-hover:bottom-1/2 group-focus:bottom-1/2 transition-all duration-300"></i>
            </div>
        </a>

    </li>`
})

// showing game list element to view
game_list_ul.innerHTML = list_view