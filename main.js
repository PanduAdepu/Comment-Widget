// Action for submit button
$("#cmtForm").submit(function(){
   var c = $(".count").text();
   $(".count").text(parseInt(c)+1);
    var name =$("#name").val();
     var comment =$("#comment").val();
    $("#commentsList").append(`<li id="comment-0" style="max-width:1000px; margin-bottom:20px;">
    <div>
      <img src="https://www.gstatic.com/s2/contacts/images/NoPicture.gif" class="profileimg" alt>
    </div>
    <div class="comment-header">
       <div class="reply-name">${name}</div>
    </div>
    <div style="margin:5px 0;" class="reply-cmt">${comment}</div>
    <div class="reply-section">	<span>0</span> <a href="#" role="button" class="like" id="Likes-0">
    <i class="fa fa-thumbs-up"></i> </a>
     <a href="#" role="button" class="reply"> Reply </a>
     <a href="#" role="button" class="edit">Edit</a>	
     <a href="#" role="button" class="delete"> Delete 
     </a>	
     </div>
 </li>`
    )
    $("#cmtForm")[0].reset();
    return false;
    })

   //  Action for Like button
    $(document).on("click",".like",function() {
        var i=$(this).prev('span').text();
        $(this).prev('span').text(parseInt(i)+1);
        $(this).addClass('button-clicked');
    });

   //  Action for Reply button
    $(document).on("click",".reply",function() {
        // console.log($(this).parent().html())
        var new_this = $(this).parent().parent();
       var name = $(new_this).find('.reply-name').text();
        var after = $(this).parent().parent();
        $(after).find('form').remove();
        $(after).append( `<form class="reply-form" ><ul id="childlist-0">
        <li id="input-0">
           <div class="comment-input-row">
            <div>
               <img src="https://www.gstatic.com/s2/contacts/images/NoPicture.gif" class="profileimg" alt>
            </div>
              <div>
                 <input type="text" placeholder="Name" id="name-0" class="name" required>
              </div>
           </div>
           <div>
              <textarea rows="2" id="content-0" class="comment comment-box" placeholder="Your reply...." required>@${name} </textarea>
              <div>
                 <button type="submit" id="addreply-0" class="btn btn-primary">Submit</button>
                 <button type="button" id="cancelreply-0" class="cancel-btn btn btn-secondary">Cancel</button>
              </div>
           </div>
        </li>
     </ul>
     </form>
     ` )
    //  .insertAfter(after);
    });
    
   //  Action for child reply button
    $(document).on("submit",".reply-form",function() {
        // console.log($(this).parent().html());
         var c = $(".count").text();
         $(".count").text(parseInt(c)+1);
       var name= $(this).find('.name').val();
       var comment= $(this).find('.comment').val();
        var after = $(this).parent();
        // alert("hjerwjr");
        $(after).append(`<ul id="childlist-0">
        <li id="comment-1" style="max-width:1000px;">
          <div>
             <img src="https://www.gstatic.com/s2/contacts/images/NoPicture.gif" class="profileimg" alt>
          </div>
           <div class="comment-header">
              <div class="reply-name">
                 ${name}
              </div>
           </div>
           <div class="reply-cmt">
              ${comment}
           </div>
           <div class="">
           <span>0</span>
               <a href="#" role="button" id="Likes-1" class="like">
               <i class="fa fa-thumbs-up"></i></a>
              <a href="#" role="button" class="reply">Reply</a>
              <a href="#" role="button" class="edit">Edit</a>
              <a href="#" role="button" class="delete">Delete</a>
           </div>
        </li>
     </ul>`)
     
    //  .insertAfter(after);
     $(this).parent().find('form').remove();

        });
    
        $(document).on("click",".delete",function() {
            $(this).parent().parent('li').remove();
            var c = $(".count").text();
            $(".count").text(parseInt(c)-1);
            
        });  
        
        //cancel
        $(document).on("click",".cancel-btn",function() {
           $(this).parents('form').remove();
         console.log("cancel");
         
        });
    
        $(document).on("click",".edit",function() {
            // console.log($(this).parent().parent().html());
            var new_this = $(this).parent().parent();
       var name = $(new_this).find('.reply-name').text();     
       var comment = $(new_this).find('.reply-cmt').text();  
    //    console.log($(this).parent().parent().parent());   
    //    $(this).parent().parent().parent().html(`<ul><li></li></ul>`)
           //
           var after =  $(this).parent().parent();
        //    console.log(after);
           $( `<form class="edit-reply-form" ><ul id="childlist-0">
           <li id="input-0">
              <div class="comment-input-row">
                 <div>
                    <input type="text" placeholder="Name" id="name-0" class="name" value="${name}" required>
                 </div>
              </div>
              <div>
                 <textarea rows="2" id="content-0" class="comment comment-box" placeholder="Your reply...." required>${comment}</textarea>
                 <div>
                    <button type="submit" id="addreply-0" class="btn btn-primary">Submit</button>
                    <button type="button" id="cancelreply-0" class="cancel-btn btn btn-secondary">Cancel</button>
                 </div>
              </div>
           </li>
        </ul>
        </form>
        ` ).insertAfter(after);
       
           //
    //  $(after).remove();
            
        });    

        $(document).on("submit",".edit-reply-form",function() {
var new_this = $(this).prev('li');
var name= $(this).find('.name').val();
var comment= $(this).find('.comment').val();
$(this).remove();
 $(new_this).find('.reply-name').text(name);
 $(new_this).find('.reply-cmt').text(comment);

        });