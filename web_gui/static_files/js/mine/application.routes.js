var Application = window.Application || {};
Application.Routing = {
		Configure : function(){
			Application.Routing.Sammy = $.sammy("#main", function(){
				this.get("#main", function(context){
					context.log("MAIN");
					
				});
				this.get("#/test_details/:ID", function(context){
					var url = "/test_details/" + this.params['ID'];
					Application.Tab.addTab("TEST ID : " + this.params['ID'] , url );
					context.log("NEW");
				});
				this.get("#/schedule_new_test", function(context){
					context.log("#/schedule_new_test");
					var url = "/schedule_new_test"
					Application.Tab.addTab("Scheduling New Test" , url );
				});
				this.get("#/search_test", function(context){
					context.log("#/search_test");
					var url = "/search_test"
					Application.Tab.addTab("Test Search" , url );
				});
				this.get("#/report/test_status", function(context){
					context.log("#/report/all_test");
					var url = "/report/test_status"
					Application.Tab.addTab("Report - All Tests" , url );
				});
				this.get("#/help", function(context){
					context.log("#/help");
					var url = "/help"
					Application.Tab.addTab("Help Page" , url, true);
				});

			});
		},
		run : function(){
			Application.Routing.Sammy.run("#main");
		}
}