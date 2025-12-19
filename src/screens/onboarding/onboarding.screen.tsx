import { Spacer } from '@/components';
import { LinearGradient } from 'expo-linear-gradient';
import React, { memo, useMemo } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, { FadeInDown, runOnJS } from 'react-native-reanimated';
import {
  BottomNavigation,
  FaceIdToggle,
  FloatingParticle,
  OnboardingHeader,
  OnboardingProgressBar,
  StepContent,
} from './components';
import { ONBOARDING_STEPS } from './constants';
import { useOnboardingNavigation } from './hooks';
import { styles } from './onboarding.styles';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// Generate floating particles
const generateParticles = () => 
  Array.from({ length: 12 }, (_, i) => ({
    id: i,
    delay: i * 500,
    size: 6 + Math.random() * 10,
    startX: Math.random() * SCREEN_WIDTH,
    startY: SCREEN_HEIGHT * 0.6 + Math.random() * (SCREEN_HEIGHT * 0.4),
  }));

export const OnboardingScreen = memo(() => {
  const {
    currentStep,
    faceIdEnabled,
    isLastStep,
    step,
    progress,
    handleNext,
    handleBack,
    handleSkip,
    handleToggleFaceId,
  } = useOnboardingNavigation();

  const particles = useMemo(() => generateParticles(), []);

  // Swipe gesture for navigation
  const panGesture = Gesture.Pan()
    .onEnd((event) => {
      if (event.velocityX < -500 && !isLastStep) {
        runOnJS(handleNext)();
      } else if (event.velocityX > 500 && currentStep > 0) {
        runOnJS(handleBack)();
      }
    });

  return (
    <GestureHandlerRootView style={styles.root}>
      <GestureDetector gesture={panGesture}>
        <LinearGradient
          colors={step.gradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradient}
        >
          {/* Floating Particles Background */}
          <View style={StyleSheet.absoluteFill} pointerEvents="none">
            {particles.map((particle) => (
              <FloatingParticle
                key={particle.id}
                delay={particle.delay}
                size={particle.size}
                startX={particle.startX}
                startY={particle.startY}
              />
            ))}
          </View>

          <View style={styles.container}>
            {/* Header */}
            <OnboardingHeader
              currentStep={currentStep}
              isLastStep={isLastStep}
              onBack={handleBack}
              onSkip={handleSkip}
            />

            {/* Progress Bar */}
            <Animated.View entering={FadeInDown.delay(200).springify()}>
              <OnboardingProgressBar 
                progress={progress} 
                currentStep={currentStep} 
                totalSteps={ONBOARDING_STEPS.length} 
              />
            </Animated.View>

            {/* Step Content */}
            <View style={styles.contentWrapper}>
              <StepContent step={step} currentStepIndex={currentStep} />
              
              {/* Face ID Toggle (only on last step) */}
              {isLastStep && (
                <>
                  <Spacer size="3xl" />
                  <FaceIdToggle 
                    enabled={faceIdEnabled} 
                    onToggle={handleToggleFaceId} 
                  />
                </>
              )}
            </View>

            {/* Bottom Navigation */}
            <BottomNavigation
              currentStep={currentStep}
              totalSteps={ONBOARDING_STEPS.length}
              isLastStep={isLastStep}
              onNext={handleNext}
            />
          </View>
        </LinearGradient>
      </GestureDetector>
    </GestureHandlerRootView>
  );
});
