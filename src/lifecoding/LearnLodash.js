// import _ from "lodash"
const _ = import('lodash')

const array = [4, 2, 3, 4, 5]




const result = array.map(elem => elem * elem)

const resultLodash = _.map(array, elem => elem * elem)

console.log(result)