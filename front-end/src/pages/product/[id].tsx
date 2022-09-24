import Head from 'next/head'
import React from 'react'
import Products from '../../components/pages/category/Products'
import Reviews from '../../components/pages/product/reviews/Reviews'
import AddtoCart from '../../components/ui/quickview/Details/AddtoCart'
import AvailableIn from '../../components/ui/quickview/Details/AvailableIn'
import Details from '../../components/ui/quickview/Details/Details'
import Payment from '../../components/ui/quickview/Details/Payment'
import Quantity from '../../components/ui/quickview/Details/Quantity'
import Size from '../../components/ui/quickview/Details/Size'
import Photos from '../../components/ui/quickview/Photos'

const productDetail = {
  id: '1',
  name: 'Oversize knit jumper',
  price: '43,95 €',
  image:
    'https://cdn.outfitbook.fr/26345-thickbox_default/oversized-sweatshirt-dark-green.jpg',
}
const Product = () => {
  return (
    <main className="container py-20">
      <Head>
        <title>Titan | Product Name</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="grid md:grid-cols-2 gap-10 ">
        <section>
          <Photos productimages={productDetail.image} />
        </section>

        <section>
          <Details productDetail={productDetail} />
          <AvailableIn />
          <div className="flex gap-3 py-3 items-end text-sm flex-wrap">
            <Size />
            <Quantity />
            <AddtoCart />
          </div>
          <Payment />
        </section>
      </header>
      <Reviews />

      <h1 className="text-2xl font-semibold pb-4">You may also like</h1>
      <Products />
    </main>
  )
}

export default Product