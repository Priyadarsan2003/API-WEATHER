window.onload = () => {
    const apiKey = '594aef72ea1b7c20b6a52f56f2594ebc';
    const button = document.getElementById("submitButton");

    button.onclick = ()=> {
      let city = '';
      city = document.getElementById("textBox").value;
      console.log(city)
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
      fetch(url)
      .then(response => response.json())
      .then(data =>  {
        console.log(data);
        // document.body.innerHTML = data;
        var temp = Math.round(parseFloat(data.main.temp)-273.15);  
        document.getElementById('grid2').innerHTML = city + '        :   ' + temp + '&deg';
      } )
    }
}

  