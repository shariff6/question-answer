import Ember from 'ember';

export default Ember.Component.extend({
  heading: Ember.computed('question.name','question.date', function () {
    var y = this.get('question.date')
    if (y === null) {
      return "- by " + this.get('question.name')
    } else {

    return "- by " + this.get('question.name') + " on " + this.get('question.date')
}
  })
});
