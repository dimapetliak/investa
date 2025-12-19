import { Spacer, Text } from '@/components';
import React, { memo } from 'react';
import { View } from 'react-native';
import Animated, { FadeInUp, FadeOut, ZoomIn } from 'react-native-reanimated';
import { AnimatedIcon } from '../animated-icon';
import { PulseRing } from '../pulse-ring';
import { styles } from './step-content.styles';
import { StepContentProps } from './step-content.types';

export const StepContent = memo(({ step, currentStepIndex }: StepContentProps) => {
  return (
    <View style={styles.content}>
      {/* Icon with Pulse Rings */}
      <Animated.View 
        key={`icon-${currentStepIndex}`}
        entering={ZoomIn.delay(200).springify()}
        style={styles.iconContainer}
      >
        <PulseRing delay={0} />
        <PulseRing delay={700} />
        <View style={styles.iconCircle}>
          <AnimatedIcon icon={step.icon} color={step.iconColor} isActive={true} />
        </View>
      </Animated.View>

      <Spacer size="3xl" />

      {/* Title */}
      <Animated.View
        key={`title-${currentStepIndex}`}
        entering={FadeInUp.delay(300).springify()}
        exiting={FadeOut.duration(200)}
      >
        <Text variant="h1" style={styles.title}>
          {step.title}
        </Text>
      </Animated.View>

      <Spacer size="lg" />

      {/* Description */}
      <Animated.View
        key={`desc-${currentStepIndex}`}
        entering={FadeInUp.delay(400).springify()}
        exiting={FadeOut.duration(200)}
      >
        <Text variant="body" style={styles.description}>
          {step.description}
        </Text>
      </Animated.View>
    </View>
  );
});
