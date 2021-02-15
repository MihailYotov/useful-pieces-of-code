//Accepts: collection - input arr of objects, searchedObj - object
        //Info: Search if collection`s item contains searchedObj`s first element.
        //      If collection`s item is null, the function searches the searchedObj`s next element.
        function searchInCollection(collection, searchedObj) {
            var i,
                j,
                result = [];

            for (i = 0; i < collection.length; i++) {
                if (Object.keys(searchedObj).length) {
                    for (j = 0; j < Object.keys(searchedObj).length; j++) {
                        if (collection[i][Object.keys(searchedObj)[j]]) {
                            if (collection[i][Object.keys(searchedObj)[j]].toLowerCase().indexOf(searchedObj[Object.keys(searchedObj)[j]].toLowerCase()) > -1) {
                                result.push(collection[i]);
                            }

                            break;
                        }
                    }
                } else {
                    result.push(collection[i]);
                }
            }

            return result;
        }