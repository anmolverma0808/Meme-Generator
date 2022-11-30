import React from "react";

export default function Meme(){

    const [meme,setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/30b1gx.jpg"
    })

    const [allMemeImages,setAllMemeImages] = React.useState({});
   
    React.useEffect(()=>{

        fetch("https://api.imgflip.com/get_memes")
            .then(resp => resp.json())
            .then(data => setAllMemeImages(data.data.memes))
    },[])

    function getRandomMemes()
    {
        const random = Math.floor(Math.random() * allMemeImages.length);
        const url = allMemeImages[random].url;
        
        setMeme((prevMeme) => {
            return {
                ...prevMeme,
                randomImage: url
            }
        })
    }

    function handleChange(event){
        setMeme(prevData => {
            return {
                ...prevData,
                [event.target.name] : event.target.value
            }
        })
    }

    return (
        <main className="meme">
            <div className="form">
                <input 
                    type="text" 
                    placeholder="Top Text"
                    name="topText"    
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    placeholder="Bottom Text"
                    name="bottomText"  
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button onClick={getRandomMemes}>Get a new meme image</button>
            </div>
            <div className="meme-img">
                <img src={meme.randomImage} alt="meme"></img>
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}