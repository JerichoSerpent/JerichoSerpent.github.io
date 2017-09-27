$(document).ready(function() {

    $('.btn#userNameSubmit').on('click',
        function() {
            var gitUserName = $('#githubUserName').val();
            var url = 'https://api.github.com/users/';
            var urlUserName = 'https://api.github.com/users/' + gitUserName;
            var gitRepo = 'https://api.github.com/users/' + gitUserName + '/repos';
            console.log(gitUserName + " hello");

            getUserName(urlUserName);

        });

     function getUserName(url) {
        $.ajax({
            url: url,
            dataType: "jsonp",
            success: function(returnData, status) {
                console.log(returnData);
            }
        });
    }


});