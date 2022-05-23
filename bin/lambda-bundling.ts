#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { LambdaBundlingStack } from '../lib/lambda-bundling-stack';

const app = new cdk.App();
new LambdaBundlingStack(app, 'LambdaBundlingStack');
