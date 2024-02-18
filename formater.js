// Function to format incoming data from raw format to structured format.
// it checks the id, but could be any unique identifier available

//                       ══✿══╡°˖✧✿✧˖°╞══✿══ 
export function formatIncomingData(rawData) {
  // A key in the Map may only occur once; it is unique in the Map's collection. [1]
 const formattedData = new Map();

//                       ══✿══╡°˖✧✿✧˖°╞══✿══ 
 rawData.forEach((item) => {
   // Check if an entry for the current item's ID already exists in the formatted data.
   // here is where you model your somewhat desired structure
   // add your desired keys and map
   if (!formattedData.has(item.ID)) {
     formattedData.set(item.ID, {
       title: item.title,
       description: item.description,
       infos: [],
     });
   }
//                       ══✿══╡°˖✧✿✧˖°╞══✿══ 
    // Retrieve the entrie from map.
   const data = formattedData.get(item.ID);
   // Here is where you finished that somewhat for the desired struchture
   // so above info got set into an array and...
   // and here pushing inside the array and object with 2 keys
   data.infos.push({
     date: item.date,
     creator: item.creator
    });
    console.log("data: ", data)
 });
 console.log("formatted ",  Array.from(formattedData.values()))
 return Array.from(formattedData.values());
}


//                       ══✿══╡°˖✧✿✧˖°╞══✿══ 
// Transforming the data from:
// {
//   "title":"title",
//   "description":"description",
//   "date":"date",
//   "creator":"creator"
// }

// to this:

// {
//   "title":"title",
//   "description":"description",
//   "infos":[
//     "date":"date",
//     "creator":"creator"

//   ]
// }

//                       ══✿══╡°˖✧✿✧˖°╞══✿══ 

// [1] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map?retiredLocale=de

// also remove the logs in the end... Senior are always watching
