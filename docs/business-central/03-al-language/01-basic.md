
# Basi del linguaggio AL

:::caution Attenzione

**In fase di creazione**.

Slide "Academy_20230926_Costrutti di Programmazione"

:::

AL is the programming language that is used for manipulating data such as retrieving, inserting, and modifying records in a Dynamics 365 Business Central database. It controls the execution of the various application objects, such as pages, reports, or codeunits.

With AL, you can create business rules to ensure that the data, which is stored in the database is meaningful and consistent with the way customers do business. Through AL programming, you can:

Every object in Dynamics 365 Business Central contains triggers where you can add your AL code. You can initiate the execution of your AL code from the Actions.

## Variabili
Una variabile, in informatica, è un contenitore di dati situato in una porzione di memoria destinata a contenere valori, suscettibili di modifica nel corso dell'esecuzione di un programma. Una variabile è caratterizzata da un nome alfanumerico.

Le variabili in AL vengono dichiarate utilizzando la parola chiave *var* e la sintassi è simile a questa:

```al
var
    myInt: Integer;
```

E’ possibile dichiarate in una riga più variabili dello stesso tipo:

```al
var
    myInt, nextInt, thirdInt : Integer;
    isValid, doCheck : Boolean;
```

Ogni variabile deve essere obbligatoriamente definita specificando il tipo di dato che conterrà. La variabile può essere dichiarata senza inizializzarla, in questo caso il compilatore assegnerà un valore di default in base al tipo di dato.

I tipi di dato primitivi sono:

```al
var
    MyText : Text;          // Hello World
    MyCode : Code[20];      // HELLO-WORLD
    MyInteger : Integer;    // 123
    MyDecimal : Decimal;    // 123.45
    MyBoolean : Boolean;    // true
    MyDate : Date;          // 31/12/2023
    MyTime : Time;          // 12:59:59
    MyDateTime : DateTime;  // 31/12/2023 12:59:59
```

[Qui](https://learn.microsoft.com/it-it/dynamics365/business-central/dev-itpro/developer/methods-auto/library) è possibile trovare la lista completa dei tipi di dato.

## Assegnazioni

Le assegnazioni assegnano un valore ad una variabile. Il valore che assegni è un'espressione AL. Può essere una costante, una variabile, o può consistere nel valore di ritorno di una funzione. L'operatore di assegnazione è il segno di due punti uguale **:=**.

```al
// una costante
Count := 1;

// una costante, un operatore e una variabile
Amount := 2 * Price;

// valore di ritorno di una funzione
Amount := CalcAmount(Price, Quantity);
```

E’ consentito eseguire operazioni aritmetiche su una variabile ed assegnarne il risultato alla variabile stessa, con la seguente sintassi:
    
```al
Counter := 0;

// you can use this syntax 

// for addition
Counter += 1;
// for subtraction
Counter -= 1;
// for multiplication
Counter *= 1:
// for division
Counter /= 1;

// instead of 
Counter := Counter + 1;
```

Anche con le stringhe è possibile utilizzare la stessa sintassi per concatenarle:

```al
String := "Hello ";
String += "World";
```

## Costrutti di controllo
AL code consists of one or more statements, which are executed sequentially in a top-down order. However, you'll often need to control the direct top-down flow of the execution. One or more statements may have to be repeated more than once, or you may have to make the execution of a certain statement conditional. To do so, you use control structures.

The control structures in AL are divided into the following main groups, as described in this article:

* AL compound statements
* AL conditional statements
* AL repetitive statements

Il codice AL è composto da una serie di istruzioni, eseguite sequenzialmente in un ordine dall'alto verso il basso. Tuttavia, spesso sarà necessario controllare il flusso dell'esecuzione: le istruzioni potrebbero dover essere ripetute più di una volta, oppure potrebbe essere necessario condizionare il codice. Per farlo, si utilizzano le strutture di controllo. In AL sono divise nei seguenti gruppi principali:
* Compound statements
* Conditional statements
* Repetitive statements

## Compound statements
In some cases, the AL syntax only lets you use a single statement. However, if you have to run more than one simple statements, the statements can be written as a compound statement (a block statement) by enclosing the them between the *begin* and *end* keywords.

```al
begin
    <Statement 1>;  
    <Statement 2>;  
    ..  
    <Statement n>;  
end;
```
The individual statements are separated by a semicolon. In AL, a semicolon is used to separate statements and not to terminate them, as in other programming languages. Nevertheless, an extra semicolon before an end doesn't cause an error because it's interpreted by the compiler as an empty statement.

## Conditional statements
Si utilizzano le istruzioni condizionali per specificare una condizione e uno o più comandi da eseguire se la condizione viene valutata come vera o falsa. Esistono due tipi di istruzioni condizionali in AL:
* IF-THEN-ELSE, dove ci sono due scelte
* CASE, dove ci sono più di due scelte

### If-then-else statements
Se `<Condition>` è vera, allora viene eseguita `<Statement1>`. Se `<Condition>` è falsa, allora viene eseguita `<Statement2>`.

```al
if <Condition> then  
    <Statement1>  
[else  
    <Statement2>]
```

* Il ramo else è opzionale
* Le condizioni si possono annidare in modo strutturato
* Gruppi di istruzioni possono essere racchiusi tra BEGIN .. END

```al
if <Condition1> then   
    if <Condition2> then   
        <Statement1>   
    else  
        <Statement2>
```

La condizione può essere: 
* un’espressione semplice: `if x = y then`
* un'espressione negata: `if not (x = y) then`
* un’espressione composta da più condizioni AND e OR: `if (x = y) and (a = b) then` la gerarchia si esprime con l’utilizzo delle parentesi tonde.

Gli operatori di confronto sono:

| Simbolo | Significato          |
|---------|----------------------|
| `=`     | uguale               |
| `<>`    | diverso              |
| `>`     | maggiore             |
| `<`     | minore               |
| `>=`    | maggiore o uguale    |
| `<=`    | minore o uguale      |

Esempio:
    
```al
if (var1 = var2) and   
    (var3 > var4)  
then begin
    x := a;
    y := b;
end else begin
    a := x;
    b := y;
end;
```

![if statement](/img/business-central/AL1.png)

### Case statements
The result of `<Expression>` is matched against each value set and `<Value set>` must be an expression or a range.

```al
case <Expression> of  
    <Value set 1>:  
        <Statement 1>;  
    <Value set 2>:  
        <Statement 2>;  
    ..
    <Value set n>:  
        <Statement n>;  
[else  
    <Statement n+1>]  
end;
```

used when you must choose between more than two different actions. The method of the case statement is as follows:
* The `<Expression>` is evaluated, and the first matching value set executes the associated statement, if there's one.
* If no value set matches, the statement associated with the else clause is executed, if there's one.

```al
case Number of  
    1,2,9:  
        begin
            x := 1;
            message('1, 2, or 9.');
        end;  
    10..100:  
        message('In the range from 10 to 100.');  
else  
    message('Neither 1, 2, 9, nor in the range from 10 to 100.');  
end;

// ------------------------------------------------

MyCode := 'ABC';  
case MyCode of  
    'abc':  
        message('This message is not displayed.');   
    'def':  
        message('This message is not displayed.');  
else  
    message('The value set does not match the expression.');
end;
```

## Repetitive statements (Cicli iterativi)


## Link utili
* [Panoramica](https://learn.microsoft.com/it-it/dynamics365/business-central/dev-itpro/developer/devenv-reference-overview)