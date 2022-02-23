let xhr = new XMLHttpRequest();
xhr.open ("GET", "https://netology-slow-rest.herokuapp.com")
xhr.send();

xhr.addEventListener("readystatechange", function() { 
   if (xhr.readyState === xhr.DONE) {
      document.getElementById("loader").classList.remove("loader_active")
      const valutes = Object.values(JSON.parse(xhr.responseText).response.Valute)
      for (let valute of valutes) {
        document.getElementById("items").insertAdjacentHTML("afterbegin", `<div class="item__code">${valute.CharCode}</div><div class="item__value">${valute.Value}</div><div class="item__currency">руб.</div>`)
      }
    }
})