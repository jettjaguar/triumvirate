$(function() {
  $('#buttonSignUp').click(function() {
                           
                           $.ajax({
                                  url: '/SignUp',
                                  data: $('form').serialize(),
                                  type: 'POST',
                                  success: function(response) {
                                  console.log(response);
                                  },
                                  error: function(error) {
                                  console.log(error);
                                  }
                                  });
                           });
  });
