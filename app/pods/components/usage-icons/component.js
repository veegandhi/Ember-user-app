import Ember from 'ember';
export default Ember.Component.extend({
	classNames : ['panel','usage-panels'],
	classNameBindings : [
		'panel-user-created:panel-user-created',
		'panel-last-login:panel-last-login',
		'panel-assigned-group:panel-assigned-group',
		'panel-accounts:panel-accounts',
		'panel-report-stats:panel-report-stats',
		'panel-user-stats:panel-user-stats'
	],
	isShowingReportModal : false,
	isShowingUserStatsModal : false,
	actions:{
		toggleReportModal(){
			this.toggleProperty('isShowingReportModal');
		},
		toggleUserStatsModal(){
			this.toggleProperty('isShowingUserStatsModal');
		}
	}
});
