<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="../common_head.jsp" %>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="${basePath}/">
    <title>单表测试</title>
    <script type="text/javascript" >
		ctx="${basePath}";
	</script>
    <script type="text/javascript" src="${basePath}/js/singleTableTest/singleTableTestGrid.js"></script>
    <script type="text/javascript" src="${basePath}/js/singleTableTest/singleTableTestEditWindow.js"></script>
	<script type="text/javascript" src="${basePath}/js/singleTableTest/singleTableTestUi.js"></script>
	<script type="text/javascript" src="${basePath}/js/singleTableTest/singleTableTest.js"></script>
	<style type="text/css">
		.tbarContext{
			font-weight:bold
		}
	</style>
	
	<script type="text/javascript" >
		Ext.onReady(function(){
	    	Ext.QuickTips.init();
	    	new Ext.Viewport({
	    		layout:'fit',
	    		items:new singleTableTest()
	    	});
	    });
	</script>
  </head>
<body>
</body>
</html>
