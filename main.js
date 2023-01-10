// const express=require('express');
// app=express();

// // query//
//  app.get('/',(req,res)=>{
//      let firstname=req.query.firstname;
//      let lastname=req.query.lastname;
//      res.end(`${firstname} ${lastname}`);


//  })

//  app.post('/',(req,res)=>{
//      let firstname=req.query.firstname;
//      let lastname=req.query.lastname;
//      res.end(`${firstname} ${lastname}`);


//  })

//  // header//
//  app.get('/',(req,res)=>{
//    let firstName=req.header('firstName');
//    let UserAgent=req.header('User-Agent');
//    res.end(UserAgent);


//  })
//  app.post('/',(req,res)=>{
//      let userName= req.header('userName');
//      let password= req.header('password');
//      res.send(`username:${userName},password:${password}`)
     
   

//  })

// response header//

// app.get('/five',(req,res)=>{
//      res.append('name','rabbil hasan')
//      res.append('city','Dhaka')
//      res.append('age','30')
//      res.status(201).end('this is five');
//  });

//  // this is download response operation//

// app.get('/four',(req,res)=>{
//      res.download('./picture/abc.png')
// });

//file upload//

const express=require('express');
const multer=require('multer');

app=express();
 let storage=multer.diskStorage({destination:(req,file,callback)=>{
     callback(null,'./picture')
 }},
 {
     filename:(req,file,callback)=>{
          callback(null,file.originalname)

     }
 }
     
)
let upload=multer({storage:storage}).single('myfile');

app.post('/',function(req,res){
     upload(req,res,function(err){
          if(err){
               res.send('file upload fail')
          }else{res.send('file upload successful')}
     })

});
app.listen(3000,function(){
     console.log('server running');
})

// body //
// const express=require('express');
// const bodyParser=require('body-parser');
// app=express();
// app.use(bodyParser.json());

// app.post('/',(req,res)=>{
//      let jsonData=req.body;
//     let name=jsonData['name']
//     let city=jsonData['city']
//     res.send(`${name} ${city}`);
// })






// app.listen(3000,()=>{
//      console.log('server run success');
// })







// app.listen(3000,()=>{
//      console.log('server run success');
// })