//Accepts: collection - array, filterParams - object
function filterCollection(collection, filterParams) {
            var isItemAcceptable,
                i,
                j,
                k,
                result = [];

            if (Object.keys(filterParams).length) {
                for (k = 0; k < Object.keys(filterParams).length; k++) {
                    if (filterParams[Object.keys(filterParams)[k]] == null) {
                        delete filterParams[Object.keys(filterParams)[k]]
                    }
                }

                for (i = 0; i < collection.length; i++) {
                    isItemAcceptable = true;

                    for (j = 0; j < Object.keys(filterParams).length; j++) {

                        if (collection[i][Object.keys(filterParams)[j]] != filterParams[Object.keys(filterParams)[j]]) {
                            isItemAcceptable = false;
                            break;
                        }
                    }

                    if (isItemAcceptable) {
                        result.push(collection[i]);
                    }
                }

                return result
            } else {
                return collection
            }
        }