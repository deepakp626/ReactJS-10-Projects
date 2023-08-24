import { Box, Button, HStack, Icon, Tag, Text, VStack, background } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { BsArrowDownShort, BsArrowUpShort } from 'react-icons/bs'

const PortfolioSection = () => {
    return (
        <>
            <HStack w={"100%"} p={"1.5rem"} borderRadius="1rem" bg={'white'} flexDirection={{ base: 'column', xl: "row" }} justifyContent={'space-between'}  alignItems={{ base: "flex-start", xl: "center" }}
            >

                <VStack alignItems='flex-start' gap={"0.75rem"}>
                    <HStack fontSize="0.875rem" color="black.80">
                        <Text>Total Portfolio Value</Text>
                        <Icon as={AiOutlineInfoCircle} />
                    </HStack>
                    <Text fontWeight="500" fontSize="1.5rem">₹ 112,312.24</Text>
                </VStack>

                <VStack alignItems='flex-start' gap="0.75rem">
                    <HStack fontSize="0.875rem">
                        <Text >Total Portfolio Value</Text>
                    </HStack>
                    <HStack >
                        <HStack>
                            <Text fontWeight="500" fontSize="1.5rem">22.39401000</Text>
                            <Tag fontSize={'0.75rem'} fontWeight="medium"> BTC</Tag>
                        </HStack>
                        <HStack>
                            <Text fontWeight="500" fontSize="1.5rem">22.39401000</Text>
                            <Tag fontSize={'0.75rem'} fontWeight="medium"> BTC</Tag>
                        </HStack>
                    </HStack>
                </VStack>

                <HStack>
                    <Button  fontSize="0.875rem" fontWeight='medium' leftIcon={<Icon as={BsArrowDownShort} />}>Deposit</Button>
                    <Button  fontSize="0.875rem" fontWeight='medium' leftIcon={<Icon as={BsArrowUpShort} />}>Withdraw</Button>
                </HStack>

            </HStack>
        </>
    )
}

export default PortfolioSection