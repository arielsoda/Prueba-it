import Image from 'next/image'

const myLoader = ({ src }) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

const MyImage = ({ product }) => {
  return (
    <Image
      loader={myLoader}
      src={product.featured_media.medium}
      alt={product.title}
      width={500}
      height={500}
    />
  )
};

export default MyImage;