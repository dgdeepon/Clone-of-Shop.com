import { Text, Image, Box } from "@chakra-ui/react"

export default function MidBannerOptions({link,txt}){

    return <Box mr={'1'}>
    <Image src={link} alt={txt} minW='44' borderRadius={'full'} border={'8px'} borderColor={'gray.300'}/>
    <Text as={'b'} textAlign={'center'}>{txt}</Text>
    </Box>
}