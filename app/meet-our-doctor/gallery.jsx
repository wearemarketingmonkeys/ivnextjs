"use client"

import React from "react"

import ImageGallery from "react-image-gallery"

const images = [
  {
    original: "./assets/img/mod/gallary/T1.jpeg",
    thumbnail: "./assets/img/mod/gallary/T1.jpeg",
  },
  {
    original: "./assets/img/mod/gallary/T5.jpeg",
    thumbnail: "./assets/img/mod/gallary/T5.jpeg",
  },
  {
    original: "/assets/img/mod/gallary/T6.jpeg",
    thumbnail: "/assets/img/mod/gallary/T6.jpeg",
  },
  {
    original: "/assets/img/mod/gallary/T7.jpeg",
    thumbnail: "/assets/img/mod/gallary/T7.jpeg",
  },
  {
    original: "/assets/img/mod/gallary/T8.jpeg",
    thumbnail: "/assets/img/mod/gallary/T8.jpeg",
  },
  {
    original: "/assets/img/mod/gallary/T9.jpeg",
    thumbnail: "/assets/img/mod/gallary/T9.jpeg",
  },
  {
    original: "/assets/img/mod/gallary/T10.jpeg",
    thumbnail: "/assets/img/mod/gallary/T10.jpeg",
  },
  {
    original: "/assets/img/mod/gallary/T11.jpeg",
    thumbnail: "/assets/img/mod/gallary/T11.jpeg",
  },
  {
    original: "/assets/img/mod/gallary/T12.jpeg",
    thumbnail: "/assets/img/mod/gallary/T12.jpeg",
  },
  {
    original: "/assets/img/mod/gallary/T13.jpeg",
    thumbnail: "/assets/img/mod/gallary/T13.jpeg",
  },
  {
    original: "/assets/img/mod/gallary/T14.jpeg",
    thumbnail: "/assets/img/mod/gallary/T14.jpeg",
  },
  {
    original: "/assets/img/mod/gallary/T15.png",
    thumbnail: "/assets/img/mod/gallary/T15.png",
  },
  {
    original: "/assets/img/mod/gallary/T16.jpeg",
    thumbnail: "/assets/img/mod/gallary/T16.jpeg",
  },
  {
    original: "/assets/img/mod/gallary/T17.jpg",
    thumbnail: "/assets/img/mod/gallary/T17.jpg",
  },
  {
    original: "/assets/img/mod/gallary/T18.png",
    thumbnail: "/assets/img/mod/gallary/T18.png",
  },
  {
    original: "/assets/img/mod/gallary/T19.png",
    thumbnail: "/assets/img/mod/gallary/T19.png",
  },
  {
    original: "/assets/img/mod/gallary/T20.png",
    thumbnail: "/assets/img/mod/gallary/T20.png",
  },
  {
    original: "/assets/img/mod/gallary/T21.png",
    thumbnail: "/assets/img/mod/gallary/T21.png",
  },
  {
    original: "/assets/img/mod/gallary/T22.png",
    thumbnail: "/assets/img/mod/gallary/T22.png",
  },
]

class MyGallery extends React.Component {
  render() {
    return <ImageGallery items={images} />
  }
}

export default MyGallery