# React Complete Guide Course
Repo para guardar coisas de um curso da Udemy

# React vs Angular vs Vue
- https://academind.com/tutorials/angular-vs-react-vs-vue-my-thoughts/

# Tips
## Javascript refresher
### Exports X Imports
- **export default** quando importado em outro arquivo pode ser chamado com qualquer **name**.
    ```js
    // person.js
    
    const person = {
        name: 'Vinícius',
    }

    export default person;
    ```
- exports padrões devem seguir o nome exportado
    ```js
    // utility.js

    export const clean = () => { ... };

    export const baseData = 10;
    ```

```js
// app.js

import person from './person.js';
import prs from './person.js'; // nomeie como quiser

import { baseData } from './utility.js';
import { clean } from './utility.js';
```

### Spread X Rest
Spread:
```js
const person = {
    age: '28',
}

const newPerson = {
    ...person,
    name: 'Vinícius Romão',
}

console.log(newPerson); // { age: 28, name: 'Vinícius Romão }
```

Rest:
```js
const filterNumber = (...numbers) => numbers.filter(number => number === 1);

console.log(filterNumber(1, 2, 3, 4)); // [1]
```

### Destructuring
Array:
```js
const numbers = [ 1, 2, 3 ];

[ n1, n2 ] = numbers;
console.log(n1, n2); // 1, 2

[ n1, , n3 ] = numbers;
console.log(n1, n3); // 1, 3
```

Object:
```js
const person = { name: 'Vinícius', age: '28', };

{ name } = numbers;
console.log(name, age); // 'Vinícius, undefined
```

### Reference and Primitive Types
```js
const number = 1;
const newNumber = number; // = 1. Isto é um primitive type, sendo assim, cria uma nova copia/referencia na memoria
```

Primitive Types: strings, booleans e numbers.
Reference Types: Arrays e Objects.

Tipos de referencia apontam para uma referencia de ponteiro na memoria:
```js
const person = {
    age: '28',
    name: 'Vinícius',
}

person.name: 'Agora é outro nome';

const newPerson = person;
console.log(newPerson); // { age: 28, name: 'Agora é outro nome' }
```

Conforme o exemplo acima a property **name** acaba mudando na variavel newPerson, pois Reference Type não cria uma nova copia daquilo que é atribuido e sim aponta para a **mesma** referencia na memoria. Uma forma de exemplo para contornar isso é usando o spread:

```js
const person = {
    age: '28',
    name: 'Vinícius',
}

person.name: 'Agora é outro nome';

const newPerson = { ...person };
console.log(newPerson); // { age: 28, name: 'Vinícius' }
```

No exemplo acima podemos ver que a property **name** se mantem com o valor original pois aqui o spread realmente acaba copiando os valores para o novo objeto criado na váriavel constante **newPerson**. O ideal é nunca alterar valor de arrays e objetos já atribuidos já que é boa pratica que os mesmos sejam imutáveis.

## React Tips

### UseEffect
O `UseEffect` é um dos hooks mais importantes e que permite com que nós possamos interagir com side-effects dentro do componente React. Esses side-effects podem ser ações oriundas de interação na interface, para quando um dado, estado ou props muda, requisições HTTP, etc. É executado após o componente ser renderizado (paint e etc) e após todo re-render (isso também é definido e controlado pelas dependências, podendo mudar este comportamento).

#### O que colocar nas dependências?
Como "regra" ou boa pratica geral, nós devemos usar como dependência tudo que estivermos usando dentro do nosso `UseEffect` **se** oq vamos colocar pode sofrar mudanças devido ao re-render do componente em questão. Como nota, não precisamos declarar: 
- state updating functions (o React se garante que essas funções nunca mudam, assim não é necessário declarar)
- uso de APIs ou funções "built-in" (como localstorage, fetch(), ou qualquer outra coisa que não seja do mundo React)
- variáveis ou funções definidas por nós fora do componente ou como auxiliares dentro do `useEffect`

#### Cleanup function
Dentro do ciclo de vida do `UseEffect` existe a função de cleanup. O comportamento dessa função é:
- Não é executada quando o componente é montado pela primeira vez
- Será executada toda vez após o primeiro render **e** quando o componente for **desmontado**
- **Sempre** é executada antes do conteúdo da função do `UseEffect`

### UseReducer
- Se esta manipulando um (ou varios) state que **depende de outro state** em um cenário complexo, vale a pena utilizar o `UseReducer` no lugar.
