import _ from 'underscore';

  export const isInInterview = (comments) => {
    var tags = [];
    for(var i = 0; i < comments.length; i++){
      var comment = comments[i];
      if(comment.tags){
        tags = tags.concat(comment.tags);
      }
    }
    return ( _.indexOf(tags,"interview-step-1") >=0 || _.indexOf(tags,"interview-step-2") >= 0 || _.indexOf(tags,"interview-step-3") >= 0)
  }

  export const getStep = (comments) => {
    var tags = [];
    for(var i = 0; i < comments.length; i++){
      var comment = comments[i];
      if(comment.tags){
        tags = tags.concat(comment.tags);
      }
    }
    if(_.indexOf(tags,"interview-step-3") >= 0){ return 3;}
    if(_.indexOf(tags,"interview-step-2") >= 0){ return 2;}
    if(_.indexOf(tags,"interview-step-1") >= 0){ return 1;}
    return 0;
  }
