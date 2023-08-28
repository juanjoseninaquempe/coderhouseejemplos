const list = [
    {
        id: "1",
        category: "nuevos",
        name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        img: "https://i.postimg.cc/LXwFSFfq/81f-PKd-2-AYL-AC-SL1500.jpg",
        stock:  120
    },
    {
        id: "2",
        category: "ofertas",
        name: "Mens Casual Premium Slim Fit T-Shirts ",
        price: 22.3,
        description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        img: "https://i.postimg.cc/WpkQZKgn/71-3-Hj-GNDUL-AC-SY879-SX-UX-SY-UY.jpg",
        stock: 259
        
    },
    {
        id:" 3",
        category: "nuevos",
        name: "Mens Cotton Jacket",
        price: 55.99,
        description: "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        img: "https://i.postimg.cc/zXdSGDvP/71li-ujtl-UL-AC-UX679.jpg",
        stock: 500
        
    },
    {
        id:" 4",
        category: "ofertas",
        name: "Mens Casual Slim Fit",
        price: 15.99,
        description: "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
        img: "https://i.postimg.cc/NFdTFbsr/71-YXze-Ousl-L-AC-UY879.jpg",
        stock: 430
        
    },
    {
        id: "5",
        category: "vendidos",
        name: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        price: 695,
        description: "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
        img: "https://i.postimg.cc/66cCM6r5/71p-Wzhd-JNw-L-AC-UL640-QL65-ML3.jpg",
        stock: 400
        
    },
]

export const getProducts = () => {
    return new Promise((resolve,reject) =>{
        let error = false
        setTimeout(()=> {
            if(error){
                reject("No hay data,intente mas tarde ")
            }else{
                resolve(list)
            } 
        },2000)
    })
}

export const getItem = (id) =>{
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(list.find((item) => item.id === id))
        },2000)
    })
}