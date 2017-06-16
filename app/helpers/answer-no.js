import Ember from 'ember';

export function answerNo(params) {
  var question = params[0];
  var x = question.get('answers').get('length')
   if(x > 0){
     return '[' + x + 'answers]'
   }else if (x === 0) {
     return Ember.String.htmlSafe('<span class="glyphicon glyphicon-remove-circle"></span>' + "Be the first to answer");
   }
}

export default Ember.Helper.helper(answerNo);
