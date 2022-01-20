const words = [
    {
        word: "하나님은 우리에게 두려워하는 마음을 주신것이 아니라 능력과 사랑과 절제하는 마음을 주셨습니다",
        bible: "딤후 1:7",
    },
    {
        word: "아무것도 염려하지 말고 모든 일에 기도와 간구로 여러분이 필요로 하는 것을 감사하는 마음으로 하나님께 말씀드리십시오",
        bible: "빌 4:6",
    },
    {
        word: "내가 두려울 때 주를 신뢰하겠습니다",
        bible: "시 56:3",
    },
    {
        word: "그러므로 내일 일을 걱정하지 말아라. 내일 일은 내일 걱정할 것이요 한 날의 괴로움은 그 날의 것으로 충분하다",
        bible: "마 6:34",
    },
    {
        word: "여호와께서 직접 너를 인도하시고 너와 함께하실 것이며 너를 버리거나 떠나지 않으실 것이다. 그러므로 너는 두려워하거나 낙심하지 말아라",
        bible: "신 31:8",
    },
    {
        word: "여호와를 의지하는 자들아, 마음을 굳게 먹고 용기를 가져라",
        bible: "시 31:24",
    },
    {
        word: "여러분의 염려를 다 하나님께 맡기십시오. 하나님이 여러분을 보살피고 계십니다",
        bible: "벧전 5:7",
    },
    {
        word: "여호와는 네가 의지할 분이시니 너를 안전하게 지키실 것이다",
        bible: "잠 3:26",
    },
    {
        word: "여호와께서 여러분을 위해 싸우실 것입니다. 그러니 여러분은 가만히 계십시오",
        bible: "출 14:14",
    },
    {
        word: "믿음은 우리가 바라는 것들에 대한 실물이며 보이지 않는 것들에 대한 증거입니다",
        bible: "히 11:1",
    }
];

const word = document.querySelector("#word span:first-child");
const bible = document.querySelector("#word span:last-child");

const todaysWord = words[Math.floor(Math.random() * words.length)];
word.innerText = todaysWord.word;
bible.innerText = todaysWord.bible;