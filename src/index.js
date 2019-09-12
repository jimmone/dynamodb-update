const createUpdateParams = require('./functions/update-expression')

const obj = {
    a: 1,
    b: {
        c: 'Hello',
        d: [
            {
                e: undefined
            }
        ],
        f: null
    },
    0: [],
    1: {}
}

const isRemovable = (value) => {

    const isEmpty = () => {
        if (typeof value === 'object') {
            return Object.keys(value).length === 0
        }
    }

    if (value === null ||
        value === undefined ||
        isEmpty()) {
        return true
    }

    return false

}

const params = createUpdateParams(obj, isRemovable)
