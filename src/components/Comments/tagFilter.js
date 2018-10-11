import _ from 'underscore';

export default function(comments, tag){
  let filtered = [];
  if(tag){
    for(let i = 0; i < comments.length; i++){
      var comment = comments[i];
      if(comment.tags && _.contains(comment.tags, tag)){
        filtered.push(comment);
      }
    }
  }else{
    filtered = comments;
  }
  return filtered;
}
