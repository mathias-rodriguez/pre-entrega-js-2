export const productos = [
    {
        id: 1,
        nombre: "vinilo",
        artista: "2 Pac",
        album: "All eyez on me",
        precio: 18000,
        img: "https://m.media-amazon.com/images/I/71-XYaNGaBL._UF1000,1000_QL80_.jpg",
    },
    {
        id: 2,
        nombre: "vinilo",
        artista: "Notorious BIG",
        album: "Ready to die",
        precio: 18000,
        img: "https://i.discogs.com/vSYXJ_wKSp9L8pnROuGrjnSJCmI66zXQFRZ7F-1rk_Y/rs:fit/g:sm/q:90/h:589/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMxNzM1/Ni0xNjgwMDgwNTA5/LTI0MTYuanBlZw.jpeg",
    },
    {
        id: 3,
        nombre: "vinilo",
        artista: "Nas",
        album: "Illmatic",
        precio: 17500,
        img: "https://www.turntablelab.com/cdn/shop/products/nas-illmatic-redvinyl-1a_1200x1200.jpg?v=1671214434",
    },
    {
        id: 4,
        nombre: "vinilo",
        artista: "50 Cent",
        album: "Get rich or die tryin",
        precio: 15000,
        img: "https://www.turntablelab.com/cdn/shop/products/50cent-getrichoprdie-blackvinyl-1_1200x1200.jpg?v=1674496218",
    },
    {
        id: 5,
        nombre: "vinilo",
        artista: "Wu-Tang Clan",
        album: "36 Chambers",
        precio: 17000,
        img: "https://d22fxaf9t8d39k.cloudfront.net/19701ea39351be679e6c1a04c997678ecfac3d4a6835c408e5c8aec4c88c179533018.png",
    },
    {
        id: 6,
        nombre: "vinilo",
        artista: "Mobb Deep",
        album: "The infamous",
        precio: 16800,
        img: "https://merchbar.imgix.net/product/vinylized/upc/66/889326326625.jpg?q=40&auto=compress,format&w=1400",
    },
];

JSON.parse(localStorage.getItem("productos")) || localStorage.setItem("productos", JSON.stringify(productos));