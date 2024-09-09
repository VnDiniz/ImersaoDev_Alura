function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    campoPesquisa = campoPesquisa.toLowerCase();

    //console.log(campoPesquisa); // Apenas para verificar se esta coletando o valor do input corretamente

    if (campoPesquisa == "") {
        section.innerHTML = "<p>Digite o que deseja buscar na caixa de texto.</p>";
        return;
    }

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre os dados e constrói o HTML para cada resultado
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Cria um novo elemento de resultado
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais Informações</a>
            </div>
            `;
        }
    }

    if (!resultados) {
        section.innerHTML = "<p>Nenhum resultado foi encontrado</p>";
    } else {
        // Atualiza o conteúdo da seção com os resultados
        section.innerHTML = resultados;
    }


}