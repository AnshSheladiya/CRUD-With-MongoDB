const {MongoClient}=require('mongodb');
const url='mongodb://localhost:27017';
const database='ansh';
const client=new MongoClient(url);

async function getData(){
    let result=await client.connect()
    let db=result.db(database)
    let collection=db.collection('anshu')
    let finalData=await collection.find({}).toArray();
    console.log(finalData)
}

async function insertData(){
    let result=await client.connect()
    let db=result.db(database)
    let collection=db.collection('anshu')
    let finalData=await collection.insertMany(
        [
            {name:'Rohan',age:20,firstname:'Domadiya'},
            {name:'xyz',age:19,firstname:'xyzz'},
        ]
    )
   if(finalData.acknowledged){
        console.log("Data Inserted")
    }
}

async function updateData(){
    const result=await client.connect();
    const db=result.db(database);
    const collection=db.collection('anshu');
    const finalData=await collection.updateMany({name:'ansh'},{$set:{name:'abc',age:5,firstname:'xyz'}})
    console.log('data Updated')
}

async function deleteData(){
    const result=await client.connect();
    const db=result.db(database)
    const collection=db.collection('anshu');
    const finalData=await collection.drop({name:'abc'})
    console.log('Deleted Successfully')
}


insertData()
updateData()
deleteData()
getData()