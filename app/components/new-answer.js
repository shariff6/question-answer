import Ember from 'ember';

export default Ember.Component.extend({
  addNewReview: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },
    saveAnswer() {
     var params = {
       name: this.get('name'),
       answer: this.get('answer'),
       question: this.get('question'),
     };
     this.set('addNewAnswer', false);
     this.sendAction('saveAnswer', params);
   }
  }
});
