/**职员工作简历管理**/
BudgetBillDetailGrid = Ext.extend(Ext.grid.GridPanel, {
	id: 'budgetBillDetail',
	frame: false,
	loadMask: {msg:'加载数据中,请等待......'},//显示等待数据加载（loading）图标
	autoScroll:true,
	columnLines: true,
    loadMask: true,
    border: false,
    height: 240,
    margins:'2 2 0 0 ',
    region: 'center',
    viewConfig : {
      // forceFit : true //让grid的列自动填满grid的整个宽度，不用一列一列的设定宽度。
    },
    initComponent: function() {
    	var BillDetail = Ext.data.Record.create([
            {name: 'id'},
         	//{name: 'budgetTargetCode',type: 'string'},
         	{name: 'budgetTargetName',type: 'string'}, 
         	{name: 'budgetMoney',type: 'int'},
         	{name: 'addMoney',type: 'int'},
         	{name: 'lastMoney',type: 'int'},
         	{name: 'grandTotalMoney',type: 'int'},
         	{name: 'remark',type: 'string'}
       ]);

        var billDetailStore = createStore(BillDetail, false, {}, "budget/monthExpenseDocumentDetail/getDetailsByDepartment.do");
	    billDetailStore.on({
			"beforeload": function(store){
				var baseParams = {pageSize:pageSize};
				if(!Ext.isEmpty(Ext.getCmp("searchFrom"))){
					baseParams = Ext.getCmp("searchFrom").getForm().getValues();
					//下拉树有bug
					var budgetDepartmentCode = Ext.getCmp("searchFrom").getForm().findField("budgetDepartmentCode").getValue();
					if(Ext.isEmpty(budgetDepartmentCode)) {
						baseParams.budgetDepartmentCode = "";
					}
					store.baseParams = baseParams;
					//console.log(store.baseParams);
				}
			}
	  });
	    
        
        this.store = billDetailStore;
	    this.view = new Ext.grid.GroupingView({
	        markDirty: false
	    });
	
	    this.columns = [
	    new Ext.grid.RowNumberer(),
	    {
	        header: '预算指标',
	        dataIndex: 'budgetTargetName',
	        width: 100,
	        sortable: true,
	        align: 'center'
	    },{
	    	xtype: 'numbercolumn',
	        header: '<center>预算金额</center>',
	        dataIndex: 'budgetMoney',
	        width: 120,
	        sortable: true,
	        format: '0.00',
	        align: 'right'
	    },{
	    	xtype: 'numbercolumn',
	        header: '<center>追加预算</center>',
	        dataIndex: 'addMoney',
	        width: 120,
	        sortable: true,
	        format: '0.00',
	        align: 'right'
	    },{
	    	xtype: 'numbercolumn',
	        header: '<center>剩余预算</center>',
	        dataIndex: 'lastMoney',
	        width: 120,
	        sortable: true,
	        format: '0.00',
	        align: 'right'
	    },{
	    	xtype: 'numbercolumn',
	        header: '<center>累计预算</center>',
	        dataIndex: 'grandTotalMoney',
	        width: 120,
	        format: '0.00',
	        sortable: true,
	        align: 'right'
	    },{
	        header: '备注',
	        dataIndex: 'remark',
	        align: 'center',
	        width: 200,
	        align: 'center'
	    }];
	    
	    BudgetBillDetailGrid.superclass.initComponent.call(this);
    }
});
