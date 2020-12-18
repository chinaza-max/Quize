    import "../css/question.css"


function   currentslide(num){
    console.log(num)
}
 
function Question() {
    
function   currentslide(num){
    console.log(num)
}
 
    return (
           <div>
               <div id="mainContainer">
                    <div className="slider2">
                        <div className="slide2">jdjd</div>
                        <div className="slide2">jsjs</div>
                        <div className="slide2">ss</div>
                    </div>
                    <div className="dots">
                        <span  onClick={currentslide(1)}></span>
                        <span onClick={currentslide(2)}></span>
                        <span onClick={currentslide(3)}></span>
                    </div>
               </div>
               
           </div>
    )

}

export default Question;