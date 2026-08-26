/*
### 2

a)

Создай функцию-конструктор объектов Account(iban,owner, balance), 

которая возвращает объект с:

- номер счета (iban)

- именем владельца (owner)

- балансом (balance)  

методами:

- **deposit**(amount) — пополнение счёта

- **withdraw**(amount) — снятие денег (если хватает баланса)

- **getBalance**() — вывод текущего баланса

 

Создайте несколько объектов счетов. Создайте массив из

счетов. Выведите информацию о всех счетах в консоль

 

b) напишите функцию, transfer, которая получает два счета, 

и выполняет перевод между счетами вызывая методы deposit и

withdraw соответственно. 

 

с) (чуть сложнее****************)

 В качестве результата функции transaer, в случае успешной 

операции, должен cформироваться объект: 

- account1 (счет списания), 

- account2 (счет зачисления),

- amount (сумма)

- transactionInfo() (функция, которая выводит информацию о транзакции)

Если транзакция прошла неуспешно, объект должен содержать 

еще и поле error c информацией об ошибке. Естественно,

transactionInfo() должна в этом случае выводить информацию 

о неуспешной транзакции. В случае, если транзакция успешна, 

поля error не должно быть.

*/

function Account(iban, owner, balance) {
    this.iban = iban;
    this.owner = owner;
    this.balance = balance;
    this.deposit = function (amount) {
      if (amount > 0) {
        this.balance += amount;
        return this.balance;
      } else {
        return "Некорректная сумма операции";
      }
    };  
    this.withdraw = function (amount) {
      if (amount <= 0) {
        return "Некорректная сумма операции";
      }
      if (this.balance - amount >= 0) {
        this.balance -= amount;
        return this.balance;
      } else {
        return "Недостаточно средств для вывода";
      }
    };
    this.getBalance = function () {
      return this.balance;
    };
}

let account1 = new Account("123456789012345678", "John", 15000);
let account2 = new Account("476752387482374523", "Mary", 10000);
console.log(account1);
console.log(account2);

const accounts = [
  new Account("123456789012345678", "John", 15000),
  new Account("476752387482374523", "Mary", 10000),
  new Account("123456789012345678", "John", 15000),
  new Account("476752387482374523", "Mary", 10000),
];
console.log(accounts);

function transfer(arg1, arg2, amount) {
  let transaction = {
    account1: arg1,
    account2: arg2,
    amount: amount,
    transactionInfo: function () {
      if (this.error) {
        return `Транзакция: 
            account1: ${this.account1.owner}, Номер счета: ${this.account1.iban} (Счет списания)
            account2: ${this.account2.owner}, Номер счета: ${this.account2.iban} (Счет зачисления)
            amount: ${this.amount},
            error: Транзакция не удалась: ${this.error}`;
      } else {
        return `Транзакция: 
            account1: ${this.account1.owner}, Номер счета: ${this.account1.iban} (Счет списания)
            account2: ${this.account2.owner}, Номер счета: ${this.account2.iban} (Счет зачисления)
            amount: ${this.amount}`;
      }
    },
  };
  if (arg1.balance - amount >= 0 && amount > 0) {
    arg1.withdraw(amount);
    arg2.deposit(amount);
    return transaction;
  }else {
    transaction.error = "Недостаточно средств для перевода";
    return transaction;
  }
}
console.log("====== transfer ======");
let res = transfer(account1, account2, 300);
console.log(res.transactionInfo());
