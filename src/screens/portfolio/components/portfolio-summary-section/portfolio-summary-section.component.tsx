import { Container, LinearBackground, PortfolioSummaryCard } from '@/components/_shared';
import React from 'react';
import { PortfolioSummarySectionProps } from './index';

export const PortfolioSummarySection = ({
  portfolioSummary,
  onViewAllAssets,
}: PortfolioSummarySectionProps) => {
  if (!portfolioSummary) {
    return null;
  }

  return (
    <LinearBackground>
    <Container padding="md">
      <PortfolioSummaryCard
      totalValue={portfolioSummary.totalValue}
      totalPnL={portfolioSummary.totalPnL}
      totalPnLPercent={portfolioSummary.totalPnLPercent}
      totalCost={portfolioSummary.totalCost}
      onPress={onViewAllAssets}
    />  
    </Container>
    </LinearBackground>
  );
};

