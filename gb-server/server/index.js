const path = require('path');
const cors = require("cors");
const express = require('express');
const fs = require("fs");
const app = express();

const port = 4000;

const DEFAULT_PATH = path.resolve(__dirname, '../../gb-vue/dist');

const CATALOG_TYPE = path.resolve(__dirname, '../data/catalogType.json');
const CATALOG_MAIN = path.resolve(__dirname, '../data/catalogMain.json');
const CATALOG_WOMEN = path.resolve(__dirname, '../data/catalogWomen.json');
const CATALOG_MEN = path.resolve(__dirname, '../data/catalogMen.json');
const CATALOG_KID = path.resolve(__dirname, '../data/catalogKid.json');
const CATALOG_ACCESORIES = path.resolve(__dirname, '../data/catalogAccesories.json');
const BASKET = path.resolve(__dirname, '../data/basket.json');

const DROP_LIST = path.resolve(__dirname, '../data/dropList.json');

function getCatalog(req, type){
    if(type === 'women'){
        return CATALOG_WOMEN
    }else if(req.params.id === 'men'){
        return CATALOG_MEN
    }else if(type === 'kid'){
        return CATALOG_KID
    }else if(type === 'accesories'){
        return CATALOG_ACCESORIES
    }else if(type === 'main'){
        return CATALOG_MAIN
    }else{
        return []
    }
}

app.use(cors());
app.use(express.static(DEFAULT_PATH))
app.use(express.json())

app.listen(port, ()=>{
    console.log('server start: http://localhost:' + port)
})

app.get('/api/v1/catalog-type', (req,res)=>{
    fs.readFile(CATALOG_TYPE, 'utf-8', (err,data)=>{
        if(!err){
            res.send(data)
        }else{
            res.status(500).send(err)
        }
    })
})

app.get('/api/v1/catalogs/:id', (req,res)=>{
    const catalog = getCatalog(req, req.params.id);

    fs.readFile(catalog, 'utf-8', (err,data)=>{
        if(!err){
            res.send(data)
        }else{
            res.status(500).send(err)
        }
    })
})

app.get('/api/v1/catalog-main', (req,res)=>{
    fs.readFile(CATALOG_MAIN, 'utf-8', (err,data)=>{
        if(!err){
            res.send(data)
        }else{
            res.status(500).send(err)
        }
    })
})

app.get('/api/v1/drop-list', (req,res)=>{
    fs.readFile(DROP_LIST, 'utf-8', (err,data)=>{
        if(!err){
            res.send(data)
        }else{
            res.status(500).send(err)
        }
    })
})

app.get('/api/v1/product/:id', (req,res)=>{
    const type = req.params.id.split('-')[0];
    const id = req.params.id.split('-')[1];
    const catalog = getCatalog(req, type);

    fs.readFile(catalog, 'utf-8', (err,data)=>{
        if(!err){
            const catalog = JSON.parse(data);
            const index = catalog.findIndex(el=> el.id === id);
            const result = catalog[index]
            const ret = JSON.stringify([result]);
            res.send(ret)
        }else{
            res.status(500).send(err)
        }
    })
})

app.get('/api/v1/basket', (req,res)=>{
    fs.readFile(BASKET, 'utf-8', (err,data)=>{
        if(!err){
            res.send(data)
        }else{
            res.status(500).send(err)
        }
    })
})

app.get('/api/v1/basket-length', (req,res)=>{
    fs.readFile(BASKET, 'utf-8', (err,data)=>{
        if(!err){
            const basket = JSON.parse(data);
            const basketCount = basket.map(item => item.count).reduce((prev, curr) => prev + curr, 0);
            res.send(JSON.stringify(basketCount))
        }else{
            res.status(500).send(err)
        }
    })
})

app.put('/api/v1/basket', (req,res)=>{
    fs.readFile(BASKET, 'utf-8', (err,data)=>{
        if(!err){
            const id = req.body.id;
            const type = req.body.type;

            const basket = JSON.parse(data);
            const index = basket.findIndex(el => el.id === id && el.type === type );

            if(index > -1){
                basket[index].count += 1;

                fs.writeFile(BASKET, JSON.stringify(basket), 'utf-8',()=>{
                    fs.readFile(BASKET, 'utf-8', (err,data)=>{
                        const basket = JSON.parse(data);
                        const basketCount = basket.map(item => item.count).reduce((prev, curr) => prev + curr, 0);
                        res.send(JSON.stringify(basketCount))
                    })
                })
            }else{
                const catalog = getCatalog(req, type);
                fs.readFile(catalog, 'utf-8', (err,data)=>{
                    const catalog = JSON.parse(data);
                    const indexCatalog = catalog.findIndex(el => el.id === id);

                    const el = catalog[indexCatalog]
                    el.count = 1;
                    basket.push(el);

                    fs.writeFile(BASKET, JSON.stringify(basket), 'utf-8',()=>{
                        fs.readFile(BASKET, 'utf-8', (err,data)=>{
                            const basket = JSON.parse(data);
                            const basketCount = basket.map(item => item.count).reduce((prev, curr) => prev + curr, 0);
                            res.send(JSON.stringify(basketCount))
                        })
                    })
                })
            }
        }else{
            res.status(500).send(err)
        }
    })
})

app.put('/api/v1/basket-remove', (req,res)=>{
    fs.readFile(BASKET, 'utf-8', (err,data)=>{
        if(!err){
            const id = req.body.id;
            const type = req.body.type;

            const basket = JSON.parse(data);
            const index = basket.findIndex(el => el.id === id && el.type === type );

            if(index < 0){
                res.send('no items')
            }else{
                basket.splice(index, 1);
                fs.writeFile(BASKET, JSON.stringify(basket), 'utf-8',()=>{
                    fs.readFile(BASKET, 'utf-8', (err,data)=>{
                        res.send(data)
                    })
                })
            }
        }else{
            res.status(500).send(err)
        }
    })
})


