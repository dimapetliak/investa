import { Container, PortfolioSummaryCard } from '@/components';
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
    <Container padding="md">
      <PortfolioSummaryCard
        totalValue={portfolioSummary.totalValue as number}
        totalPnL={portfolioSummary.totalPnL}
        totalPnLPercent={portfolioSummary.totalPnLPercent}
        totalCost={portfolioSummary.totalCost}
        onPress={onViewAllAssets}
      />  
    </Container>
  );
};

