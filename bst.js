class Node {
  constructor(val) {
    this.value = val
    this.left = null
    this.right = null
  }
}

class Tree {
  constructor(arr) {
    this.root = this.buildTree(arr)
  }

  sort = (arr) => {
    arr.sort().filter(function(item, pos, arr) {
      return !pos || item !== arr[pos -1]
    })
    return arr
  } 

  buildTree = (arr) => {
    let sorted = this.sort(arr)

    function build(arr, start, end) {
      if (start > end) return null

      let mid = parseInt((start + end) / 2)
      let root = new Node(arr[mid])

      root.left = build(arr, start, mid - 1)
      root.right = build(arr, mid + 1, end)

      return root
    }
    return build(sorted, 0, sorted.length - 1)
  }

  insert = (val) => {

  }
}






