#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkDemoStack } from '../lib/cdk-demo-stack';

const app = new cdk.App();
new CdkDemoStack(app, 'CdkDemoStack', {
  env: { account: '993092269568', region: 'us-east-1' }
});