searchFrom = Ext.extend(Ext.form.FormPanel,{
	id:'searchFrom',
	border:false,
	margins:'2 2 2 2 ',
	height:145,
	layout:'form',
	xtype: 'form',
	frame: false,
	initComponent: function() {
		 Ext.applyIf(this,{
			items:[{
				xtype:'fieldset',
				collapseFirst:false, 
				margins:'2 2 0 2 ',
				header : true,
				animCollapse:true, 
				border:false,
				collapsible : false, //可折叠
				layout:'column',
				items:[{
					layout:'form',
					columnWidth : 0.33,
					defaults : {xtype: 'textfield', anchor: anchor_w, allowBlank: true},
           			labelAlign : 'right',
					items:[
						createComboTree({
							id: 'categoryCombo',
							url: 'budget/projectSubject/queryTree.do',
							fieldLabel: '项目分类',
							hiddenName: 'categoryCode',
							name: 'categoryName'
						}),
					   {fieldLabel:'入账日期', name: 'startDate', maxValue: new Date(), xtype:'datefield',format:'Y-m-d'}
					]
				},{
					layout:'form',
					columnWidth : 0.33,
					defaults : {xtype : 'textfield', anchor : anchor_w},
           			labelAlign : 'right',
					items:[
						{fieldLabel:'项目名称', name: 'projectName'},
				        {fieldLabel:'至', name: 'endDate', maxValue: new Date(), xtype:'datefield',format:'Y-m-d'}
					]
				},{
					layout:'form',
					columnWidth : 0.34,
					defaults : {xtype : 'textfield', anchor : anchor_w},
           			labelAlign : 'right',
					items:[
						Ext.ux.form.ComboBox({
							 name: 'projectStatus',
							 fieldLabel: '立项状态',
				        	 fields: [{name: 'name'}, {name: 'name'}],
				        	 url: 'sys/dict/getDictByCode.do?code=1007'
				       })
					]
				}],
				buttonAlign:'center',
				buttons:[{
					text:'查询',
					handler: function(){
						if(!Ext.isEmpty(Ext.getCmp("mainGrid"))){
							Ext.getCmp("mainGrid").getStore().load({params: {start: 0, limit: pageSize}});
						}
						
					}
				},{ text:'重置',
					handler: function(){
						Ext.getCmp("searchFrom").getForm().reset();
					}
				}]
			}]
		 });
		 searchFrom.superclass.initComponent.call(this);
	}
});