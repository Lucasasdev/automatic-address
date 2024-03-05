const btnPesquisarCEP = document.querySelector("#btnPesquisar");
const btnLimpar = document.querySelector("#btnLimpar");

const atribuirCampos = (data) => {
  const rua = document.querySelector("#rua");
  const complemento = document.querySelector("#complemento");
  const bairro = document.querySelector("#bairro");
  const cidade = document.querySelector("#cidade");
  const estado = document.querySelector("#estado");

  rua.value = data.logradouro;
  complemento.value = data.complemento;
  bairro.value = data.bairro;
  cidade.value = data.localidade;
  estado.value = data.uf;
};

btnPesquisarCEP.addEventListener("click", (event) => {
  event.preventDefault();

  const imputDoCEP = document.querySelector("#cep");
  const valorDoCep = imputDoCEP.value;

  const url = `https://viacep.com.br/ws/${valorDoCep}/json/`;

  const getViaCep = async () => {
    await fetch(url).then((response) => {
      return response
        .json()
        .then((data) => {
          atribuirCampos(data);
        })
        .catch((error) => {
          console.log(`Erro ao obter os dados do CEP: ${error}`);
        });
    });
  };

  getViaCep();
});

btnLimpar.addEventListener("click", (event) => {
  event.preventDefault();

  rua.value = "";
  complemento.value = "";
  bairro.value = "";
  cidade.value = "";
  estado.value = "";
});
