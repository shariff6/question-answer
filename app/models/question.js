import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  question: DS.attr(),
  additionalnotes: DS.attr(),
  answers: DS.hasMany('answer', { async: true })
});
