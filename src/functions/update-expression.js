const getPaths = require('./paths')

module.exports = (obj, isRemovable) => {

    const paths = getPaths(obj)
    let setExpression = 'SET '
    let removeExpression = 'REMOVE '

    const params = {
        UpdateExpression: '',
        ExpressionAttributeNames: {},
        ExpressionAttributeValues: {}
    }

    paths.forEach(path => {

        const value = path.pop()
        const nameString = '#' + path.join('.#')

        path.forEach(key => params.ExpressionAttributeNames['#' + key] = key)

        if (isRemovable(value)) {
            removeExpression += nameString + ', '
        } else {
            const valueString = ':' + path.join('')
            setExpression += nameString + ' = ' + valueString + ', '
            params.ExpressionAttributeValues[valueString] = value
        }

    })

    removeExpression = removeExpression.slice(0, -2)
    setExpression = setExpression.slice(0, -2)
    params.UpdateExpression = setExpression + ' ' + removeExpression

    console.log(JSON.stringify(params, null, 2))
    return params

}
