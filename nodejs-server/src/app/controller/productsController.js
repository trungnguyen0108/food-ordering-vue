
class productsController {
    products(req, res) {
        res.json({
            'products': [
                {
                    id: "01",
                    title: "Cơm gà chiên",
                    price: 40000,
                    image01: "https://img.upanh.tv/2022/08/02/product_01.1.jpg",
                    image02: "https://img.upanh.tv/2022/08/02/product_01.2.jpg",
                    image03: "https://img.upanh.tv/2022/08/02/product_01.3.jpg",
                    category: "chicken-rice",
                },

                {
                    id: "02",
                    title: "Cơm gà luộc",
                    price: 40000,
                    image01: "https://img.upanh.tv/2022/08/02/product_02.1.jpg",
                    image02: "https://img.upanh.tv/2022/08/02/product_02.2.jpg",
                    image03: "https://img.upanh.tv/2022/08/02/product_02.3.jpg",
                    category: "chicken-rice",
                },

                {
                    id: "03",
                    title: "Cơm gà xé",
                    price: 30000,
                    image01: "https://img.upanh.tv/2022/08/02/product_03.1.jpg",
                    image02: "https://img.upanh.tv/2022/08/02/product_03.2.jpg",
                    image03: "https://img.upanh.tv/2022/08/02/product_03.3.jpg",
                    category: "chicken-rice"
                },

                {
                    id: "04",
                    title: "Canh gà lá giang",
                    price: 50000,
                    image01: "https://img.upanh.tv/2022/08/02/product_04.1.jpg",
                    image02: "https://img.upanh.tv/2022/08/02/product_04.2.jpg",
                    image03: "https://img.upanh.tv/2022/08/02/product_04.3.jpg",
                    category: "soup"
                },

                {
                    id: "05",
                    title: "Cháo gà",
                    price: 40000,
                    image01: "https://img.upanh.tv/2022/08/02/product_05.1.jpg",
                    image02: "https://img.upanh.tv/2022/08/02/product_05.2.jpg",
                    image03: "https://img.upanh.tv/2022/08/02/product_05.3.jpg",
                    category: "soup"
                },
                {
                    id: "06",
                    title: "Miến gà",
                    price: 40000,
                    image01: "https://img.upanh.tv/2022/08/02/product_06.1.jpg",
                    image02: "https://img.upanh.tv/2022/08/02/product_06.2.jpg",
                    image03: "https://img.upanh.tv/2022/08/02/product_06.3.jpg",
                    category: "side-dish"
                },

                {
                    id: "07",
                    title: "Gỏi gà",
                    price: 80000,
                    image01: "https://img.upanh.tv/2022/08/02/product_07.1.jpg",
                    image02: "https://img.upanh.tv/2022/08/02/product_07.2.jpg",
                    image03: "https://img.upanh.tv/2022/08/02/product_07.3.jpg",
                    category: "soup"
                },

                {
                    id: "08",
                    title: "Lòng gà xào mướp",
                    price: 30000,
                    image01: "https://img.upanh.tv/2022/08/02/product_08.1.jpg",
                    image02: "https://img.upanh.tv/2022/08/02/product_08.2.jpg",
                    image03: "https://img.upanh.tv/2022/08/02/product_08.3.jpg",
                    category: "side-dish"
                },

                {
                    id: "09",
                    title: "Lòng gà",
                    price: 20000,
                    image01: "https://img.upanh.tv/2022/08/02/product_09.1.jpg",
                    image02: "https://img.upanh.tv/2022/08/02/product_09.2.jpg",
                    image03: "https://img.upanh.tv/2022/08/02/product_09.3.jpg",
                    category: "side-dish"
                },



                {
                    id: "10",
                    title: "Pepsi",
                    price: 12000,
                    image01: "https://img.upanh.tv/2022/08/02/product_10.1.jpg",
                    image02: "https://img.upanh.tv/2022/08/02/product_10.2.jpg",
                    image03: "https://img.upanh.tv/2022/08/02/product_10.3.jpg",
                    category: "drinks"
                },

                {
                    id: "11",
                    title: "Trà đá",
                    price: 2000,
                    image01: "https://img.upanh.tv/2022/08/02/product_11.1.jpg",
                    image02: "https://img.upanh.tv/2022/08/02/product_11.2.jpg",
                    image03: "https://img.upanh.tv/2022/08/02/product_11.3.jpg",
                    category: "drinks"
                },

                {
                    id: "12",
                    title: "Nước suối",
                    price: 6000,
                    image01: "https://img.upanh.tv/2022/08/02/product_12.1.jpg",
                    image02: "https://img.upanh.tv/2022/08/02/product_12.2.jpg",
                    image03: "https://img.upanh.tv/2022/08/02/product_12.3.jpg",
                    category: "drinks"
                },
            ]
        })
    }
}

module.exports = new productsController