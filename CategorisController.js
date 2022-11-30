const express = require("express");
const Category = require("./Category");
const slugify = require("slugify");
const router = express.Router();

router.get("/admin/categories/new",(req,res)=> {
    res.render("admin/categories/new");
});

router.post("/categories/save", (req, res) => {
    var title = req.body.title;
    console.log(title);
    if(title != undefined){
        Category.create({
            title: title,
            slug: slugify(title)
        }).then(() => {
            res.redirect("/admin/categories/index");
        })

    }else{
        res.redirect("/admin/categories/new");
    }
});

router.get("/admin/categories/index",(req,res)=>{
    Category.findAll().then(categories=>{
        res.render("admin/categories/index",{categories:categories});
    });
});


router.post("/categories/delete",(req,res)=>{
    let id = req.body.id;
    if(id != undefined && !isNaN(id)){
        Category.destroy({
            where:{
                id:id
            }
        }).then(()=>{
            res.redirect("/admin/categories/index");
        });
    }


});

router.get("/admin/categories/edit/:id", (req, res) => {
    var id = req.params.id;

    if(isNaN(id)){
        res.redirect("/admin/categories"); 
    }

    Category.findByPk(id).then(category => {
        if(category != undefined){
            res.render("admin/categories/edit",{category: category});
        }else{
            res.redirect("/admin/categories/index");
        }
    }).catch(erro => {
        res.redirect("/admin/categories/index");        
    })
});

router.post("/categories/update",(req,res)=>{ // atualizando dados update sql
    let id = req.body.id;
    let title = req.body.title;
    Category.update({title:title,slug:slugify(title)},{
        where:{
            id:id
        }
    }).then(()=>{
        res.redirect("/admin/categories/index");
    });
});

module.exports = router;