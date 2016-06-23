import Ember from 'ember';
export default Ember.Route.extend({
	beforeModel(){
		this.transitionTo('admin-dashboard.user-mgt');
	},
	model(){
		return Ember.Object.create({
			uname: 'jsmith',
			fname : 'John',
			lname : 'Smith',
			email : 'test@user.com',
			address:  '1 Elizabeth Street,Melbourne,Vic 3000',
			reports: true,
			step: false,
			billing: false,
			enableDisable: true,
			hideUnhide: false,
			adminMessages : [
			{
				id : 1,
				user : 'jsmith',
				type : 'danger',
				publishDate : moment('16-Jun-2016','DD-MMM-YYYY').format('DD-MM-YYYY hh:mm A'),
				expiryDate : moment('24-Jun-2016','DD-MMM-YYYY').format('DD-MM-YYYY hh:mm A'),
				message : 'Account activation has failed.'
			},
			{
				id : 2,
				user : 'All Users',
				type : 'info',
				publishDate : moment('18-Jun-2016','DD-MMM-YYYY').format('DD-MM-YYYY hh:mm A'),
				expiryDate : moment('21-Jun-2016','DD-MMM-YYYY').format('DD-MM-YYYY hh:mm A'),
				message : 'System will go under maintainence on 23rd June 2016'
			},
			{
				id : 1,
				user : 'jsmith',
				type : 'success',
				publishDate : moment('16-Jun-2016','DD-MMM-YYYY').format('DD-MM-YYYY hh:mm A'),
				expiryDate : moment('24-Jun-2016','DD-MMM-YYYY').format('DD-MM-YYYY hh:mm A'),
				message : 'Account activation has failed.'
			},
			{
				id : 2,
				user : 'All Users',
				type : 'info',
				publishDate : moment('18-Jun-2016','DD-MMM-YYYY').format('DD-MM-YYYY hh:mm A'),
				expiryDate : moment('21-Jun-2016','DD-MMM-YYYY').format('DD-MM-YYYY hh:mm A'),
				message : 'System will go under maintainence on 23rd June 2016'
			}
			],
			usage : [
			{
				id : 1,
				dt : '11th June 2016',
				time : '08:00',
				sessionTime : 50,
				pageVisits : 23,
				failedRequest : 3,
				successRequest : 20,
				reportCreated : 3,
			},
			{
				id : 2,
				dt : '11th June 2016',
				time : '08:00',
				sessionTime : 50,
				pageVisits : 23,
				failedRequest : 3,
				successRequest : 20,
				reportCreated : 3,
			},
			{
				id : 3,
				dt : '11th June 2016',
				time : '08:00',
				sessionTime : 50,
				pageVisits : 23,
				failedRequest : 3,
				successRequest : 20,
				reportCreated : 3,
			},
			{
				id : 4,
				dt : '11th June 2016',
				time : '08:00',
				sessionTime : 50,
				pageVisits : 23,
				failedRequest : 3,
				successRequest : 20,
				reportCreated : 3,
			},
			{
				id : 5,
				dt : '11th June 2016',
				time : '08:00',
				sessionTime : 50,
				pageVisits : 23,
				failedRequest : 3,
				successRequest : 20,
				reportCreated : 3,
			}
			],
			accounts : [
			{
				accName : 'Account 1',
				id : '3',
				visible : false,
				details : {
					address : '1 Queen street Melbourne '
				},
				access : false,
				subAcc : [
				{
					accName : 'SubAccount1',
					access : false,
					visible : false
				},
				{
					accName : 'SubAccount2',
					access : false,
					visible : false
				},
				]
			},
			{
				accName : 'Account 2',
				id : '1',
				visible : true,
				details : {
					address : '1 Queen street Melbourne '
				},
				access : false,
				subAcc : [
				{
					accName : 'SubAccount2_1',
					access : false,
					visible :false,
				},
				{
					accName : 'SubAccount2_2',
					access : true,
					visible :false
				},
				{
					accName : 'SubAccount2_3',
					access : false,
					visible :false
				},
				{
					accName : 'SubAccount2_4',
					access : true,
					visible :false
				},
				{
					accName : 'SubAccount2_5',
					access : true,
					visible :false
				},
				]
			},
			{
				accName : 'Account 3',
				id : '2',
				visible : true,
				details : {
					address : '1 Queen street Melbourne '
				},
				access : false,
				subAcc : [
				{
					accName : 'SubAccount3_1',
					access : false,
					visible : false
				},
				{
					accName : 'SubAccount3_2',
					access : false,
					visible : false
				},
				]
			},
			{
				accName : 'Account 4',
				id : '4',
				visible : true,
				details : {
					address : '1 Queen street Melbourne '
				},
				access : false,
				subAcc : [
				{
					accName : 'SubAccount4_1',
					access : false,
					visible : false,
					subAcc :[
					{
						accName : 'SubAccount4.1.1',
						access : false,
						visible : false
					},
					{
						accName : 'SubAccount4.1.2',
						access : false,
						visible : false
					}
					]
				},
				{
					accName : 'SubAccount4.2',
					access : false,
					visible : false
				}
				]
			},
			{
				accName : 'Account 5',
				id : '5',
				visible : false,
				details : {
					address : '1 Queen street Melbourne '
				},
				access : false,
				subAcc : [
				{
					accName : 'SubAccount5_1',
					access : true,
					visible : true,
					subAcc:[
					{
						accName : 'SubAccount5_1_2',
						access : true,
						visible :false
					},
					{
						accName : 'SubAccount5_1_3',
						access : true,
						visible :false
					},
					{
						accName : 'SubAccount5_1_4',
						access : true,
						visible :false
					},
					{
						accName : 'SubAccount5_1_5',
						access : true,
						visible :false
					}
					]
				},
				{
					accName : 'SubAccount5_2',
					access : true,
					visible :false
				},
				{
					accName : 'SubAccount5_3',
					access : true,
					visible :false,
					subAcc : [
					{
						accName : 'SubAccount5_3_2',
						access : true,
						visible :false
					},
					{
						accName : 'SubAccount5_3_3',
						access : true,
						visible :false
					},
					{
						accName : 'SubAccount5_3_4',
						access : true,
						visible :false
					},
					{
						accName : 'SubAccount5_3_5',
						access : true,
						visible :true
					}
					]
				},
				{
					accName : 'SubAccount5_4',
					access : true,
					visible :false
				},
				{
					accName : 'SubAccount5_5',
					access : true,
					visible :false
				},
				]
			}
			],
			reports: [
			{
				id : 1,
				name : "Report 1",
				dw : 50,
				created : '11th June 2016',
				released : '16th June 2016',
				pages : 3,
				location : '/reports/report 1'
			},
			{
				id : 2,
				name : "Report 2",
				dw : 50,
				created : '11th June 2016',
				released : '16th June 2016',
				pages : 3,
				location : '/reports/report 2'
			},
			{
				id : 3,
				name : "Report 3",
				dw : 50,
				created : '11th June 2016',
				released : '16th June 2016',
				pages : 3,
				location : '/reports/report 3'
			},
			{
				id : 4,
				name : "Report 4",
				dw : 50,
				created : '11th June 2016',
				released : '16th June 2016',
				pages : 3,
				location : '/reports/report 4'
			},
			{
				id : 5,
				name : "Report 5",
				dw : 50,
				created : '11th June 2016',
				released : '16th June 2016',
				pages : 3,
				location : '/reports/report 5'
			},
			{
				id : 6,
				name : "Report 6",
				dw : 50,
				created : '11th June 2016',
				released : '16th June 2016',
				pages : 3,
				location : '/reports/report 6'
			},
			{
				id : 7,
				name : "Report 7",
				dw : 50,
				created : '11th June 2016',
				released : '16th June 2016',
				pages : 3,
				location : '/reports/report 7'
			},
			{
				id : 8,
				name : "Report 8",
				dw : 50,
				created : '11th June 2016',
				released : '16th June 2016',
				pages : 3,
				location : '/reports/report 8'
			},
			{
				id : 9,
				name : "Report 9",
				dw : 50,
				created : '11th June 2016',
				released : '16th June 2016',
				pages : 3,
				location : '/reports/report 9'
			},
			{
				id : 10,
				name : "Report 10",
				dw : 50,
				created : '11th June 2016',
				released : '16th June 2016',
				pages : 3,
				location : '/reports/report 10'
			},
			{
				id : 11,
				name : "Report 11",
				dw : 50,
				created : '11th June 2016',
				released : '16th June 2016',
				pages : 3,
				location : '/reports/report 11'
			},
			{
				id : 12,
				name : "Report 12",
				dw : 50,
				created : '11th June 2016',
				released : '16th June 2016',
				pages : 3,
				location : '/reports/report 12'
			},
			{
				id : 13,
				name : "Report 13",
				dw : 50,
				created : '11th June 2016',
				released : '16th June 2016',
				pages : 3,
				location : '/reports/report 13'
			},
			{
				id : 14,
				name : "Report 14",
				dw : 50,
				created : '11th June 2016',
				released : '16th June 2016',
				pages : 3,
				location : '/reports/report 14'
			},
			{
				id : 15,
				name : "Report 15",
				dw : 50,
				created : '11th June 2016',
				released : '16th June 2016',
				pages : 3,
				location : '/reports/report 15'
			}
			]
		});
},
setupController(controller,model){	
	controller.set('original',JSON.parse(JSON.stringify(model)));		
	}
});
