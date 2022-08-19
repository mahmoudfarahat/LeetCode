/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
    let i = 0
    items.forEach(element => {
        switch (ruleKey) {
            case "color":
                if (element[1] == ruleValue) { i++  }
                break;
            case "type":
                if (element[0] == ruleValue) { i++ }
                break
            case "name":
                if (element[2] == ruleValue) { i++  }
                break
        }

    });


    return i
};


Input: items = [["phone", "blue", "pixel"], ["computer", "silver", "phone"], ["phone", "gold", "iphone"]], ruleKey = "type", ruleValue = "phone"


countMatches(items, ruleKey, ruleValue)