// modules
import React from 'react'
import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef: any = createNavigationContainerRef()

export function navigate(name: any, params: any) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  } else {
  }
}

export function goBack() {
  if (navigationRef.isReady()) {
    navigationRef.goBack();
  } else {
  }
}