<%@ page contentType="text/html;charset=UTF-8" %>

<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<!-- Ext js file -->
		<link rel="stylesheet" type="text/css" href="extjs/resources/css/ext-all.css">
		<script type="text/javascript" src="extjs/ext-all-dev.js"></script>
		
		<!--  App files -->
		<link rel="stylesheet" type="text/css" href="resources/css/app.css">
		
		<script type="text/javascript" >
			var arquiteto = '<%=request.getUserPrincipal().getName() %>';
			var x63 = <%=request.isUserInRole("admin") %>;
		</script>
		
		<script type="text/javascript" src="app.js"></script>
		<script type="text/javascript" src="app/constants/messages.js"></script>
	</head>

	<body>
	</body>
		
</html>