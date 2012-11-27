function cross(v1, v2) {
    return { x: v1.y*v2.z - v2.y*v1.z,
             y: v1.z*v2.x - v2.z*v1.x,
             z: v1.x*v2.y - v2.x*v1.y };
  }

  function normalize(v) {
    l = Math.sqrt(v.x*v.x + v.y*v.y + v.z*v.z);
    return { x: v.x/l, y: v.y/l, z: v.z/l };
  }

  function add(v1, v2) {
    return { x: v1.x + v2.x, y: v1.y + v2.y, z: v1.z + v2.z };
  }

  function subtract(v1, v2) {
    return { x: v1.x - v2.x, y: v1.y - v2.y, z: v1.z - v2.z };
  }

  function multiply(v, l) {
    return { x: v.x*l, y: v.y*l, z: v.z*l };
  }

  function pushVec(v, arr) {
    arr.push(v.x, v.y, v.z);
  }
  function length(v){
    return Math.sqrt(v.x*v.x + v.y*v.y + v.z*v.z);
  
  }
  function multiply(v, l) {
    return { x: v.x*l, y: v.y*l, z: v.z*l };
  }