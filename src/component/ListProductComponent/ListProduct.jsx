import React from "react";
import './Listproduct.css';

class ListProduct extends React.Component {
  state = [
    {
      url_image:
        "https://moondoggiesmusic.com/wp-content/uploads/2018/09/Gambar-Buah-Apel.jpg",
      name: "Apel",
      category: "Buah-buahan",
      price: 20000,
    },
    {
      url_image:'https://assets-a1.kompasiana.com/items/album/2017/01/04/2014-01-30-12-56-25-586d1ac0367b619d145132ed.jpg',
      name: "Nasi Padang",
      category: "Makanan",
      price: 15000,
    },
    {
      url_image: "https://kbu-cdn.com/dk/wp-content/uploads/sate-ayam.jpg",
      name: "Sate",
      category: "Makanan",
      price: 20000,
    },
    {
      url_image:
        "https://moondoggiesmusic.com/wp-content/uploads/2018/09/Gambar-Buah-Anggur.jpg",
      name: "Anggur",
      category: "Buah-buahan",
      price: 30000,
    },
    {
      url_image:
        "https://media.karousell.com/media/photos/products/2019/01/14/chikiciki_mister_potato_100gr_1547467051_3fa6a781_progressive.jpg",
      name: "Potato",
      category: "Makanan Ringan",
      price: 10000,
    },
    {
      url_image:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRx1hNIlsvQmT0eK81meAVhEMtjeor2hHkvgQ&usqp=CAU',
      name: "Somay",
      category: "Makanan Sampingan",
      price: 10000,
    },
    {
      url_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQa59VUq4QIqRGOrFJArS5h51PqMqh7f7oGWQ&usqp=CAU',
      name: "Rujak",
      category: "Camilan",
      price: 9000,
    },
    {
      url_image:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTebJ5_hDX5OLfGSXNmnckE1dl0bDh67OPjAw&usqp=CAU',
      name: "Jus Aplukat",
      category: "Minuman",
      price: 11000,
    },
    {
      url_image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQoih2Ap_NQsooGDwhJm2fFzj3t5m1x-O12_Q&usqp=CAU",
      name: "Es Doger",
      category: "Minuman",
      price: 8000,
    },
    {
      url_image:
        "https://moondoggiesmusic.com/wp-content/uploads/2018/09/Foto-Buah-Semangka.jpg",
      name: "Semangka",
      category: "Buah-buahan",
      price: 21000,
    },
    {
      url_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5rAr_r0rma298IY82trhbRlNO0xy9nh-qrw&usqp=CAU',
      name: "Rawon",
      category: "Makanan",
      price: 18000,
    },
    {
      url_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQOss0YKmApq53VYUHu2FZhdmmQiqe9yXGr2g&usqp=CAU',
      name: "Durian",
      category: "Buah-buahan",
      price: 70000,
    }
  ];

  render() {
    return (
      <>
        {this.state.map((item) => (
          <div className="content-wrapper">
              <div className="image-food">
              <img src={item.url_image} alt="" />
              </div>
            <h4 className="name">{item.name}</h4>
            <div className="text-content">
            <p className="category">{item.category}</p>
            <em className="price">Rp {item.price}</em>
            </div>
          </div>
        ))}
      </>
    );
  }
}

export default ListProduct;
