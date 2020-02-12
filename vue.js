new Vue({
        el: '#app',
        data:{
            userInput:0,
            min:0,max:20,
            count:0,
        message: 'WELCOME TO THE GAME',
        da:'Guess a number from 1-20 ',
        a:(Math.floor(Math.random() * (20 - 0 + 1)) + 0),
        result:"",
        items: [
          { message: 'The computer is going to randomly select an integer from 1 to 20.'},
    {message:'You will keep guessing numbers until you find the computers number, and the computer will tell you each time if your guess was too high or too low'},
    {message:'Total score will be no of times you have tried' }
          
        ]
      },
      
      methods:{
      guess(event) {
        if (this.userInput == this.a) {
            // this.userInput = this.a;
            this.result= 'You got it right!';
        }
         else if( this.userInput <this.a) {
            // this.userInput = this.a;
            this.result= 'YOUR NUMBER IS low';
        } 
        else {
            this.result= 'YOUR NUMBER IS high';
        }
    }
        }
  });
    
