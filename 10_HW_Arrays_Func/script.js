// function inputMoney(amount) {
//     return this.balance += amount;
//   }
  
//   function outputMoney(amount) {
//     if (this.balance >= amount) {
//       this.balance -= amount;
//     }  else{
//     console.log("You don't have this money!");
// }
//     return this.balance;
//   }
  
//   function checkBalance() {
//     return this.balance;
//   }

// const bankID = [
//     {
//       owner: 'Galina Arbatova',
//       balance: 2300
//     },
//     {
//       owner: 'John',
//       balance: 3432
//     },  
//     {
//       owner: 'Tigran',
//       balance: 612
//     },
//     {
//       owner: 'Rabindranat',
//       balance: 8765
//     }
//   ];
  
//   const bankAccounts = bankID.map(clients => {
//     return {
//       owner: clients.owner,
//       balance: clients.balance,
//       inputMoney,
//       outputMoney,
//       checkBalance
//     };
//   });
  
//   const client = bankAccounts.find(account => account.owner === 'John');
//   client.inputMoney(500);
//   console.log(client.checkBalance());

//   const client1 = bankAccounts.find(account => account.owner === 'Tigran');
//   client1.outputMoney(655);
//   console.log(client1.checkBalance());

const bankAccount = {
  accountNumber:'123456789',
  accountHolderName: 'Alice', 
  balance: 1000,
  deposit:function(amount){
    amount>60000? console.log("Требуется подтверждения легальности дохода"): 
    this.balance+=amount;
  },
  withdrow:function(amount){
    if(amount<=this.balance){
      this.balance-=amount;
    }else{
      console.log("You don`t have this money");
    }
    amount<=this.balance? this.balance-= amount:console.log("You don`t have this money");
  },
  checkBalance:function(){
    console.log(`Account balance is ${this.balance}`);
  }
}

bankAccount.checkBalance();
bankAccount.deposit(500);
bankAccount.checkBalance();
bankAccount.withdrow(700);
bankAccount.checkBalance();
bankAccount.withdrow(700);
bankAccount.checkBalance();


// function bankAccount(numberAccount, name, balance) {
//   this.numberAccount = numberAccount;
//   this.name = name;
//   this.balance = balance;
//   this.addMoney = function (money) {    // способ ввода денег
//       this.balance += money;
//       console.log(`You have added ${money} to your account`);
//   }
//   this.withdrawalMoney = function (money) {    // способ вывода денег
//       if (this.balance - money < 0) {
//           console.log("There is not enough money in your account");
//           // alert("There is not enough money in your account");
//       } else {
//           this.balance -= money;
//           console.log(`You have withdrawn ${money} from your account`);
//       }
//   }
//   this.printBalance = function () {                   // способ проверки баланса
//       console.log(`Your balance: ${this.balance}`);
//   }
// }

// let persons = [person1 = new bankAccount(123,"Ivan",50), 
//                 person2 = new bankAccount(345,"Kolya",150),
//                 person3 = new bankAccount(34,"Vasya",10),
//                 person4 = new bankAccount(36,"Petya",15)];


// console.log(persons);

// persons[0].printBalance();

// persons[0].addMoney(110);
// persons[0].printBalance();

// persons[0].withdrawalMoney(10);
// persons[0].printBalance();

// persons[0].withdrawalMoney(1000);

let res = Object.keys(bankAccount);
console.log(res);
const [number,userName,balance]= Object.values(bankAccount);
console.log(number,userName,balance);
res = Object.entries(bankAccount);
console.log(res);

