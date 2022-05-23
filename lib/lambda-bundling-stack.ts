import { Stack, StackProps } from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';

export class LambdaBundlingStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new lambda.Function(this, 'MyLambda', {
      runtime: lambda.Runtime.NODEJS_16_X,
      handler: 'main.handler',
      code: lambda.Code.fromAsset('lambda', {
        bundling: {
          image: lambda.Runtime.NODEJS_16_X.bundlingImage,
          user: 'root',
          command: [
            'bash', '-c', [
              'npm --version',
              'cp package.json /asset-output/',
              'cp tsconfig.json /asset-output/',
              'cp main.ts /asset-output/',
              'cd /asset-output',
              'npm install',
              'npm run build'
            ].join(' && ')
          ]
        }
      })
    });
  }
}
