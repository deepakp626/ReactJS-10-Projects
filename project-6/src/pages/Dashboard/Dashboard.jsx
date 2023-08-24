import React from 'react'
import DashboardLayout from '../../Components/DashboardLayout'
import { Grid, GridItem, PopoverAnchor } from '@chakra-ui/react'
import PortfolioSection from './Components/PortfolioSection'
import PriceSection from './Components/PriceSection'
import Transaction from './Components/Transaction'
import InfoCard from './Components/InfoCard'

const Dashboard = () => {
  return (
    <DashboardLayout title="Dashboard">
      <Grid gap="6" gridTemplateColumns={{
        base: "repeat(1,1fr)",
        xl: "repeat(2,1fr)",
      }}            >
        <GridItem colSpan={{base:1,lg:2}}>
          <PortfolioSection />
        </GridItem>
        <GridItem colSpan={1}>
          <PriceSection />
        </GridItem>
        <GridItem colSpan={1}>
          <Transaction />
        </GridItem>
        <GridItem colSpan={1}>
          <InfoCard
            imgUrl="/dot_bg.svg"
            text=" Learn more about Loans – Keep your Bitcoin, access it’s value without
          selling it"
            tagText="Loan"
            inverted={false}
          />
        </GridItem>
        <GridItem colSpan={1}>
          <InfoCard
            inverted={true}
            tagText="Contact"
            imgUrl="public/grid_bg.svg"
            text="Learn more about our real estate, mortgage, and  corporate account services"
          />
        </GridItem>
      </Grid>

    </DashboardLayout>
  )
}

export default Dashboard