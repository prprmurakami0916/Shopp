import { Card, CardHeader, Heading, CardBody, Text, CardFooter, Button } from '@chakra-ui/react'

const Item = (props) => {
  return (
    <box>
      <Card>
        <CardHeader>
          <Heading size='md'>{props.name}</Heading>
        </CardHeader>
        <CardBody>
          <Text>{props.detail}</Text>
        </CardBody>
        <CardFooter>
          <Button>View here</Button>
        </CardFooter>
      </Card>
    </box>
  )
}

export default Item
