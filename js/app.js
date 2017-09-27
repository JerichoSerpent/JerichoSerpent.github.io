$(document).ready(function() {

    $('.btn#userNameSubmit').on('click',
        function() {
            var gitUserName = $('#githubUserName').val(),
            	url = 'https://api.github.com/users/';
             	urlUserName = 'https://api.github.com/users/' + gitUserName,
            	gitRepo = 'https://api.github.com/users/' + gitUserName + '/repos';

            getUserName(urlUserName);
        });

     function getUserName(url) {
        $.ajax({
            url: url,
            dataType: "jsonp",
            success: function(returnData, status) {

            }
        });
    }


});