
function urlencode(obj){
    var str = [];
    for(var p in obj){
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
    return str.join("&");
}


$(document).ready(function () {
    function displayMusic(){
        $("#music").show();
    }
    function lastfmRequest(method, params){
        params['method'] = method;
        return fetch("/lastfm-proxy.php?" + urlencode(params))
        .then((response) => {
            if(response.ok){
                return response.json();
            }
            throw new Error("ERROR, Respuesta de red erronea ");
        });
    }

    function getImage(trackinfo){
        return lastfmRequest("track.getInfo", { autocorrect: 1, track: 
            trackinfo["name"], artist: trackinfo["artist"]["#text"]
        }).then((data) =>{

            try{
                return data.track.album.image[1]["#text"];
            } catch(e){
                throw new Error("Sin imagen");
            }
        });


    }
    lastfmRequest("user.getrecenttracks", {user: "AbeArza", limit: "1",    }).then((data)=> {
        var track = data.recenttracks.track[0];
        var isPlaying = track["@attr"] && track["@attr"].nowplaying === "true";
    
        var trackName = track.name;
        var artistName = track.artist["#text"];

        getImage(track).then((imgUrl) =>{
            var html = `
            <div class="music">
                    <div class="music-header">
                        <h4>ultima reproduccion</h4>
                    </div>
                    <div class="music-content">
                        <img class="cover" src="${imgUrl}" alt="">
                        <div class="track-info">
                            <p class="track-name">${trackName}</p>
                            <p class="artist-name">${artistName}</p>
                            <span class="status ${isPlaying ? "is-live" : ""}">
                                ${isPlaying ? "now playing" : "last played"}
                            </span>
                        </div>
                    </div>
                </div>

            `;
            $("#music").html(html);
            displayMusic();
        }).catch((e) =>{
            console.warn("sin img", e.message);
                $("#music").html(`
                <div class="music">
            <div class="music-header">
                <h4>ultima reproduccion</h4>
            </div>
            <div class="music-content">
                <div class="track-info">
                    <p class="track-name">${trackName}</p>
                    <p class="artist-name">${artistName}</p>
                    <span class="status ${isPlaying ? "is-live" : ""}">
                        ${isPlaying ? "now playing" : "last played"}
                    </span>
                </div>
            </div>
        </div>
                
                `);

            displayMusic();
        })
    
    
    
    
    })


 
    
})