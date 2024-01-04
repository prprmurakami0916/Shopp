import { Card, AspectRatio, Image, CardHeader, Heading, CardBody, Text, CardFooter, Button } from '@chakra-ui/react'

const Item = (props) => {
  return (
    <Card>
      <AspectRatio ratio={3 / 2}>
        <Image
          src={props.imageUrl}
          alt='Item Image'
          borderTopRadius='lg'
          objectFit='cover'
        />
      </AspectRatio>
      <CardHeader>
        <Heading fontSize='clamp(12px, 2vw, 20px)' noOfLines={1}>{props.name}</Heading>
      </CardHeader>
      <CardBody>
        <Text fontSize='clamp(10px, 1.6vw, 14px)' noOfLines={1}>{props.detail}</Text>
      </CardBody>
      <CardFooter>
        <Button>View here</Button>
      </CardFooter>
    </Card>
  )
}

export default Item
