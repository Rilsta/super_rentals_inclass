import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(announcement) {
      if (confirm('Are you sure you want to say goodbye?')) {
        this.sendAction('destroyAnnouncement', announcement);
      }
    }
  }
});
