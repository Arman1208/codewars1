function validBraces(braces){
    let trace=[]
    for(let i=0;i<braces.length;i++){
      if(braces[i]==='('||braces[i]==='{'||braces[i]==='['){
        trace.push()
      }else{
      if(braces.length===0) return false
       let trace1=trace[trace.length-1]
       if(trace[i]===')'&&trace1[trace1.length-1]==='('||trace[i]==='}'&&trace1[trace1.length-1]==='{'||trace[i]===']'&&trace1[trace1.length-1]==='['){
           trace.pop()
       }else{
           break;
       }
      }  
    }
    return trace.length===0
  }