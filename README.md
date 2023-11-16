# Currency Converter Exercise - Alura Dev Immersion

This repository contains the code for a simple currency converter exercise completed during the Alura Dev Immersion course. The exercise involves creating a web page that takes a user's input in dollars, converts it to Brazilian Real based on a fixed exchange rate, and displays the result.

## Table of Contents

- [JavaScript](#javascript)
- [CSS](#css)
- [HTML](#html)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## JavaScript

```javascript
var precoEmDolar = prompt('Qual é o valor em dólares?');
var cotacaodoDolar = 5.32;

var precoEmReal = (precoEmDolar * cotacaodoDolar).toFixed(2);

nome = prompt('Qual é o seu nome?');

alert(`Oi ${nome}, o preço é R$ ${precoEmReal}`);
```

## CSS

```CSS
body {
    font-family: "Roboto Mono", monospace;
    text-align: center;
    background-image: url("https://caelum-online-public.s3.amazonaws.com/assets-imersaodev/Background.png");
    background-color: #000000;
    background-size: cover;
    background-position: center top;
    background-repeat: no-repeat;
    height: 100vh;
}

.container {
    text-align: center;
    padding: 20px;
}

.page-title {
    color: #ffffff;
    margin: 0 0 5px;
}

.page-subtitle {
    color: #ffffff;
    margin-top: 5px;
}

.page-logo {
    width: 200px;
}

.alura-logo {
    width: 40px;
    position: absolute;
    top: 10px;
    right: 10px;
}

body > img {
    margin: 0 10px;
}

img {
    max-height: 250px;
}
```

## HTML

```HTML

<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Currency Converter</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1 class="page-title">
          Currency Converter
        </h1>
        <img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/logo-imersao-aluraflix.svg" class="page-logo" alt="">
    </div>
    <img src="https://www.alura.com.br/assets/img/home/alura-logo.svg" alt="" class="alura-logo">
    <img src="https://caelum-online-public.s3.amazonaws.com/assets-imersaodev/Convers%C3%A3o+1.png">
</body>
<script src="index.js"></script>
</html>
```
## Usage
Open the index.html file in your preferred web browser.

Input the amount in dollars when prompted, and the converted value will be displayed.

## Contributing
Contributions are welcome! If you find a bug, have a suggestion, or want to contribute in any way, please open an issue or create a pull request.

