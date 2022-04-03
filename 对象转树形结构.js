let source = [{
    id: 1,
    pid: 0,
    name: 'body'
  }, {
    id: 2,
    pid: 1,
    name: 'title'
  }, {
    id: 3,
    pid: 2,
    name: 'div'
  }]

const jsonToTree = (params) => {
    let result = [];
    if(!Array.isArray(params)) {
        throw new Error('params is not a Array')
    }
    let map = {};
    params.forEach((value) => {
        map[value.id] = value;
    });
    params.forEach((item) => {
        let parent = map[item.pid];
        if(parent) {
            (parent.)
        }else {
            result.push(item)
        }
    })
}

console.log(jsonToTree('fff'));