const cards = [
  {
    front: 'The "First Computer Programmer"',
    back: 'Ada Lovelace',
    flipped: false,
  },
  {
    front: 'Invented the World wide Web and HTML',
    back: 'Tim Berners-lee',
    flipped: false,

  },
  {
    front: 'Famous World War II Enigma code breaker',
    back: 'Alan Turing',
    flipped: false,
  },
  {
    front: 'Creator of the Java Programming language',
    back: 'James Gosling',
    flipped: false,
  },
  {
    front: 'Creator of the Python Programming language and BDFL',
    back: 'Guido Van Rosssum',
    flipped: false,
  }
]; 

new Vue({
  el: '#flashcard-app',
  data: {
    cards: cards,
    newFront: '',
    newBack: '', 
    error: false
  },
  methods: {
    toggleCard: function(card){
      card.flipped = !card.flipped;
    },
    addNew: function(){
      if(!this.newFront || !this.newBack){
        this.error = true;
      } else {
        this.cards.push({
          front: this.newFront,
          back: this.newBack,
          flipped: false
        });
        this.newFront = '';
        this.newBack = '';
        this.error = false;
      }
    }
  }
});