
Curriculum
Short Specializations
Average: 105.73%
0x06. Unittests in JS
UnitTests
Back-end
JavaScript
ES6
NodeJS
ExpressJS
Mocha
 By: Johann Kerbrat, Engineering Manager at Uber Works
 Weight: 1
 Project will start Jun 14, 2023 3:00 AM, must end by Jun 16, 2023 3:00 AM
 Checker will be released at Jun 14, 2023 3:00 PM
 An auto review will be launched at the deadline


Resources
Read or watch:

Mocha documentation
Chai
Sinon
Express
Request
How to Test NodeJS Apps using Mocha, Chai and SinonJS
Learning Objectives
At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

How to use Mocha to write a test suite
How to use different assertion libraries (Node or Chai)
How to present long test suites
When and how to use spies
When and how to use stubs
What are hooks and when to use them
Unit testing with Async functions
How to write integration tests with a small node server
Requirements
All of your code will be executed on Ubuntu 18.04 using Node 12.x.x
Allowed editors: vi, vim, emacs, Visual Studio Code
All your files should end with a new line
A README.md file, at the root of the folder of the project, is mandatory
Your code should use the js extension
When running every test with npm run test *.test.js, everything should pass correctly without any warning or error
Tasks
0. Basic test with Mocha and Node assertion library
mandatory
Install Mocha using npm:

Set up a scripts in your package.json to quickly run Mocha using npm test
You have to use assert
Create a new file named 0-calcul.js:

Create a function named calculateNumber. It should accepts two arguments (number) a and b
The function should round a and b and return the sum of it
Test cases

Create a file 0-calcul.test.js that contains test cases of this function
You can assume a and b are always number
Tests should be around the “rounded” part
Tips:

For the sake of the example, this test suite is slightly extreme and probably not needed
However, remember that your tests should not only verify what a function is supposed to do, but also the edge cases
Requirements:

You have to use assert
You should be able to run the test suite using npm test 0-calcul.test.js
Every test should pass without any warning
Expected output


=====================================

Installer Mocha en utilisant npm :

Mettez en place un script dans votre package.json pour lancer rapidement Mocha à l'aide de npm test
Vous devez utiliser assert
Créez un nouveau fichier nommé 0-calcul.js :

Créez une fonction nommée calculateNumber. Elle doit accepter deux arguments (nombre) a et b
La fonction doit arrondir a et b et retourner la somme des deux.
Cas de test

Créez un fichier 0-calcul.test.js qui contient les cas de test de cette fonction.
Vous pouvez supposer que a et b sont toujours des nombres
Les tests doivent porter sur la partie "arrondie".
Conseils :

Pour les besoins de l'exemple, cette suite de tests est légèrement extrême et n'est probablement pas nécessaire
Cependant, n'oubliez pas que vos tests ne doivent pas seulement vérifier ce qu'une fonction est censée faire, mais aussi les cas limites.
Exigences :

Vous devez utiliser assert
Vous devez pouvoir exécuter la suite de tests en utilisant npm test 0-calcul.test.js
Chaque test doit passer sans avertissement
Résultats attendus


> const calculateNumber = require("./0-calcul.js");
> calculateNumber(1, 3)
4
> calculateNumber(1, 3.7)
5
> calculateNumber(1.2, 3.7)
5
> calculateNumber(1.5, 3.7)
6
> 
Run test

bob@dylan:~$ npm test 0-calcul.test.js 

> task_0@1.0.0 test /root
> ./node_modules/mocha/bin/mocha "0-calcul.test.js"

  calculateNumber
    ✓ ...
    ✓ ...
    ✓ ...
    ...

  130 passing (35ms)
bob@dylan:~$ 
Repo:

GitHub repository: alx-backend-javascript
Directory: 0x06-unittests_in_js
File: package.json, 0-calcul.js, 0-calcul.test.js
  
1. Combining descriptions
mandatory
Create a new file named 1-calcul.js:

Upgrade the function you created in the previous task (0-calcul.js)
Add a new argument named type at first argument of the function. type can be SUM, SUBTRACT, or DIVIDE (string)
When type is SUM, round the two numbers, and add a and b
When type is SUBTRACT, round the two numbers, and subtract b from a
When type is DIVIDE, round the two numbers, and divide a with b - if the rounded value of b is equal to 0, return the string Error
Test cases

Create a file 1-calcul.test.js that contains test cases of this function
You can assume a and b are always number
Usage of describe will help you to organize your test cases
Tips:

For the sake of the example, this test suite is slightly extreme and probably not needed
However, remember that your tests should not only verify what a function is supposed to do, but also the edge cases
Requirements:

You have to use assert
You should be able to run the test suite using npm test 1-calcul.test.js
Every test should pass without any warning
Expected output

=======================================

Créez un nouveau fichier nommé 1-calcul.js :

Améliorez la fonction que vous avez créée dans la tâche précédente (0-calcul.js)
Ajoutez un nouvel argument nommé type au premier argument de la fonction. type peut être SUM, SUBTRACT ou DIVIDE (chaîne de caractères).
Lorsque type est SUM, arrondir les deux nombres et ajouter a et b
Lorsque le type est SUBTRACT, arrondir les deux nombres et soustraire b de a
Lorsque le type est DIVIDE, arrondir les deux nombres et diviser a par b - si la valeur arrondie de b est égale à 0, renvoyer la chaîne Error.
Cas de test

Créez un fichier 1-calcul.test.js qui contient des cas de test de cette fonction.
Vous pouvez supposer que a et b sont toujours des nombres
L'utilisation de describe vous aidera à organiser vos cas de test
Conseils :

Pour les besoins de l'exemple, cette suite de tests est légèrement extrême et n'est probablement pas nécessaire
Cependant, n'oubliez pas que vos tests ne doivent pas seulement vérifier ce qu'une fonction est censée faire, mais aussi les cas limites.
Exigences :

Vous devez utiliser assert
Vous devez pouvoir exécuter la suite de tests en utilisant npm test 1-calcul.test.js
Chaque test doit passer sans avertissement
Résultats attendus


> const calculateNumber = require("./1-calcul.js");
> calculateNumber('SUM', 1.4, 4.5)
6
> calculateNumber('SUBTRACT', 1.4, 4.5)
-4
> calculateNumber('DIVIDE', 1.4, 4.5)
0.2
> calculateNumber('DIVIDE', 1.4, 0)
'Error'
Repo:

GitHub repository: alx-backend-javascript
Directory: 0x06-unittests_in_js
File: 1-calcul.js, 1-calcul.test.js
  
2. Basic test using Chai assertion library
mandatory
While using Node assert library is completely valid, a lot of developers prefer to have a behavior driven development style. This type being easier to read and therefore to maintain.

Let’s install Chai with npm:

Copy the file 1-calcul.js in a new file 2-calcul_chai.js (same content, same behavior)
Copy the file 1-calcul.test.js in a new file 2-calcul_chai.test.js
Rewrite the test suite, using expect from Chai
Tips:

Remember that test coverage is always difficult to maintain. Using an easier style for your tests will help you
The easier your tests are to read and understand, the more other engineers will be able to fix them when they are modifying your code
Requirements:

You should be able to run the test suite using npm test 2-calcul_chai.test.js
Every test should pass without any warning

=================================

Bien que l'utilisation de la bibliothèque Node assert soit tout à fait valide, beaucoup de développeurs préfèrent avoir un style de développement axé sur le comportement. Ce type de développement est plus facile à lire et donc à maintenir.

Installons Chai avec npm :

Copier le fichier 1-calcul.js dans un nouveau fichier 2-calcul_chai.js (même contenu, même comportement)
Copier le fichier 1-calcul.test.js dans un nouveau fichier 2-calcul_chai.test.js
Réécrire la suite de tests, en utilisant expect de Chai
Conseils :

Rappelez-vous que la couverture des tests est toujours difficile à maintenir. L'utilisation d'un style plus simple pour vos tests vous aidera.
Plus vos tests sont faciles à lire et à comprendre, plus les autres ingénieurs seront en mesure de les corriger lorsqu'ils modifieront votre code.
Exigences :

Vous devez être capable d'exécuter la suite de tests en utilisant npm test 2-calcul_chai.test.js
Chaque test doit réussir sans avertissement


Repo:

GitHub repository: alx-backend-javascript
Directory: 0x06-unittests_in_js
File: 2-calcul_chai.js, 2-calcul_chai.test.js
  
3. Spies
mandatory
Spies are a useful wrapper that will execute the wrapped function, and log useful information (e.g. was it called, with what arguments). Sinon is a library allowing you to create spies.

Let’s install Sinon with npm:

Create a new file named utils.js
Create a new module named Utils
Create a property named calculateNumber and paste your previous code in the function
Export the Utils module
Create a new file named 3-payment.js:

Create a new function named sendPaymentRequestToApi. The function takes two argument totalAmount, and totalShipping
The function calls the Utils.calculateNumber function with type SUM, totalAmount as a, totalShipping as b and display in the console the message The total is: <result of the sum>
Create a new file named 3-payment.test.js and add a new suite named sendPaymentRequestToApi:

By using sinon.spy, make sure the math used for sendPaymentRequestToApi(100, 20) is the same as Utils.calculateNumber('SUM', 100, 20) (validate the usage of the Utils function)
Requirements:

You should be able to run the test suite using npm test 3-payment.test.js
Every test should pass without any warning
You should use a spy to complete this exercise
Tips:

Remember to always restore a spy after using it in a test, it will prevent you from having weird behaviors
Spies are really useful and allow you to focus only on what your code is doing and not the downstream APIs or functions
Remember that integration test is different from unit test. Your unit test should test your code, not the code of a different function

==================================================

Les espions sont des enveloppes utiles qui exécutent la fonction enveloppée et enregistrent des informations utiles (par exemple, a-t-elle été appelée, avec quels arguments). Sinon est une bibliothèque permettant de créer des espions.

Installons Sinon avec npm :

Créer un nouveau fichier nommé utils.js
Créer un nouveau module nommé Utils
Créer une propriété nommée calculateNumber et coller votre code précédent dans la fonction
Exporter le module Utils
Créez un nouveau fichier nommé 3-payment.js :

Créez une nouvelle fonction nommée sendPaymentRequestToApi. La fonction prend deux arguments : totalMontant, et totalExpédition.
La fonction appelle la fonction Utils.calculateNumber avec le type SUM, totalAmount comme a, totalShipping comme b et affiche dans la console le message Le total est : <résultat de la somme>
Créez un nouveau fichier nommé 3-payment.test.js et ajoutez une nouvelle suite nommée sendPaymentRequestToApi :

En utilisant sinon.spy, assurez-vous que les mathématiques utilisées pour sendPaymentRequestToApi(100, 20) sont les mêmes que Utils.calculateNumber('SUM', 100, 20) (validez l'utilisation de la fonction Utils).
Exigences :

Vous devez être capable d'exécuter la suite de tests en utilisant npm test 3-payment.test.js
Tous les tests doivent être réussis sans aucun avertissement
Vous devez utiliser un spy pour réaliser cet exercice.
Conseils :

N'oubliez pas de toujours restaurer un spy après l'avoir utilisé dans un test, cela vous évitera d'avoir des comportements bizarres.
Les espions sont vraiment utiles et vous permettent de vous concentrer uniquement sur ce que fait votre code et non sur les API ou les fonctions en aval.
Rappelez-vous que les tests d'intégration sont différents des tests unitaires. Votre test unitaire doit tester votre code, et non le code d'une fonction différente.


Repo:

GitHub repository: alx-backend-javascript
Directory: 0x06-unittests_in_js
File: utils.js, 3-payment.js, 3-payment.test.js
  
4. Stubs
mandatory
Stubs are similar to spies. Except that you can provide a different implementation of the function you are wrapping. Sinon can be used as well for stubs.

Create a new file 4-payment.js, and copy the code from 3-payment.js (same content, same behavior)

Create a new file 4-payment.test.js, and copy the code from 3-payment.test.js

Imagine that calling the function Utils.calculateNumber is actually calling an API or a very expensive method. You don’t necessarily want to do that on every test run
Stub the function Utils.calculateNumber to always return the same number 10
Verify that the stub is being called with type = SUM, a = 100, and b = 20
Add a spy to verify that console.log is logging the correct message The total is: 10
Requirements:

You should be able to run the test suite using npm test 4-payment.test.js
Every test should pass without any warning
You should use a stub to complete this exercise
Do not forget to restore the spy and the stub
Tips:

Using stubs allows you to greatly speed up your test. When executing thousands of tests, saving a few seconds is important
Using stubs allows you to control specific edge case (e.g a function throwing an error or returning a specific result like a number or a timestamp)

==============================================

Les stubs sont similaires aux spies. Sauf que vous pouvez fournir une implémentation différente de la fonction que vous encapsulez. Sinon peut également être utilisé pour les stubs.

Créez un nouveau fichier 4-payment.js, et copiez le code de 3-payment.js (même contenu, même comportement)

Créez un nouveau fichier 4-payment.test.js, et copiez le code de 3-payment.test.js

Imaginez que l'appel à la fonction Utils.calculateNumber soit en fait l'appel à une API ou à une méthode très coûteuse. Vous ne voulez pas nécessairement faire cela à chaque exécution du test
Créez un stub pour la fonction Utils.calculateNumber afin qu'elle renvoie toujours le même nombre, à savoir 10
Vérifiez que le stub est appelé avec type = SUM, a = 100, et b = 20
Ajoutez un espion pour vérifier que console.log enregistre le bon message Le total est : 10
Exigences :

Vous devez être capable d'exécuter la suite de tests en utilisant npm test 4-payment.test.js
Chaque test doit passer sans avertissement
Vous devez utiliser un stub pour réaliser cet exercice.
N'oubliez pas de restaurer le spy et le stub
Conseils et astuces :

L'utilisation de stubs vous permet d'accélérer considérablement vos tests. Lorsque vous exécutez des milliers de tests, il est important de gagner quelques secondes.
L'utilisation de stubs vous permet de contrôler des cas particuliers (par exemple une fonction qui lance une erreur ou renvoie un résultat spécifique comme un nombre ou un timestamp).


Repo:

GitHub repository: alx-backend-javascript
Directory: 0x06-unittests_in_js
File: 4-payment.js, 4-payment.test.js
  
5. Hooks
mandatory
Hooks are useful functions that can be called before execute one or all tests in a suite

Copy the code from 4-payment.js into a new file 5-payment.js: (same content/same behavior)

Create a new file 5-payment.test.js:

Inside the same describe, create 2 tests:
The first test will call sendPaymentRequestToAPI with 100, and 20:
Verify that the console is logging the string The total is: 120
Verify that the console is only called once
The second test will call sendPaymentRequestToAPI with 10, and 10:
Verify that the console is logging the string The total is: 20
Verify that the console is only called once
Requirements:

You should be able to run the test suite using npm test 5-payment.test.js
Every test should pass without any warning
You should use only one spy to complete this exercise
You should use a beforeEach and a afterEach hooks to complete this exercise

===========================================

Les hooks sont des fonctions utiles qui peuvent être appelées avant d'exécuter un ou tous les tests d'une suite.

Copier le code de 4-payment.js dans un nouveau fichier 5-payment.js : (même contenu/même comportement)

Créer un nouveau fichier 5-payment.test.js :

A l'intérieur de la même description, créez 2 tests :
Le premier test appellera sendPaymentRequestToAPI avec 100, et 20 :
Vérifiez que la console enregistre la chaîne Le total est : 120
Vérifiez que la console n'est appelée qu'une seule fois
Le deuxième test appellera sendPaymentRequestToAPI avec 10, et 10 :
Vérifier que la console enregistre la chaîne Le total est de : 20
Vérifier que la console n'est appelée qu'une seule fois
Exigences :

Vous devez être capable d'exécuter la suite de tests en utilisant npm test 5-payment.test.js
Tous les tests doivent être réussis sans aucun avertissement
Vous ne devez utiliser qu'un seul espion pour réaliser cet exercice
Vous devez utiliser des hooks beforeEach et afterEach pour réaliser cet exercice


Repo:

GitHub repository: alx-backend-javascript
Directory: 0x06-unittests_in_js
File: 5-payment.js, 5-payment.test.js
  
6. Async tests with done
mandatory
Look into how to support async testing, for example when waiting for the answer of an API or from a Promise

Create a new file 6-payment_token.js:

Create a new function named getPaymentTokenFromAPI
The function will take an argument called success (boolean)
When success is true, it should return a resolved promise with the object {data: 'Successful response from the API' }
Otherwise, the function is doing nothing.
Create a new file 6-payment_token.test.js and write a test suite named getPaymentTokenFromAPI

How to test the result of getPaymentTokenFromAPI(true)?
Tips:

You should be extremely careful when working with async testing. Without calling done properly, your test could be always passing even if what you are actually testing is never executed
Requirements:

You should be able to run the test suite using npm test 6-payment_token.test.js
Every test should pass without any warning
You should use the done callback to execute this test

==================================================

Examinez comment prendre en charge les tests asynchrones, par exemple lorsque vous attendez la réponse d'une API ou d'une promesse.

Créez un nouveau fichier 6-payment_token.js :

Créez une nouvelle fonction nommée getPaymentTokenFromAPI
La fonction prendra un argument appelé success (booléen)
Lorsque le succès est vrai, elle doit renvoyer une promesse résolue avec l'objet {data : 'Successful response from the API' }
Sinon, la fonction ne fait rien.
Créez un nouveau fichier 6-payment_token.test.js et écrivez une suite de tests nommée getPaymentTokenFromAPI

Comment tester le résultat de getPaymentTokenFromAPI(true) ?
Conseils :

Vous devez être extrêmement prudent lorsque vous travaillez avec des tests asynchrones. Si l'appel n'est pas fait correctement, votre test pourrait toujours passer même si ce que vous testez réellement n'est jamais exécuté.
Exigences :

Vous devez être en mesure d'exécuter la suite de tests en utilisant npm test 6-payment_token.test.js
Chaque test doit passer sans avertissement
Vous devez utiliser le callback done pour exécuter ce test


Repo:

GitHub repository: alx-backend-javascript
Directory: 0x06-unittests_in_js
File: 6-payment_token.js, 6-payment_token.test.js
  
7. Skip
mandatory
When you have a long list of tests, and you can’t figure out why a test is breaking, avoid commenting out a test, or removing it. Skip it instead, and file a ticket to come back to it as soon as possible

You will be using this file, conveniently named 7-skip.test.js

const { expect } = require('chai');

describe('Testing numbers', () => {
  it('1 is equal to 1', () => {
    expect(1 === 1).to.be.true;
  });

  it('2 is equal to 2', () => {
    expect(2 === 2).to.be.true;
  });

  it('1 is equal to 3', () => {
    expect(1 === 3).to.be.true;
  });

  it('3 is equal to 3', () => {
    expect(3 === 3).to.be.true;
  });

  it('4 is equal to 4', () => {
    expect(4 === 4).to.be.true;
  });

  it('5 is equal to 5', () => {
    expect(5 === 5).to.be.true;
  });

  it('6 is equal to 6', () => {
    expect(6 === 6).to.be.true;
  });

  it('7 is equal to 7', () => {
    expect(7 === 7).to.be.true;
  });
});
Using the file 7-skip.test.js:

Make the test suite pass without fixing or removing the failing test
it description must stay the same
Tips:

Skipping is also very helpful when you only want to execute the test in a particular case (specific environment, or when an API is not behaving correctly)
Requirements:

You should be able to run the test suite using npm test 7-skip.test.js
Every test should pass without any warning

==============================================

Lorsque vous avez une longue liste de tests et que vous n'arrivez pas à comprendre pourquoi un test ne fonctionne pas, évitez de commenter un test ou de le supprimer. Sautez-le plutôt, et déposez un ticket pour y revenir dès que possible

Vous utiliserez ce fichier, commodément nommé 7-skip.test.js

En utilisant le fichier 7-skip.test.js :

Faire passer la suite de tests sans corriger ou supprimer le test défaillant
la description doit rester la même
Conseils :

Sauter est également très utile lorsque vous ne voulez exécuter le test que dans un cas particulier (environnement spécifique, ou lorsqu'une API ne se comporte pas correctement).
Exigences :

Vous devez être capable d'exécuter la suite de tests en utilisant npm test 7-skip.test.js
Chaque test doit réussir sans aucun avertissement


Repo:

GitHub repository: alx-backend-javascript
Directory: 0x06-unittests_in_js
File: 7-skip.test.js
  
8. Basic Integration testing
mandatory
In a folder 8-api located at the root of the project directory, copy this package.json over.

{
  "name": "8-api",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "./node_modules/mocha/bin/mocha"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1"
  },
  "devDependencies": {
    "chai": "^4.2.0",
    "mocha": "^6.2.2",
    "request": "^2.88.0",
    "sinon": "^7.5.0"
  }
}
Create a new file api.js:

By using express, create an instance of express called app
Listen to port 7865 and log API available on localhost port 7865 to the browser console when the express server is started
For the route GET /, return the message Welcome to the payment system
Create a new file api.test.js:

Create one suite for the index page:
Correct status code?
Correct result?
Other?
Server

======================================================

Dans un dossier 8-api situé à la racine du répertoire du projet, copiez ce package.json.

Créez un nouveau fichier api.js :

En utilisant express, créer une instance d'express appelée app
Écouter le port 7865 et enregistrer l'API disponible sur le port 7865 de localhost dans la console du navigateur lorsque le serveur express est démarré.
Pour la route GET /, renvoyer le message Welcome to the payment system (Bienvenue dans le système de paiement)
Créez un nouveau fichier api.test.js :

Créer une suite pour la page d'index :
Code d'état correct ?
Résultat correct ?
Autre ?


Terminal 1

bob@dylan:~/8-api$  node api.js
API available on localhost port 7865
Terminal 2

bob@dylan:~/8-api$  curl http://localhost:7865 ; echo ""
Welcome to the payment system
bob@dylan:~/8-api$  
bob@dylan:~/8-api$ npm test api.test.js

> 8-api@1.0.0 test /root/8-api
> ./node_modules/mocha/bin/mocha "api.test.js"



  Index page
    ✓ ...
    ✓ ...
    ...

  23 passing (256ms)

bob@dylan:~/8-api$
Tips:

Since this is an integration test, you will need to have your node server running for the test to pass
You can use the module request
Requirements:

You should be able to run the test suite using npm test api.test.js
Every test should pass without any warnings

=========================================

Conseils :

Étant donné qu'il s'agit d'un test d'intégration, vous devrez faire fonctionner votre serveur node pour que le test réussisse.
Vous pouvez utiliser la demande de module
Exigences :

Vous devez être en mesure d'exécuter la suite de tests en utilisant npm test api.test.js
Chaque test doit réussir sans aucun avertissement


Repo:

GitHub repository: alx-backend-javascript
Directory: 0x06-unittests_in_js
File: 8-api/package.json, 8-api/api.js, 8-api/api.test.js
  
9. Regex integration testing
mandatory
In a folder 9-api, reusing the previous project in 8-api (package.json, api.js and api.test.js)

Modify the file api.js:

Add a new endpoint: GET /cart/:id
:id must be only a number (validation must be in the route definition)
When access, the endpoint should return Payment methods for cart :id
Modify the file api.test.js:

Add a new test suite for the cart page:
Correct status code when :id is a number?
Correct status code when :id is NOT a number (=> 404)?
etc.
Server

============================================

Dans un dossier 9-api, réutiliser le projet précédent dans 8-api (package.json, api.js et api.test.js)

Modifier le fichier api.js :

Ajouter un nouveau point de terminaison : GET /cart/:id
:id ne doit être qu'un nombre (la validation doit se faire dans la définition de la route)
Lors de l'accès, le point de terminaison doit renvoyer les méthodes de paiement pour le panier :id
Modifier le fichier api.test.js :

Ajouter une nouvelle suite de tests pour la page panier :
Code d'état correct lorsque :id est un nombre ?
Code de statut correct lorsque :id n'est PAS un nombre (=> 404) ?
etc.


Terminal 1

bob@dylan:~$ node api.js
API available on localhost port 7865
Terminal 2

bob@dylan:~$ curl http://localhost:7865/cart/12 ; echo ""
Payment methods for cart 12
bob@dylan:~$ 
bob@dylan:~$ curl http://localhost:7865/cart/hello -v
*   Trying 127.0.0.1...
* TCP_NODELAY set
* Connected to localhost (127.0.0.1) port 7865 (#0)
> GET /cart/hello HTTP/1.1
> Host: localhost:7865
> User-Agent: curl/7.58.0
> Accept: */*
> 
< HTTP/1.1 404 Not Found
< X-Powered-By: Express
< Content-Security-Policy: default-src 'none'
< X-Content-Type-Options: nosniff
< Content-Type: text/html; charset=utf-8
< Content-Length: 149
< Date: Wed, 15 Jul 2020 08:33:44 GMT
< Connection: keep-alive
< 
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Error</title>
</head>
<body>
<pre>Cannot GET /cart/hello</pre>
</body>
</html>
* Connection #0 to host localhost left intact
bob@dylan:~$ 
Tips:

You will need to add a small regex in your path to support the usecase
Requirements:

You should be able to run the test suite using npm test api.test.js
Every test should pass without any warning

==================================================

Conseils :

Vous devrez ajouter une petite regex dans votre chemin d'accès pour prendre en charge le cas d'utilisation.
Exigences :

Vous devez être capable d'exécuter la suite de tests en utilisant npm test api.test.js
Chaque test doit passer sans avertissement


Repo:

GitHub repository: alx-backend-javascript
Directory: 0x06-unittests_in_js
File: 9-api/api.js, 9-api/api.test.js, 9-api/package.json
  
10. Deep equality & Post integration testing
mandatory
In a folder 10-api, reusing the previous project in 9-api (package.json, api.js and api.test.js)

Modify the file api.js:

Add an endpoint GET /available_payments that returns an object with the following structure:
{
  payment_methods: {
    credit_cards: true,
    paypal: false
  }
}
Add an endpoint POST /login that returns the message Welcome :username where :username is the value of the body variable userName.
Modify the file api.test.js:

Add a test suite for the /login endpoint
Add a test suite for the /available_payments endpoint
Server

================================================

Dans un dossier 10-api, réutiliser le projet précédent dans 9-api (package.json, api.js et api.test.js)

Modifier le fichier api.js :

Ajouter un endpoint GET /available_payments qui retourne un objet avec la structure suivante :


Terminal 1

bob@dylan:~$ node api.js
API available on localhost port 7865
Terminal 2

bob@dylan:~$ curl http://localhost:7865/available_payments ; echo ""
{"payment_methods":{"credit_cards":true,"paypal":false}}
bob@dylan:~$ 
bob@dylan:~$ curl -XPOST http://localhost:7865/login -d '{ "userName": "Betty" }' -H 'Content-Type: application/json' ; echo ""
Welcome Betty
bob@dylan:~$ 
Tips:

Look at deep equality to compare objects
Requirements:

You should be able to run the test suite using npm test api.test.js
Every test should pass without any warning
Your server should not display any error

==============================================

Ajouter un point de terminaison POST /login qui renvoie le message Welcome :username où :username est la valeur de la variable body userName.
Modifiez le fichier api.test.js :

Ajouter une suite de tests pour le point de terminaison /login
Ajouter une suite de tests pour le point de terminaison /available_payments
Serveur


Repo:

GitHub repository: alx-backend-javascript
Directory: 0x06-unittests_in_js
File: 10-api/api.js, 10-api/api.test.js, 10-api/package.json
  
Copyright © 2023 ALX, All rights reserved.