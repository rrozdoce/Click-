const divPrincipal = document.getElementById("corpo");
      const texto = document.getElementById("texto");
      const coin = document.getElementById("coin-cont");

      let contador = 0;
      let coinCont = 0;

      divPrincipal.onclick = () => {
        contador++;
        texto.innerHTML = contador;
        if (contador == 100) {
          contador = 0;
          coinCont++;
        }
        coin.innerHTML = coinCont;
    };