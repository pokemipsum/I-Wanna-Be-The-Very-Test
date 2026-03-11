var horoscopeArray = [
	//customised messages
	"it is a suspicious day to be a goat",
	"today your horoscope tells you to stop being masochistic",
	"it's okay if you're stressed today",
	"eat less MSG for prosperous health",
	"this world needs less peanut butter",
	"freddie is a spaghetti",
	"you should watch more animated movies",
	"don't buy stupid domain names you don't need",
	"fix your goddamn roof, girl",
	//inspirational messages
	"Believe in yourself, follow your dreams and don't let anything break you.",
	"Believe you can and you're halfway there.",
	"Confidence is 10% hard work and 90% delusion.",
	"If you can't be kind, at least be vague.",
	"There is no such thing as fun for the whole family.",
	//other
	"It's late and I'm awake Staring at the wall Open up my window Head floats out the door No one else around And a shimmer takes my eye I lift my head Blinded by the sky Feel my weight in front Following the sound It moves away so fast Falling to the ground I know that there's more to come Jump back to my feet Now I only see ahead of me Chasing down the street (down the street, down the street, down the street) Gave my love to a shooting star But she moves so fast That I can't keep up, I'm chasing I'm in love with a shooting star But she moves so fast When she falls then I'll be waiting Gave my love to a shooting star But she moves so fast That I can't keep up, I'm chasing I'm in love with a shooting star But she moves so fast When she falls then I'll be waiting Gave my love to a shooting star But she moves so fast That I can't keep up, I'm chasing I'm in love with a shooting star But she moves so fast When she falls then I'll be waiting Give my love to a shooting star But she moves so fast That I can't keep up, I'm chasing I'm in love with a shooting star But she moves so fast When she falls then I'll be waiting",
	"You were a child crawling on your knees toward it Making momma so proud but your voice was too loud We liked to watch you laughing You picked the insects off plants, no time to think of consequences Control yourself, take only what you need from it A family of trees wanting to be haunted Control yourself, take only what you need from it A family of trees wanting to be haunted The water is warm but it's sending me shivers A baby is born crying out for attention The memories fade like looking through a fogged mirror Decision to decisions are made and not bought But I thought this wouldn't hurt a lot, I guess not Control yourself, take only what you need from it A family of trees wanting to be haunted Control yourself, take only what you need from it A family of trees wanting to be haunted Control yourself, take only what you need from it A family of trees wanting to be haunted Control yourself, take only what you need from it A family of trees wanting to be haunted Control yourself, take only what you need from it A family of trees wanting to be haunted Control yourself, take only what you need from it A family of trees wanting to be haunted",
	//actual horoscopes
	"vulnerable Ріѕсеѕ, іn unіоn wіth thе tіmіd Gоаt, nоt оnly rеtаіn thеіr іnhеrеnt ѕеnѕіtіvіty, but аlѕо multірly іt ѕеvеrаl tіmеѕ",
	"stop counting pennies and start calling in favours",
	"Tuesday's lunar eclipse is in your relationship sector",
	"go with the flow",
	"stars are making you extra savvy when it comes to finances",
	"get off your horoscope obsession immediately",
	"remember a financial habit that once brought stability and realise it's time to return to that",
	"Play can lead you to fresh ideas. Your inspiration zone is showered with good fortune, thanks to magnanimous Jupiter beginning to roll forward there. Self-expression (especially through easy, enjoyable projects) is the best way to utilize this energy. You might sketch during lunch or teach yourself a new hobby. The attempt alone is worthy of praise, whether or not you end up being any good at your latest project. Friends and family might enjoy joining you as well. Follow delight by letting creativity lead!",
	"You step forward with heart, and self-respect makes every honest word land with care. On Tuesday, Venus sextiles Pluto, bridging comfort and healing and helping you value yourself as you release old hurts. Treat yourself, enjoy pleasures, and release a stale story, because softness strengthens your glow. Loving your own choices invites better love from others. On Sunday, Mercury conjoins Mars in your 1st House of Identity. Find the courage to say what you want. Speak clearly, choose your timing thoughtfully, and keep drama low so telling the truth feels safe. Healthy confidence is attractive and steady. Buy something that feels good, then start a real conversation about what helps closeness thrive.",
	"The world is your oyster, Pisces! Most of the main events this month are happening in your sign, so you'll probably stay pretty busy. Mars enters your sign first, energizing you to lead with empathy and confidence. You'll be ready to move, take up space, and show people who you are without losing your softness.",
	"You can renegotiate what is not working and still protect trust. Jupiter stations direct in Cancer, inspiring playful expression of your soul. You might pick up an old hobby - if friends want to join, welcome them! Warmth gathers where you share your spark.",
	"You're back on stage during the temperamental New Moon. It invites a personal reset that protects energy and encourages bold, heartfelt action. To cap it all off, Mercury stations direct in Pisces, polishing your ability to say what you mean and mean what you say. Make your voice heard!"
];

function changeText() {
    document.getElementById("originalText").innerText = horoscopeArray[Math.floor(Math.random() * horoscopeArray.length)];
}