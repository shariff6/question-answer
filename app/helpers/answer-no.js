import Ember from 'ember';

export function answerNo(params) {
  var question = params[0];
  var x = question.get('answers').get('length')
   if(x > 0){
     return x
   }
}

export default Ember.Helper.helper(answerNo);
