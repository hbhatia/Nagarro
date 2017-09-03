/* This File we are using as our database That's why we are calling it seed ,Here we are having three todos that will be shown to user
all ToDos will be added further in this todos object
 */

var StatusENUMS ={
     ACTIVE:'ACTIVE',
     COMPLETE:'COMPLETE',
     DELETED:'DELETED'
};

var todos={

    1 :{title :'Learn Javascript' ,status:StatusENUMS.ACTIVE},
    2 :{title :'GIT',status:StatusENUMS.ACTIVE},
    3 :{title :'Git tutorial' ,status:StatusENUMS.ACTIVE}
};
// showing No of Todos that will be added will have the no. four
var next_todo_id=4;
/*
Exporing all three thing to index.js File so That we can add ,delete and modify our Todos object
 */
module.exports={
    StatusENUMS:StatusENUMS,
    todos:todos,
    next_todo_id:next_todo_id
}