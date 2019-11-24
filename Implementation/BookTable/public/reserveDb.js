var resQueue = firebase.database().ref('ResQueue');
var uploadbtn = document.getElementById('uploadbtn');

var countRef = firebase.database().ref('Count');
var queue = countRef.child('queueCount');





uploadbtn.addEventListener("click", function(e){

    e.preventDefault();
    alert("Click ok to confirm");


    

    queue.once("value").then(function(snapshot) {
        var q = snapshot.val();
        alert("queueCount "+ q);
        q = parseInt(q);
        q = q + 1;

        alert(q);


        //Get values
        var name = document.getElementById('name').value;
        var time = document.getElementById('time').value;
        var message = document.getElementById('msg').value;
        var size;
         
        // Assign None of no requirements are entered by the user
        if(message.length == 0){
            message = "None";
        }
        var phone = document.getElementById('phone').value;
        
        var ele = document.getElementsByName('size'); 
        
        for(i = 0; i < ele.length; i++) { 
            if(ele[i].checked){
                size = ele[i].value;
            } 
                
        } 
        
        var ref = resQueue.child(q);
        ref.set({
            Message:message,
            Name: name,
            Size:size,
            Time: time,
            Mobile: phone
         });

        countRef.update({"queueCount": q});

    });
})