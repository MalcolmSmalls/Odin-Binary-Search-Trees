class Node{
    constructor(data, left = null, right = null){
        this.data = data
        this.left = left
        this.right = right
    }
}

class Tree{
    constructor(arr){
        this.root = this.buildTree(arr)
    }

    buildTree(arr){
        const mid = Math.floor(arr.length / 2)-1
        return arr[mid]
    }

    sort(left, right){
        let newArr = []
        while(left.length > 0 && right.length > 0){
            if(left[0] < right[0]){
                newArr.push(left.shift())
            }else{
                newArr.push(right.shift())
            }
        }

        return [...newArr, ...left, ...right]
    }

    mergeSort(arr){
        let mid = Math.floor(arr.length / 2)
        let left = arr.slice(0, mid)
        let right = arr.slice(mid)
        if(arr.length === 1){
            return arr
        }

        return this.sort (
            this.mergeSort(left),
            this.mergeSort(right) 
        )
    }

}



const bst = new Tree ([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324])

console.log(bst.mergeSort([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]))