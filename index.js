let button = document.querySelector("#button");
let input = document.querySelector("#input");
let output = document.querySelector("#output");

button.addEventListener('click', (e)=>{
    itunesSongs();
});

function itunesSongs(){
    let url="https://itunes.apple.com/search?attribute=songTerm&term="+input.value;
    let url2="https://cors-anywhere.herokuapp.com/";

    fetch(url2+url).then(data => data.json())
    .then( json => {
        console.log(json);
        let res = "";
        json.results.forEach(track => {
                res += `
            
            <div class="col-sm-4 col-xs-12 ">
        <div class="card">
        <div class="container">
                <h4><b>${track.artistName}</b></h4>
                <p>${track.trackName}</p>
                <img src="${track.artworkUrl100}" style="width:20%"/>
            </div>
            <audio
                controls id preload="metadata"
                src="${track.previewUrl}">
                <p>Your browser does not support the
                <code>audio</code> "element."<p>
        </audio>
   
        </div></div> 
            `
        
        output.innerHTML = res;
    }).catch(error => console.log(error));
})
}