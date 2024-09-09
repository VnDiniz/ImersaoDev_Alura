## **## README.md**

### **O que essa aplicação faz?**

Esta aplicação web busca por atletas ou esportes em um banco de dados e exibe os resultados de forma organizada. É como uma pequena enciclopédia de atletas brasileiros!

### **Como funciona?**

1. **Você digita:** Ao digitar o nome de um atleta ou um esporte na caixa de pesquisa, a aplicação procura por essa palavra em todos os dados que ela possui sobre os atletas.
2. **A aplicação busca:** Ela busca não apenas no nome do atleta, mas também na descrição e até mesmo nas palavras-chave relacionadas a cada um.
3. **Resultados:** Se encontrar algo que combine com o que você digitou, a aplicação mostra os resultados, como o nome do atleta, uma breve descrição e um link para saber mais.
4. **Nada encontrado:** Se não encontrar nada, ela te avisa que não possui informações sobre o que você procurou.

### **Tecnologias utilizadas:**

* **HTML:** É a linguagem básica para criar páginas da web. Nessa aplicação, ela define a estrutura da página, como os títulos, botões e onde os resultados serão exibidos.
* **CSS:** É a linguagem utilizada para estilizar a página, deixando-a com uma aparência mais bonita e organizada.
* **JavaScript:** É a linguagem de programação que torna a aplicação interativa. É o JavaScript que faz a busca, compara os dados e atualiza a página com os resultados.

### **Como usar:**

1. **Acesse a página:** Abra a página da aplicação em seu navegador.
2. **Digite sua busca:** Na caixa de pesquisa, digite o nome do atleta ou o esporte que você quer encontrar.
3. **Veja os resultados:** A aplicação irá mostrar os resultados da sua pesquisa, se houver.

### **Para desenvolvedores:**

* **Arquivos:**
  * **index.html:** Contém a estrutura básica da página.
  * **style.css:** Define o estilo visual da página.
  * **app.js:** Contém a lógica da aplicação, como a função de pesquisa.
  * **dados.js:** Contém os dados dos atletas, como nome, descrição e links.
* **Como funciona a pesquisa:**
  * A função `pesquisar()` em `app.js` é responsável por:
    * Pegar o texto que você digitou na caixa de pesquisa.
    * Procurar por esse texto nos dados dos atletas.
    * Mostrar os resultados encontrados na página.

**Observação:** Para que essa aplicação funcione, você precisa ter os dados dos atletas em um arquivo chamado `dados.js`. Esse arquivo deve ser um array de objetos, onde cada objeto representa um atleta e contém as seguintes propriedades: `titulo`, `descricao`, `tags` e `link`.

**Exemplo de um objeto em dados.js:**

```javascript
{
  titulo: "Pelé",
  descricao: "Considerado o maior jogador de futebol de todos os tempos.",
  tags: ["futebol", "brasil", "historia"],
  link: "https://pt.wikipedia.org/wiki/Pelé"
}
```

### **Contribuições:**

Sinta-se à vontade para contribuir com essa aplicação! Você pode adicionar novos atletas, melhorar a interface ou implementar novas funcionalidades.

**Lembre-se:** Essa é uma explicação simplificada para que qualquer pessoa possa entender. Se você tiver conhecimentos mais avançados em programação, poderá explorar o código e entender melhor cada detalhe.

### **Exemplo de uso detalhado:**

**Exemplos de pesquisa:**

* **Nome completo:** Pelé
* **Parte do nome:** Neymar Jr.
* **Esporte:** vôlei
* **Palavras-chave:** medalha de ouro

**Resultados:**

A aplicação retornará uma lista de atletas ou esportes que correspondam à sua pesquisa. Cada resultado incluirá:

* **Nome do atleta:** O nome completo do atleta.
* **Descrição:** Uma breve descrição sobre o atleta ou o esporte.
* **Link:** Um link para uma fonte confiável com informações mais detalhadas.
