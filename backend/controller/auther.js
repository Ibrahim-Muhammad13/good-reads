const auther = require("../models/author");// for database

async function creation (data, res){
  try {
    const respons=  await auther.create(data)

    res.status(201).json("create accout seccessful "+respons )
  } catch (e) {
    res.status(500).json(e)
  }}

async function getting (res){
  try {
    const respons=  await auther.find()    
  // const respons=  await usermodel.find({firstName:"John"})    
    console.log(respons)
    res.status(201).json(respons)
  } catch (e) {
    res.status(500).json(e)
  }}

async function gettingbyId (id,res){

  try {
    // const respons= await auther.findById(id)   ;
const respons=await auther.findById(id)
    // const respons=  await auther.find()    

    console.log(respons)
    res.status(201).json(respons )
  } catch (e) {
    res.status(500).json(e)
    }}

async function edit (id,data,res){
  try {
   const respons=  await auther.findByIdAndUpdate(id,data)    
    res.status(201).json("come with updata method by id "+respons )
    } catch (e) {
    res.status(500).json(e)
  }}


async function remove (id,res){
  try {
    await   auther.findByIdAndRemove(id)    
    res.status(201).json("come with delete method by id ")
    } catch (e) {
    res.status(500).json(e)
}}

      module.exports={
        creation,getting,gettingbyId,remove,edit
        // ,gettingbyid,edit ,remove
            // add,edit,remove,parse2 ,checked,show
        }