const words = [
    {
        word: "for God gave us a spirit not of fear but of power and love and self-control",
        bible: "2Timothy 1:7",
    },
    {
        word: "Trust in the LORD forever, for the LORD GOD is an everlasting rock",
        bible: "Philippians 4:6",
    },
    {
        word: "When I an afraid, I put my trust in you",
        bible: "Psalms 56:3",
    },
    {
        word: "Anyone who does not love does not know God, because God is love",
        bible: "1John 4:8",
    },
    {
        word: "By this all people will know that you are my disciples, if you have love for one another",
        bible: "John 13:35",
    },
    {
        word: "Be strong, and let your heart take courage, all you who wait for the LORD!",
        bible: "Psalms 31:24",
    },
    {
        word: "casting all your anxieties on him, because he cares for you",
        bible: "1Peter 5:7",
    },
    {
        word: "for the LORD will be your confidence and will keep your foot from being caught",
        bible: "Proverbs 3:26",
    },
    {
        word: "The LORD will fight for you, and you have only to be silent",
        bible: "Exodus 14:14",
    },
    {
        word: "Now faith is the assurance of things hoped for, the conviction of things not seen",
        bible: "Hebrews 11:1",
    }
];

const word = document.querySelector("#word");
const bible = document.querySelector("#bible");

const todaysWord = words[Math.floor(Math.random() * words.length)];
word.innerText = todaysWord.word;
bible.innerText = todaysWord.bible;