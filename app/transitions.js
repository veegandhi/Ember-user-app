export default function(){
	this.transition(
		this.toRoute(['dashboard','dashboard.payment','dashboard.personal','dashboard.manage-users','admin-dashboard.user-mgt','admin-dashboard.user-history','admin-dashboard.admin-msg','admin-dashboard.user-mgt.features']),
		this.use('fade'),
		this.debug()
		);	
	this.transition(
		this.fromRoute('admin-dashboard.user-mgt.permissions'),
		this.toRoute(['admin-dashboard.user-mgt.features']),
		this.use('toRight')
		);
	this.transition(
		this.fromRoute(['admin-dashboard.user-mgt.features']),
		this.toRoute('admin-dashboard.user-mgt.permissions'),
		this.toRoute('admin-dashboard.user-mgt.usage'),
		this.use('toLeft')
		);
	this.transition(
		this.fromRoute('admin-dashboard.user-mgt.permissions'),
		this.toRoute(['admin-dashboard.user-mgt.usage']),
		this.use('toLeft')
		);
	this.transition(
		this.fromRoute(['admin-dashboard.user-mgt.usage']),
		this.toRoute('admin-dashboard.user-mgt.permissions'),
		this.toRoute('admin-dashboard.user-mgt.features'),
		this.use('toRight')
		);
	this.transition(
		this.hasClass('payment-mode-credit'),
		this.toValue(true),
		this.use('toRight',{duration : 450 *2 }),
		this.reverse('toLeft',{duration : 450 *2 })
		);
	this.transition(
		this.hasClass('payment-mode-debit'),
		this.toValue(true),
		this.use('toLeft',{duration : 450 *2 }),
		this.reverse('toRight',{duration : 450 *2 })
		);
	this.transition(
		this.hasClass('profile-animation'),
		this.toValue(true),
		this.use('toUp',{duration : 450 *2 }),
		this.reverse('toUp',{duration : 450 *2 })
		);
	this.transition(
		this.hasClass('error-animation'),
		this.toValue(true),
		this.use('scale',{duration : 450 *2 }),
		this.reverse('scale',{duration : 450 *2 })
		);
	this.transition(
		this.hasClass('success-animation'),
		this.toValue(true),
		this.use('scale',{duration : 450 *2 }),
		this.reverse('scale',{duration : 450 *2 })
		);
	
};