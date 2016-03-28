import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnnouncement: false,
  actions: {
    announcementFormShow() {
      this.set('addNewAnnouncement', true);
    },

    keep1() {
      var params ={
        news: this.get('news'),
        image: this.get('image'),
      };
      this.set('addNewAnnouncement', false);
      this.sendAction('keep2', params);
    }
  }
});
