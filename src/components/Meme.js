import React from "react";
import"../styles/Meme.css";

function Meme() {
    const [meme,setMeme] = React.useState({
        topText:"",
        bottomText:"",
        image:"https://i.imgflip.com/3si4.jpg"

    })

    const[allImages,setAllImages] =  React.useState([]);

    React.useEffect(() => {
        async function getImages(){
          const res = await fetch ("https://api.imgflip.com/get_memes");
          const data = await res.json();
          setAllImages(data.data.memes);
          console.log(data);
        }

        getImages();
    },[]);


    function getMemeImage(){
        const randomNumber = Math.floor( Math.random() * allImages.length);
        const url = allImages[randomNumber]?.url;

        /*
        {        
        topText:"",
        bottomText:"",
        image:"https://i.imgflip.com/3si4.jpg"
        önceki obje bu,... nokta ile çağrılan
        }
        */
        setMeme((prevState) =>{
            return{...prevState,image:url}
        });
        console.log(meme);
    }
    function handleChange(event){
        console.log(event);
        const {name,value} = event.target;

        console.log(name);// topText
        console.log(value);// kullanıcı ne yazdıysa

        setMeme((prevMeme) => ({
           ...prevMeme,
           [name]:value

        }) )

    }

    
    return(
        <>
        <div  className="form">
            <input
               type="text"
               placeholder="Top Text"
               className="form-input"
               name="topText"
               value={meme.topText}
               onChange={handleChange}
               />
             <input
                type="text"
                placeholder="Bottom Text"
                className="form-input"
                name="bottomText"
                value={meme.bottomText}
                onChange={handleChange}
                />
             <button className="form-btn" onClick={getMemeImage}>Get a new meme Image</button>  

        </div>
        <div className="meme">
            <img src={meme.image} className="meme-image" alt="meme"/>
            <h2 className="meme-text top">{meme.topText}</h2>
            <h2 className="meme-text bottom">{meme.bottomText}</h2>
        </div>
       </>
    )
    
}
export default Meme;