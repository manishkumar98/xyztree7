import data from "./data";
function reducers(state = data, action) {
  if (action.type === "INCREMENT") {
    //console.log("xyz", state);
    //console.log("xyz1", action);
    //console.log("xyz2", counter);
    //action.id.counter=action.id.counter+1
    // while()
    // state.counter = state.counter + 1;
    //Array.isArray(state.children)? state.children.map((elem) =>elem.id === action.id.id? action.counter = action.counter + 1));

    /*const flatten=(acc,data)=>{
      if(Array.isArray(data)){
        return data.reduce(flatten,acc);
      }
      return [...acc,data];
    }
    let data1=data.reduce(flatten,[]);
    console.log(data1);*/
    let stack = [];
    //let state1 = { ...state };
    let state1 = { ...state };
    //console.log(state === state1);
    stack.push(state1);
    //console.log("de", state1);
    //console.log("stack", stack.length);
    while (stack.length > 0) {
      var nodex = stack.pop();
      //console.log("stack1", nodex);
      if (nodex.id === action.id.id) {
        nodex.counter += 1;
        //console.log("defg", nodex.parentId);
        break;
      }

      if (nodex.children) {
        var len = nodex.children.length;
        //console.log("stack2", len);
        for (var i = 0; i < len; i++) {
          //console.log("stack3", nodex.children[i].id);
          //console.log("stacxx", action.id.id);
          stack.push(nodex.children[i]);
          /* if (nodex.children[i].id === action.id.id) {
            nodex.children[i].counter = +1;
            console.log("asd", nodex.children[i].counter);
            // return;
            break;
          } else */ if (
            nodex.children[i].children &&
            nodex.children[i].children.length > 0
          ) {
            stack.push(nodex.children[i]);
          }
        }
      }
    }
    //console.log("des", state1);
    //console.log("x", state1 === state);

    //console.log("ddd", data);
    //console.log("xyz2", state.counter);
    //console.log("abc", action.id);
    //console.log("abc11", action.id.id);
    //console.log("vbg", action.counter);
    //console.log("ss", state);
    //console.log("deed", state.children);
    //console.log("hghg",action.children)
    // if(Array.isArray(state.children))
    /*return {
      ...state,
      children: state.children.reduce((elem) =>
        elem.id === action.id.id ? { ...elem, counter: elem.counter + 1 } : elem
      )
    };*/
    /* return {
      ...state,
      children: state.children.map((elem) =>
        elem.id === action.id.id ? { ...elem, counter: elem.counter + 1 } : elem
      )
    }*/
    console.log("woe", state1);
    return state1;
  } else if (action.type === "ADD_CHILD") {
    //console.log("xyz", state);
    //console.log("xyz1", action);
    //console.log("xyz", state);
    //console.log("xyz1", action);
    //console.log("xyz2", counter);
    //action.id.counter=action.id.counter+1
    // while()
    // state.counter = state.counter + 1;
    //Array.isArray(state.children)? state.children.map((elem) =>elem.id === action.id.id? action.counter = action.counter + 1));

    /*const flatten=(acc,data)=>{
      if(Array.isArray(data)){
        return data.reduce(flatten,acc);
      }
      return [...acc,data];
    }
    let data1=data.reduce(flatten,[]);
    console.log(data1);*/
    let stack = [];
    //let state1 = { ...state };
    let state1 = { ...state };
    //console.log(state === state1);
    stack.push(state1);
    //console.log("de", state1);
    //console.log("stack", stack.length);
    while (stack.length > 0) {
      nodex = stack.pop();
      //console.log("stack1", nodex);
      if (nodex && nodex.id === action.id.id) {
        // if (!nodex.children) nodex.children.push({});
        console.log("12x", nodex);
        nodex.children &&
          nodex.children.splice(nodex.children.length, 0, {
            id: "2" + Math.abs(Math.random() * 100),
            parentId: action.id.id,
            name: "Counter",
            counter: 0,
            children: []
          });
        break;
      }

      if (nodex.children) {
        len = nodex.children.length;
        //console.log("stack2", len);
        for (i = 0; i < len; i++) {
          //console.log("stack3", nodex.children[i].id);
          //console.log("stacxx", action.id.id);
          stack.push(nodex.children[i]);
          /* if (nodex.children[i].id === action.id.id) {
            nodex.children[i].counter = +1;
            console.log("asd", nodex.children[i].counter);
            // return;
            break;
          } else */ if (
            nodex.children[i].children &&
            nodex.children[i].children.length > 0
          ) {
            stack.push(nodex.children[i]);
          }
        }
      }
    }
    //console.log("des", state1);
    //console.log("x", state1 === state);

    //console.log("ddd", data);
    //console.log("xyz2", state.counter);
    //console.log("abc", action.id);
    //console.log("abc11", action.id.id);
    //console.log("vbg", action.counter);
    //console.log("ss", state);
    //console.log("deed", state.children);
    //console.log("hghg",action.children)
    // if(Array.isArray(state.children))
    /*return {
      ...state,
      children: state.children.reduce((elem) =>
        elem.id === action.id.id ? { ...elem, counter: elem.counter + 1 } : elem
      )
    };*/
    /* return {
      ...state,
      children: state.children.map((elem) =>
        elem.id === action.id.id ? { ...elem, counter: elem.counter + 1 } : elem
      )
    }*/
    //console.log("woe", state1);
    return state1;
  } else if (action.type === "REMOVE_CHILD") {
    let stack2 = [];
    let state2 = { ...state };
    stack2.push(state2);
    while (stack2.length > 0) {
      var parent = stack2.pop();
      var len2 = 0;
      var newChildren = [];

      if (parent.children && parent.id === action.id.parentId) {
        len2 = parent.children.length;
        var f = 0;
        var x = 0;
        if (len2 === 1) {
          f = 1;
          newChildren.pop();
        } else {
          for (x = 0; x < len2; x++) {
            if (parent.children[x].id !== action.id.id) {
              f = 1;
              newChildren &&
                newChildren.splice(newChildren.length, 0, parent.children[x]);
            }
          }
        }

        if (f === 1) {
          parent.children = newChildren;
          break;
        }
      } else if (parent.children) {
        var len3 = parent.children.length;
        //console.log("stack2", len);
        for (var q = 0; q < len3; q++) {
          //console.log("stack3", nodex.children[i].id);
          //console.log("stacxx", action.id.id);

          /* if (nodex.children[i].id === action.id.id) {
              nodex.children[i].counter = +1;
              console.log("asd", nodex.children[i].counter);
              // return;
              break;
            } else */ if (
            parent.children[q].children &&
            parent.children[q].children.length > 0
          ) {
            stack2.push(parent.children[q]);
          }
        }
      }
    }
    return state2;
  }

  //console.log("des", state1);
  //console.log("x", state1 === state);

  //console.log("ddd", data);
  //console.log("xyz2", state.counter);
  //console.log("abc", action.id);
  //console.log("abc11", action.id.id);
  ////console.log("vbg", action.counter);
  //console.log("ss", state);
  //console.log("deed", state.children);
  //console.log("hghg",action.children)
  // if(Array.isArray(state.children))
  /*return {
      ...state,
      children: state.children.reduce((elem) =>
        elem.id === action.id.id ? { ...elem, counter: elem.counter + 1 } : elem
      )
    };*/
  /* return {
      ...state,
      children: state.children.map((elem) =>
        elem.id === action.id.id ? { ...elem, counter: elem.counter + 1 } : elem
      )
    }*/
  //console.log("woe", state1);
  else return state;
}

export default reducers;
/*{id: "0", name: "Counter", counter: 0, children: Array(3)}
id: "0"
name: "Counter"
counter: 0
children: Array(3)*/
//state.id
/*(parameter) state: {
    id: string;
    name: string;
    counter: number;
    children: {
        id: string;
        name: string;
        counter: number;
        children: {
            id: string;
            name: string;
            counter: number;
        }[];
    }[];
}
/src/reducers.js: Unexpected token (7:10)

   5 |     console.log("xyz1", action);
   6 |     //action.id.counter=action.id.counter+1
>  7 |     while()
     |           ^
   8 |     state.counter = state.counter + 1;
   9 |
  10 |     console.log("xyz2", state.counter);*/
/* return {
      ...state,
      children: state.children.map((elem) =>
        elem.id === action.id.id ? { ...elem, counter: elem.counter + 1 } : elem
      )
    };*/
/*forEach(function (o) {
  o.children = o.children.filter(
    (s) =>
      //console.log("xyz",s.id);
      s.id !== action.id.id
  );
})*/
