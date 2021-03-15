import React from 'react'
import styled from 'styled-components'
import { Flex, Image, Text, Skeleton } from '@pancakeswap-libs/uikit'
import { Farm } from 'state/types'
import BigNumber from 'bignumber.js'

export interface FarmWithStakedValue extends Farm {
  apy?: BigNumber
}

export interface ExpandableSectionProps {
  lpLabel?: string
  multiplier?: string
  risk?: number
  depositFee?: number
  farmImage?: string
  tokenSymbol?: string
  totalValueFormated?: string
  totalValue?: string
  farmAPR?: string
}

const Wrapper = styled(Flex)`
  svg {
    margin-right: 0.25rem;
  }
`

const CardTopHeading: React.FC<ExpandableSectionProps> = ({ farmImage, tokenSymbol, farmAPR, totalValueFormated }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <Wrapper
        justifyContent="space-between"
        alignItems="center"
        mb="12px"
        style={{ width: '100%', justifyContent: 'space-between' }}
      >
        <Flex
          className="card-header-top"
          alignItems="flex-end"
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            justifyContent: 'space-between',
            padding: '1.5rem 0.5rem',
            background: 'linear-gradient(298.94deg,rgba(128,96,255,.2),rgba(98,126,234,.2))',
            border: '2px solid rgb(15 150 242 / 34%)',
            borderRadius: '10px 10px 0px 0px',
          }}
        >
          <Flex justifyContent="space-between" flexDirection="column">
            <Text style={{ textAlign: 'left' }}>Total Liquidity</Text>
            <Text style={{ textAlign: 'left' }}>{totalValueFormated}</Text>
          </Flex>

          <Flex justifyContent="space-between" flexDirection="column">
            <Text style={{ textAlign: 'left' }}>APY</Text>

            <Text style={{ textAlign: 'left' }}>{farmAPR}% </Text>
          </Flex>
        </Flex>
      </Wrapper>
      <Image
        src={`/images/farms/${farmImage}.png`}
        alt={tokenSymbol}
        width={104}
        height={79}
        marginTop={-50}
        marginBottom={10}
      />
    </div>
  )
}

export default CardTopHeading
