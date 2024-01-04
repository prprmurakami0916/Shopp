import { Image } from '@chakra-ui/react'

const Hero = (props) => {
  return (
    <Image
      h='650'
      w='100%'
      objectFit='cover'
      src='hero.jpg'
    />
  )
}

export default Hero