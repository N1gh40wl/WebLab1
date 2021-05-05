//kha97gBlXnXhULbC5VNXUX7RUt5tWxnolkcZvDbT

    async function NASA_Request(){  
        let url = "https://api.nasa.gov/planetary/earth/assets?";
        let lon = document.getElementById('lon').value.toString();
        let lat = document.getElementById('lat').value.toString();
        let date = document.getElementById('date').value.toString();
        finUrl = url + 'lon=' + lon + '&' + 'lat=' + lat + '&' + 'date=' + date + '&&dim=0.10&api_key=kha97gBlXnXhULbC5VNXUX7RUt5tWxnolkcZvDbT';
        //var token = kha97gBlXnXhULbC5VNXUX7RUt5tWxnolkcZvDbT;
        let response = await fetch (finUrl);
        console.log(response);
        if (response.ok){
            let json = await response.text();
            console.log(json);
            var txt = JSON.parse(json);
            console.log(txt.url);
            document.getElementById("EarthPic").src = txt.url;
        } else {
            alert("Ошибка HTTP: " + response.status + " Введите корректные данные");
        }
    }


   