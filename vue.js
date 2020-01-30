new Vue({
        el: '#app',
        data:{
            userInput:'',
            min:'0',max:'20',
        message: 'WELCOME TO THE GAME',
        da:'Guess a number from 1-20 ',
        randomNumber: null,
        
        
        items: [
          { message: 'The computer is going to randomly select an integer from 1 to 20.'},
    {message:'You will keep guessing numbers until you find the computers number, and the computer will tell you each time if your guess was too high or too low'},
    {message:'Total score will be no of times you have tried' }
          
        ]
      },
      
      methods:{
      guess: function (event) {
        alert('hdf')
        },
        
            getRandomNumber: function(min, max) {
                return  Math.floor(Math.random() * (max - min + 1)) + min;
            }
        },
        computed: {
            reply: function() {
                if (this.userInput ==this.getRandomNumber(1, 20)) {
                    this.userInput = this.getRandomNumber(1, 20);
                    return 'You got it right!';
                } else 
                if( this.userInput >this.getRandomNumber(1, 20)) {
                    this.userInput > this.getRandomNumber(1, 20);
                    return 'YOUR NUMBER IS HIGH';
                } else {
                    this.userInput < this.getRandomNumber(1, 20);
                    return 'YOUR NUMBER IS LOW';
                }
            }
        }
    
    
  });
    