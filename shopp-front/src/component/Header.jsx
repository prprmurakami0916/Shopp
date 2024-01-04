import { Box, Container, Image } from '@chakra-ui/react'
// import logoImage from "../../public/logo.png"

const Header = (props) => { 
  return (
    <Box>
      <Container>
        {/* <a href="index.html">
          <img src='../../public/logo.png' />
        </a> */}
        <Image
          src='logo.svg'
        />
      </Container>
    </Box>
  )
}

export default Header