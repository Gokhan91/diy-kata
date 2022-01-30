const joinNames = namesObj => {
    //   let greetingMessage = "";
    //   for (var i = 0; i < namesObj.length - 1; i++) {
    //       if (i < namesObj.length - 2) {
    //           greetingMessage = greetingMessage + namesObj[i].name + ", ";
    //       } else {
    //           greetingMessage = greetingMessage + namesObj[i].name;
    //       }
    //   }
    //   return greetingMessage + " & " + namesObj[namesObj.length - 1].name;
    // )

    let list = namesObj.map(namesObj => namesObj.name);
    let lastName = list.pop();
    return `${list.join(", ")} & ${lastName}`;

};

module.exports = joinNames;
