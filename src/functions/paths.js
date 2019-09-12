module.exports = (obj) => {

    let keys = []
    const results = []

    const loop = (item) => {

        Object.keys(item).forEach(key => {

            const value = item[key]

            if (typeof value === 'object'
                && value !== null
                && !Array.isArray(value)
                && Object.keys(value).length !== 0) {

                keys.push(key)
                loop(value)

            } else {
                results.push([...keys, key, value])
            }
            
        });

        keys.pop()

    }

    loop(obj)

    return results

}

