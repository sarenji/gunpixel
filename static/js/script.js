$(function() {
    socket = new io.Socket();
    socket.connect();
    
    $('#sender').live('click', function() {
        socket.send("Message Sent on " + new Date());
    });
    
    socket.on('message', function(data){
        $('#reciever').append('<li>' + data + '</li>');  
    });
});
