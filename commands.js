document.addEventListener('DOMContentLoaded', () => {
    const commands = [
        {name: "About", description: "About Heist", category: "General"},
        {name: "Invite", description: "Get an invite url for Heist", category: "General"},
        {name: "Discord", description: "Join Heist's Discord server", category: "General"},
        {name: "Donate", description: "Become a Heist supporter (thx)", category: "General"},
        {name: "Discordstatus", description: "See Discord's current incidents", category: "General"},
        {name: "AskGPT", description: "Talk with AI if you're lonely", usage: "/askgpt [prompt]", category: "Utility"},
        {name: "Member", description: "Get information about a user", usage: "/member (user)", category: "Utility"},
        {name: "Guilds (DONOR)", description: "Get the mutual servers of a user", usage: "/guilds (user)", category: "Utility"},
        {name: "Avatar", description: "Get someone's avatar", usage: "/avatar (user)", category: "Utility"},
        {name: "Banner", description: "Get someone's banner", usage: "/banner (user)", category: "Utility"},
        {name: "Reviewdb", description: "Get someone's reviews", usage: "/reviewdb (user)",  category: "Utility"},
        {name: "Tts", description: "Text to speech", usage: "/tts [text] (rap/sing)", category: "Utility"},
        {name: "Song", description: "Download and send a song", usage: "/song [name/url]", category: "Utility"},
        {name: "Embed", description: "Make a custom embed", usage: "/embedusage", category: "Utility"},
        {name: "Emoji", description: "Get information about a custom emoji", usage: "/emoji [customemoji]",  category: "Utility"},
        {name: "Shorten", description: "Shorten an URL", usage: "/shorten [url] (domain)", category: "Utility"},
        {name: "Translate", description: "Translate text to a different language", usage: "/translate [to] [text]", category: "Utility"},
	{name: "Tiktokvid", description: "Download a TikTok post", usage: "/tiktokvid [url]", category: "Utility"},
        {name: "Blur", description: "Blur an image", usage: "/blur [attachment]", category: "Utility"},
        {name: "Wikipedia", description: "Search up something on Wiki", usage: "/wikipedia [search]", category: "Utility"},
        {name: "Screenshot (DONOR)", description: "Screenshot a web page", usage: "/screenshot [url]", category: "Utility"},
        {name: "MCserver", description: "Get information about a Minecraft server", usage: "/mcserver [server-ip]", category: "Utility"},
	{name: "Asciify", description: "Transform your text into ASCII art", usage: "/asciify [text] (font)", category: "Fun"},
        {name: "8ball", description: "Ask it anything and get a response", usage: "/ball [question]", category: "Fun"},
        {name: "Birb", description: "Get a random image of a birb", category: "Fun"},
        {name: "Capybara", description: "Get a random image of a capybara", category: "Fun"},
        {name: "Cat", description: "Get a random image of a cat", category: "Fun"},
        {name: "Dog", description: "Get a random image of a dog", category: "Fun"},
        {name: "Duck", description: "Get a random image of a duck", category: "Fun"},
        {name: "Hotcalc", description: "Rate how hot someone is", usage: "/hotcalc (user)", category: "Fun"},
        {name: "Gayrate", description: "Rate someone's levels of pride", usage: "/gayrate (user)", category: "Fun"},
        {name: "F", description: "Pay your respects for something", usage: "/f [thing]", category: "Fun"},
        {name: "Rate", description: "Rate something", usage: "/rate (thing)", category: "Fun"},
        {name: "Urban", description: "Search any definition in the Urban Dictionary", usage: "/urban [search]", category: "Fun"},
        {name: "Nitro", description: "Rickroll someone using fake nitro", category: "Fun"},
        {name: "Reverse", description: "Reverse text", usage: "/reverse [text]", category: "Fun"},
        {name: "Tweet", description: "Generate a custom tweet", usage: "/tweet [username] [displayname] [text]", category: "Fun"},
        {name: "Insult", description: "Generates a random insult (don't take it personally, please)", category: "Fun"},
        {name: "Lyrics", description: "Get lyrics to a song", usage: "/lyrics [song] (artist)", category: "Fun"},
        {name: "Password", description: "Generate a random password", usage: "/password (nbytes)", category: "Fun"},
        {name: "Randomserver (DONOR)", description: "Self explanatory", usage: "/randomserver (software) (title)", category: "Fun"},
        {name: "Setlastfm", description: "Connect your last.fm", usage: "/setlastfm [username]", category: "Social"},
        {name: "Lastfm", description: "Shows your last.fm activity", usage: "/lastfm (username)", category: "Social"},
        {name: "Lastfmartist", description: "Shows any artist using last.fm", usage: "/lastfmartist [artist]", category: "Social"},
        {name: "Lastfmtop[albums/artists/tracks]", description: "Get a collage of your top albums/artists/tracks.", usage: "/lastfmtop[albums/artists/tracks] (user)", category: "Social"},
        {name: "Setstatsfm", description: "Connect your stats.fm", usage: "/setstatsfm [username]",  category: "Social"},
        {name: "Statsfm", description: "See your stats.fm stats", usage: "/statsfm (username)",  category: "Social"},
        {name: "Roblox", description: "Get information about a Roblox profile", usage: "/roblox [username]",  category: "Social"},
        {name: "Rosnipe (DONOR)", description: "Snipe a Roblox user", usage: "/rosnipe [username] [place-id/game-link]", category: "Social"},
	{name: "Rosteal", description: "Grab an asset from Roblox clothing", usage: "/rosteal [clothing-id/clothing-url]", category: "Social"},
        {name: "Roblox2discord", description: "Find a Roblox user's Discord", usage: "/roblox2discord [username]",  category: "Social"},
        {name: "Discord2roblox", description: "Find a Discord user's Roblox", usage: "/discord2roblox [username]", category: "Social"},
        {name: "Gunslol", description: "Lookup a guns.lol bio (try cosmin)", usage: "/gunslol [username]",  category: "Social"},
        {name: "Shocklol", description: "Lookup a shock.lol bio (try cs)", usage: "/shocklol [username]", category: "Social"},
        {name: "Github", description: "Lookup a GitHub profile", usage: "/github [username]", category: "Social"},
        {name: "Repo", description: "View a GitHub repo", usage: "/repo [username] [repo-name]", category: "Social"},
        {name: "Hug", description: "Hug your homies", usage: "/hug (user)", category: "Reaction"},
        {name: "Slap", description: "Slap your e-opps", usage: "/slap (user)", category: "Reaction"},
        {name: "Kiss", description: "Kiss your Discord e-kitten", usage: "/kiss (user)", category: "Reaction"},
	{name: "Ewallet", description: "See your current balance", usage: "/ewallet (user)", category: "Economy"},
	{name: "Edaily", description: "Claim your daily economy rewards", usage: "/edaily", category: "Economy"},
	{name: "Ework", description: "Work and earn coins", usage: "/ework", category: "Economy"},
	{name: "Ecoinflip", description: "Bet on a coin flip", usage: "/ecoinflip [side] [amount]", category: "Economy"},
	{name: "Eslot", description: "Run the slot machine", usage: "/eslot [amount]", category: "Economy"},
    ];

    commands.sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();

        const isALetter = /^[a-zA-Z]/.test(nameA);
        const isBLetter = /^[a-zA-Z]/.test(nameB);

        if (isALetter && isBLetter) {
            return nameA.localeCompare(nameB);
        } else if (!isALetter && !isBLetter) {
            return nameA.localeCompare(nameB);
        } else if (isALetter && !isBLetter) {
            return -1;
        } else {
            return 1;
        }
    });

    const commandsContainer = document.getElementById('commands-container');
    const searchInput = document.getElementById('search-input');
    const tabButtons = document.querySelectorAll('.tab-button');

    function displayCommands(filteredCommands) {
        commandsContainer.innerHTML = '';
        filteredCommands.forEach(command => {
            const card = document.createElement('div');
            card.classList.add('command-card');
            
            card.innerHTML = `
            <h2>${command.name}</h2>
            <p>${command.description}</p>
            ${command.usage ? `<p><strong>usage:</strong> ${command.usage}</p>` : ''}
        `;
            
            commandsContainer.appendChild(card);
        });
    }

    function filterCommands() {
        const searchText = searchInput.value.toLowerCase();
        const activeTab = document.querySelector('.tab-button.active').dataset.tab;
    
        const filteredCommands = commands.filter(command => {
            const matchesSearch = command.name.toLowerCase().includes(searchText) || 
                                  command.description.toLowerCase().includes(searchText);
    
            const matchesTab = activeTab === 'all' || command.category === activeTab;
    
            return matchesSearch && matchesTab;
        });
    
        displayCommands(filteredCommands);
    }    

    searchInput.addEventListener('input', filterCommands);

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            filterCommands();
        });
    });

    displayCommands(commands);
});
