const btns=[
{
    id: 1,
    name:'Smartphones'
},
{
    id: 2,
    name:'Relógios'
},
{
    id: 3,
    name:'Câmeras'
},
{
    id: 4,
    name:'Notebooks'
},
{
    id: 5,
    name:'Air Pods'
},
]

const filters = [...new Set(btns.map((btn)=>
    {return btn}))
]

document . getElementById('btns').innerHTML=filters.map((btn)=>{
    var {name, id} = btn;
    return(
        "<button class='fil-p' onclick='filterItems("+(id)+`)'>${name}</button>`
        )
    }).join('');


const product = [

{
    id: 1,
    image: './image/gg-1.jpg',
    title: 'Z flip Foldable Mobile',
    price :7.999,
    category: 'mobile'
},

{
    id: 5,
    image:'./image/hh-2.jpg',
    title: 'Air Pods Pro',
    price: 1.719,
    category: 'airpods'
},
{
    id: 3,
    image: './image/hh-3.jpg',
    title: '250D DSLR Camera',
    price :3.499,
    category: 'cameras'
},
{
    id: 1,
    image: './image/cc-3.jpg',
    title: 'Iphone 15 Pro Max 256GB',
    price :8.599,
},

{
    id: 5,
    image: './image/ee-3.png',
    title: 'Air Pods Max',
    price :6.899,
    category: 'airpods'
},
{
    id: 3,
    image: './image/rr-3.jpg',
    title: 'Camera Sony Alpha A7',
    price :11.999,
    category: 'cameras'
},
{
    id: 4,
    image: './image/cc-2.jpg',
    title: 'Apple Macbook Pro MK183BZ/A',
    price :16.599,
    category: 'Laptop'
},
{
    id: 2,
    image: './image/ww-2.jpg',
    title: 'Smartwatch Apple Watch Series 8 45,0 mm black',
    price :3.639,
    category: 'Relógios'
},
{
    id: 1,
    image: './image/xx-1.jpg',
    title: 'Xaomi 13 Dual 128GB',
    price :2.399,
},
{
    id: 3,
    image: './image/cc-4.jpg',
    title: 'Câmera Digital Canon EOS Rebel SL3',
    price :4.399,
    category: 'cameras'
},
{
    id: 4,
    image: './image/nn-1.jpeg',
    title: 'Notebook Gamer Acer Nitro 5',
    price :3.599,
    category: 'Laptop'
},
{
    id: 2,
    image: './image/ww-1.jpg',
    title: 'Smartwatch Apple Watch Series 3 42,0 mm pink',
    price :1.439,
    category: 'Relógios'
},
];

const categories = [...new Set(product.map((item)=>
    {return item}))]

const filterItems = (a)=>{
    const flterCategories = categories.filter(item);
    function item(value){
        if(value.id==a){
            return(
                value.id
            )
    }
}

displayItem(flterCategories)}

const displayItem = (items) => {
    document.getElementById('root').innerHTML = items.map((item)=>
    {
        var{image, title, price} = item;
        return(
            `<div class='box'>
             <h3>${title}<h3>
            <div ckass='img-box'>
            <img class='images' src=${image}></img>
            </div>
            <div class='bottom'>
            <h2>R$ ${price},00 </h2>
            <button>+ Adicionar ao carrinho</button>
            </div>
            </div>`)
        }).join('');
    }

    displayItem(categories);


    




