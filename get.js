async function getElements() {
    const requestOptions = {
        method: "GET",
        redirect: "follow",
    };

    await fetch(
        "https://script.google.com/macros/s/AKfycbzjyhZbc1qT6hzRwWvyuVxorzFFkpXBAaaENC2Ts2cVEDEJntjC_hgaGeqmqLG2ao1Gag/exec",
        requestOptions
    )
        .then((response) => response.text())
        .then((result) => (data = result))
        .catch((error) => console.error(error));

    document.getElementById("formacao").innerHTML += JSON.parse(data)[0][0];
    document.getElementById("pianoprimeiro").insertAdjacentHTML("afterbegin", JSON.parse(data)[1][0]);
    document.getElementById("pianosegundo").innerHTML = JSON.parse(data)[2][0];
    document.getElementById("primeiroimagemcd").src = JSON.parse(data)[3][0];
    document.getElementById("primeirotextocd").innerHTML = JSON.parse(data)[4][0];
    document.getElementById("primeirolinkcd").href = JSON.parse(data)[5][0];
    document.getElementById("segundoimagemcd").src = JSON.parse(data)[6][0];
    document.getElementById("segundotextocd").innerHTML = JSON.parse(data)[7][0];
    document.getElementById("segundolinkcd").href = JSON.parse(data)[8][0];
    document.getElementById("terceiroimagemcd").src = JSON.parse(data)[9][0];
    document.getElementById("terceirotextocd").innerHTML = JSON.parse(data)[10][0];
    document.getElementById("terceirolinkcd").href = JSON.parse(data)[11][0];
    document.getElementById("quartoimagemcd").src = JSON.parse(data)[12][0];
    document.getElementById("quartotextocd").innerHTML = JSON.parse(data)[13][0];
    document.getElementById("quartolinkcd").href = JSON.parse(data)[14][0];
    document.getElementById("quintoimagemcd").src = JSON.parse(data)[15][0];
    document.getElementById("quintotextocd").innerHTML = JSON.parse(data)[16][0];
    document.getElementById("quintolinkcd").href = JSON.parse(data)[17][0];
    document.getElementById("primeiroartista").innerHTML = JSON.parse(data)[18][0];
    document.getElementById("primeiroimagemartista").src = JSON.parse(data)[19][0];
    document.getElementById("primeirolinkartista").href = JSON.parse(data)[20][0];
    document.getElementById("segundoartista").innerHTML = JSON.parse(data)[21][0];
    document.getElementById("segundoimagemartista").src = JSON.parse(data)[22][0];
    document.getElementById("segundolinkartista").href = JSON.parse(data)[23][0];
    document.getElementById("terceiroartista").innerHTML = JSON.parse(data)[24][0];
    document.getElementById("terceiroimagemartista").src = JSON.parse(data)[25][0];
    document.getElementById("terceirolinkartista").href = JSON.parse(data)[26][0];
    document.getElementById("quartoartista").innerHTML = JSON.parse(data)[27][0];
    document.getElementById("quartoimagemartista").src = JSON.parse(data)[28][0];
    document.getElementById("quartolinkartista").href = JSON.parse(data)[29][0];
    document.getElementById("primeiroregente").innerHTML = JSON.parse(data)[30][0];
    document.getElementById("segundoregente").innerHTML = JSON.parse(data)[31][0];
    document.getElementById("terceiroregente").src = JSON.parse(data)[32][0];
    document.getElementById("quartoregente").innerHTML = JSON.parse(data)[33][0];
    document.getElementById("diferente").innerHTML = JSON.parse(data)[34][0];
    document.getElementById("sextoimagemregente").src = JSON.parse(data)[35][0];
    document.getElementById("setimoregente").innerHTML = JSON.parse(data)[36][0];
    document.getElementById("oitavoregente").innerHTML = JSON.parse(data)[37][0];
    document.getElementById("nonoimagemregente").src = JSON.parse(data)[38][0];
    document.getElementById("decimoregente").innerHTML = JSON.parse(data)[39][0];
    document.getElementById("decimoprimeiroregente").innerHTML = JSON.parse(data)[40][0];
    document.getElementById("decimosegundoimagemregente").src = JSON.parse(data)[41][0];
    document.getElementById("decimoterceiroregente").innerHTML = JSON.parse(data)[42][0];
    document.getElementById("decimoquartoregente").innerHTML = JSON.parse(data)[43][0];
    document.getElementById("decimoquintoimagemregente").src = JSON.parse(data)[44][0];
}

async function getCarousel() {
    const requestOptions = {
        method: "GET",
        redirect: "follow",
    };

    await fetch(
        "https://script.google.com/macros/s/AKfycbzdmuxysDxxoGGJ3a6YCl6WBKISZTCiP1zW3IbdsTGg7y9mHgBwmG9oGy6a58JW5Zm9Mg/exec",
        requestOptions
    )
        .then((response) => response.text())
        .then((result) => (data = result))
        .catch((error) => console.error(error));

  //  for (let i = 0; i < JSON.parse(data).length; i++) {
  //      document.getElementById('lista').innerHTML = `<div class="slide-item" data-slide="item" data-index="0">
  //      <div class="slide-content">
  //          <img class="slide-image" src="${JSON.parse(data)[i][1]}" alt="Fotos Marcelo" />
  //          <div class="slide-description">
  //              <h4>${JSON.parse(data)[i][1]}</h4>
  //          </div>
  //      </div>
  //  </div>`
  //  }


}

getElements();
getCarousel();