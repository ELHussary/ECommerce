import React from 'react'
import { RiStarSFill, RiHeart3Line, RiEyeLine } from 'react-icons/ri'
import Quickview from '@/components/ui/quickview/Quickview'

const PRO = [
  {
    id: '0',
    name: 'Oversize knit jumper',
    price: '43,95 €',
    image:
      'https://cdn.outfitbook.fr/27989-thickbox_default/oversize-knit-jumper.jpg?_ga=2.128613324.1799479511.1662785947-1104294664.1662785947',
  },

  {
    id: '1',
    name: 'Oversize knit jumper',
    price: '43,95 €',
    image:
      'https://cdn.outfitbook.fr/26345-thickbox_default/oversized-sweatshirt-dark-green.jpg',
  },

  {
    id: '2',
    name: 'Oversize knit jumper',
    price: '43,95 €',
    image:
      'https://cdn.outfitbook.fr/26194-thickbox_default/half-zip-striped-knit-sweater.jpg?_ga=2.96695007.1799479511.1662785947-1104294664.1662785947',
  },

  {
    id: '3',
    name: 'Oversize knit jumper',
    price: '43,95 €',
    image:
      'https://cdn.outfitbook.fr/27974-thickbox_default/trench-coat-in-taupe.jpg?_ga=2.70005584.1799479511.1662785947-1104294664.1662785947',
  },

  {
    id: '4',
    name: 'Oversize knit jumper',
    price: '43,95 €',
    image:
      'https://cdn.outfitbook.fr/27982-thickbox_default/striped-knit-collar-jumper.jpg?_ga=2.61955052.1799479511.1662785947-1104294664.1662785947',
  },

  {
    id: '5',
    name: 'Oversize knit jumper',
    price: '43,95 €',
    image:
      'https://cdn.outfitbook.fr/26317-thickbox_default/jogger-short-dark-green.jpg?_ga=2.61955052.1799479511.1662785947-1104294664.1662785947',
  },
  {
    id: '6',
    name: 'Oversize knit jumper',
    price: '43,95 €',
    image:
      'https://cdn.outfitbook.fr/26317-thickbox_default/jogger-short-dark-green.jpg?_ga=2.61955052.1799479511.1662785947-1104294664.1662785947',
  },
]

const Products = () => {
  const [quickview, setQuickview] = React.useState<boolean>(false)
  const [id, setID] = React.useState<any>()
  const [quickviewProduct, setQuickviewProduct] = React.useState<any>()
  return (
    <>
      {quickview && quickviewProduct.id == id ? (
        <Quickview product={quickviewProduct} setQuickview={setQuickview} />
      ) : (
        ''
      )}
      <header className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:grid-cols-3 ">
        {PRO.map(product => {
          return (
            <div key={product.id}>
              <img src={product.image} alt={product.name} />
              <div className="py-4">
                <h1>{product.name}</h1>
                <div className="flex items-center gap-1 py-1">
                  <RiStarSFill size={18} />
                  <RiStarSFill size={18} />
                  <RiStarSFill size={18} />
                  <RiStarSFill size={18} />
                  <RiStarSFill size={18} />
                </div>
                <div className="flex justify-between items-center py-1.5">
                  <p>{product.price}</p>
                  <p>Add to cart</p>
                </div>

                <div className="flex gap-3 pt-1">
                  <RiEyeLine
                    size={20}
                    className="cursor-pointer"
                    onClick={() => {
                      setQuickview(!quickview)
                      setID(product.id)
                      setQuickviewProduct(product)
                    }}
                  />
                  <RiHeart3Line size={20} />
                </div>
              </div>
            </div>
          )
        })}
      </header>
    </>
  )
}

export default Products
