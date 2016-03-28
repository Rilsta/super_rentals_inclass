import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      announcements: this.store.findAll('announcement'),
      rentals: this.store.findAll('rental')
    });
  },
  actions: {
    save3(params) {
      var newRental = this.store.createRecord('rental', params);
      newRental.save();
      this.transitionTo('index');
    },
    destroyRental(rental) {
      rental.destroyRecord();
      this.transitionTo('index');
    },
    destroyAnnouncement(announcement){
      announcement.destroyRecord();
      this.transitionTo('index');
    }
  }
});
