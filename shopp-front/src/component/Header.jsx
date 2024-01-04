import { Box, Center, Image, Flex, Spacer } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'


const Header = (props) => { 
  return (
    <Box h='112'>
      <Flex h='100%' w='92%' m='auto'>
        <Center>
          <Box>
            <Image src='logo.svg' />
          </Box>
        </Center>
        <Spacer />
        <Center>
          <HamburgerIcon boxSize={7} />
        </Center>
      </Flex>
    </Box>
  )
}

export default Header