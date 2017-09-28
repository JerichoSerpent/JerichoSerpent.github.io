$(document).ready(function() {
var pageLayout = $('#data_output');
    $('.btn#userNameSubmit').on('click',
        function() {
            var gitUserName = $('#githubUserName').val(),
            	url = 'https://api.github.com/users/';
             	urlUserName = 'https://api.github.com/users/' + gitUserName,
            	gitRepo = 'https://api.github.com/users/' + gitUserName + '/repos';

            getUserName(urlUserName);

        });

    function appendToPage(response){
    	var handle = response.data.login;
    	var followerCount = response.data.followers;
    	var followers = response.data.followers;
    	if(response.data.message === "Not Found"){
    		pageLayout.html("<h1>No User Info !!!!</h1>")
    	} else {
    		pageLayout.html("<h1>Handle: " + handle + "<br>"+ " User Count: " +followerCount + "</h1>"+"<br><h6>" + followers +"<h6>")
    	}
    }

     function getUserName(url) {
        $.ajax({
            url: url,
            dataType: "jsonp",
            success: function(returnData, status) {
            	console.log(returnData);
            	appendToPage(returnData);
            }
        });
    }


});