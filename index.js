const marquisContainer = document.getElementById('hero-text-cont');
const paragraphText = document.getElementById('paragraph-text');
const tryMeButton = document.querySelector('.soundslip-link')
const marquisText = ["F", "I", "N", "D", " ", "Y", "O", "U", "R", " ", "S", "O", "U", "N", "D"];
const phrases = ["FIND YOUR SOUND", "PRIVATE", "STORAGE", "ENCRYPTION", "IPFS", "LOADING SLIPS"]
const copyWriting = [
                        "Share public links to individual samples, a sample pack, or your entire library.",
                        "Share your audio samples with others, or build a mobile sample library just for yourself. Keep it organized with our simple tags system.",
                        "Use any IPFS service for hosting your audio samples, and you only need to provide us with the content identifier, or you can use our free centralized hosting with AWS. More options coming soon!",
                        "Add an extra layer of security and use our built-in file encryption, which takes place on your device. Your keys always stay on your device, so we never have access, and you can take them with you.",
                        "IPFS - A decentralized file storage protocol. Store multiple copies of your samples across the internet at a low cost with pinning services, or host them yourself on your own node.",
                        "Sending you straight away..."
                    ]
const appLocation = "https://soundslip-frontend.herokuapp.com"
const animationSpeed = 15

const directToApp = () => {
    writeToMarquis(phrases[5])
    tryMeButton.classList.add("hideaway")
    paragraphText.innerHTML = copyWriting[5]
    setTimeout(()=>{ window.location.href = appLocation }, 1000)
}

const changePage = pageNumber => {
    tryMeButton.classList.remove("hideaway")
    switch(pageNumber){
        case 0:
            if(marquisText.join("").trim() !== phrases[1]){
                paragraphText.classList.add("fade-out")
                setTimeout(() => {
                    paragraphText.innerHTML = copyWriting[1];
                    paragraphText.classList.remove("fade-out")
                }, 400)
                writeToMarquis(phrases[1])
            }
            break;
        case 1:
            if(marquisText.join("").trim() !== phrases[2]){
                paragraphText.classList.add("fade-out")
                setTimeout(() => {
                    paragraphText.innerHTML = copyWriting[2]
                    paragraphText.classList.remove("fade-out")
                }, 400)
                writeToMarquis(phrases[2])
            }
            break;
        case 2:
            if(marquisText.join("").trim() !== phrases[3]){
                paragraphText.classList.add("fade-out")
                setTimeout(() => {
                    paragraphText.innerHTML = copyWriting[3]
                    paragraphText.classList.remove("fade-out")
                }, 400)
            writeToMarquis(phrases[3])
            }
            break;
        case 3:
            if(marquisText.join("").trim() !== phrases[4]){
                paragraphText.classList.add("fade-out")
                setTimeout(() => {
                    paragraphText.innerHTML = copyWriting[4]
                    paragraphText.classList.remove("fade-out")
                }, 400)
            writeToMarquis(phrases[4])
            }
            break;
        default:
            if(marquisText.join("").trim() !== phrases[0]){
                paragraphText.classList.add("fade-out")
                setTimeout(() => {
                    paragraphText.innerHTML = copyWriting[0]
                    paragraphText.classList.remove("fade-out")
                }, 400)
            writeToMarquis(phrases[0])
            }
    }
}

const writeToMarquis = phrase => {
    let textStack = phrase.length < 15? phrase + ' '.repeat(15 - phrase.length): phrase;
    animationLoop(textStack)
}

const animationLoop = phrase => {
    if(phrase !== ""){
        marquisText.shift()
        marquisText.push(phrase[0])
        if(phrase.length > 2){
            phraseSlice = phrase.slice(1, phrase.length)
        }else if(phrase.length < 2){
            phraseSlice = ""
        }else{
            phraseSlice = phrase[1]
        }
        updateMarquis()
        setTimeout(() => { animationLoop(phraseSlice) }, animationSpeed + (phrase.length))
    }
}

const updateMarquis = () => {
    for(let child = 1; child <= marquisText.length; child++){
        marquisContainer.children[child].innerText = marquisText[child - 1]
    }
}