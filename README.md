# 💳 Interactive Card Details Form Solution

This is my solution for the [Interactive Card Details Form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). This project was an incredible opportunity to explore interactivity with JavaScript and create a responsive and functional interface. 🚀

## Table of Contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [Highlights](#highlights)
- [My Process](#my-process)
  - [Built With](#built-with)
  - [What I Learned](#what-i-learned)
- [Author](#author)

## Overview

### The Challenge

Users should be able to:

- Fill out the form and see the card details update in real-time
- Receive error messages when submitting the form if:
  - Any input field is empty
  - The card number, expiration date, or CVC fields are in the wrong format
- View the optimal layout depending on the device screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot

![](./assets/images/screenshot.gif)

### Links

- Solution URL: [View on Frontend Mentor](https://www.frontendmentor.io/)
- Live Site URL: [Access the live project](https://eleandro-card-details-form.netlify.app/)

## Highlights

✨ **Real-time interactivity**: Card details are updated instantly as the user types.  
📱 **Responsive design**: The layout adapts perfectly to different screen sizes.  
⚡ **Form validation**: Clear error messages help users correct invalid inputs.  

## My Process

### Built With

- Semantic HTML5
- Modern CSS3 (Flexbox and Grid)
- Vanilla JavaScript for interactivity

### What I Learned

This project taught me the importance of creating a smooth and intuitive user experience. Here are some highlights of what I learned:

- DOM manipulation with JavaScript to update elements in real-time.
- Input formatting, such as automatically adding spaces to the card number.
- Form validation to ensure the entered data is correct.

```js
// change name based on input
nameIn.oninput = function () {
  if (nameIn.value === "") cardNameEl.innerText = "Jane Appleseed";
  else cardNameEl.innerText = nameIn.value;
};

// change number based on input
numberIn.oninput = function () {
  if (numberIn.value === "") cardNumberEl.innerText = "0000 0000 0000 0000";
  else {
    numberIn.value = numberIn.value
      .replace(/\s/g, "")
      .match(/(.{1,4})/g)
      .join(" ");
    cardNumberEl.innerText = numberIn.value;
  }
};

// change date based on input
monthIn.oninput = function () {
  if (yearIn.value === "" && monthIn.value === "")
    cardDateEl.innerText = "00/00";
  else if (yearIn.value === "") cardDateEl.innerText = `${monthIn.value}/00`;
  else cardDateEl.innerText = `${monthIn.value}/${yearIn.value}`;
};
yearIn.oninput = function () {
  if (yearIn.value === "" && monthIn.value === "")
    cardDateEl.innerText = "00/00";
  else if (monthIn.value === "") cardDateEl.innerText = `00/${yearIn.value}`;
  else cardDateEl.innerText = `${monthIn.value}/${yearIn.value}`;
};

// change cvc based on input
cvcIn.oninput = function () {
  if (cvcIn.value === "") cardCodeEl.innerText = "000";
  else cardCodeEl.innerText = cvcIn.value;
};
```

## Author

- Frontend Mentor - [Eleandro](https://www.)
- GitHub - [Eleandro](https://github.com/eleandro1302)
- LinkedIn - [Eleandro](https://www.linkedin.com/in/eleandro-mangrich/)

---

# 💳 Solução do Formulário Interativo de Detalhes do Cartão

Esta é a minha solução para o [desafio Interactive Card Details Form no Frontend Mentor](https://www.frontendmentor.io/). Este projeto foi uma oportunidade incrível para explorar interatividade com JavaScript e criar uma interface responsiva e funcional. 🚀

## Tabela de conteúdos

- [Visão Geral](#visão-geral)
  - [O desafio](#o-desafio)
  - [Captura de tela](#captura-de-tela)
  - [Links](#links)
- [Destaques](#destaques)
- [Meu processo](#meu-processo)
  - [Construído com](#construído-com)
  - [O que aprendi](#o-que-aprendi)
- [Autor](#autor)

## Visão Geral

### O desafio

Os usuários devem ser capazes de:

- Preencher o formulário e ver os detalhes do cartão atualizarem em tempo real
- Receber mensagens de erro ao enviar o formulário se:
  - Algum campo de entrada estiver vazio
  - Os campos de número do cartão, data de validade ou CVC estiverem no formato errado
- Visualizar o layout ideal dependendo do tamanho da tela do dispositivo
- Ver estados de hover, ativo e foco para elementos interativos na página

### Captura de tela

![](./assets/images/screenshot.gif)

### Links

- URL da solução: [Veja no Frontend Mentor](https://www.frontendmentor.io/solutions/interactive-card-details-form-sVbujGc_Ns)
- URL do site ao vivo: [Acesse o projeto ao vivo](https://eleandro-card-details-form.netlify.app/)

## Destaques

✨ **Interatividade em tempo real**: Os detalhes do cartão são atualizados instantaneamente enquanto o usuário digita.  
📱 **Design responsivo**: O layout se adapta perfeitamente a diferentes tamanhos de tela.  
⚡ **Validação de formulário**: Mensagens de erro claras ajudam os usuários a corrigir entradas inválidas.  

## Meu processo

### Construído com

- HTML5 semântico
- CSS3 moderno (Flexbox e Grid)
- JavaScript puro para interatividade

### O que aprendi

Este projeto me ensinou a importância de criar uma experiência de usuário fluida e intuitiva. Aqui estão alguns destaques do que aprendi:

- Manipulação de DOM com JavaScript para atualizar elementos em tempo real.
- Formatação de entradas, como adicionar espaços automaticamente ao número do cartão.
- Validação de formulários para garantir que os dados inseridos sejam corretos.

```js
// change name based on input
nameIn.oninput = function () {
  if (nameIn.value === "") cardNameEl.innerText = "Jane Appleseed";
  else cardNameEl.innerText = nameIn.value;
};

// change number based on input
numberIn.oninput = function () {
  if (numberIn.value === "") cardNumberEl.innerText = "0000 0000 0000 0000";
  else {
    numberIn.value = numberIn.value
      .replace(/\s/g, "")
      .match(/(.{1,4})/g)
      .join(" ");
    cardNumberEl.innerText = numberIn.value;
  }
};

// change date based on input
monthIn.oninput = function () {
  if (yearIn.value === "" && monthIn.value === "")
    cardDateEl.innerText = "00/00";
  else if (yearIn.value === "") cardDateEl.innerText = `${monthIn.value}/00`;
  else cardDateEl.innerText = `${monthIn.value}/${yearIn.value}`;
};
yearIn.oninput = function () {
  if (yearIn.value === "" && monthIn.value === "")
    cardDateEl.innerText = "00/00";
  else if (monthIn.value === "") cardDateEl.innerText = `00/${yearIn.value}`;
  else cardDateEl.innerText = `${monthIn.value}/${yearIn.value}`;
};

// change cvc based on input
cvcIn.oninput = function () {
  if (cvcIn.value === "") cardCodeEl.innerText = "000";
  else cardCodeEl.innerText = cvcIn.value;
};
```

## Autor

- Frontend Mentor - [Eleandro](https://www.)
- GitHub - [Eleandro](https://github.com/eleandro1302)
- LinkedIn - [Eleandro](https://www.linkedin.com/in/eleandro-mangrich/)

